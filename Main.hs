{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}

module Main where

import Prelude ()
import Prelude.Compat

import Control.Monad
import Citeproc
import Citeproc.CslJson
import Data.Text (Text)
import qualified Data.Text as T
import qualified Data.Text.IO as TIO
import Servant.API
import Servant
import Network.Wai
import Network.Wai.Handler.Warp
import Data.Maybe
import Data.Text.Encoding as TE
import qualified Data.ByteString.Lazy as BL
import Data.ByteString (ByteString)
import System.FilePath
import qualified Data.Map as M
import System.Environment
import System.Exit
import System.Directory (listDirectory, doesDirectoryExist)
import System.IO (stderr)

type CiteprocAPI =
  "citeproc" :> ReqBody '[JSON] (Inputs (CslJson Text))
             :> Post '[JSON] (Result (CslJson Text))

citeprocAPI :: Proxy CiteprocAPI
citeprocAPI = Proxy

server1 :: StyleMap -> Server CiteprocAPI
server1 styleMap = citeprocServer
 where
  citeprocServer inputs = do
    style <- case inputsStyle inputs of
                    Just s | T.any (=='<') s  -> do -- parse XML
                      parseResult <- parseStyle (\_ -> return mempty) s
                      case parseResult of
                         Left e -> throwError $
                           err500 { errBody = BL.fromStrict $
                              TE.encodeUtf8 $ prettyCiteprocError e }
                         Right sty -> return sty
                    Just s ->
                      case M.lookup (T.strip . T.toLower $ s) styleMap of
                        Just sty -> return sty
                        Nothing -> throwError $
                            err500 { errBody = BL.fromStrict $
                            TE.encodeUtf8 $ "Unknown style " <> s }
                    Nothing -> throwError $
                       err500 { errBody = "No style specified" }
    let lang = inputsLang inputs
    let abbreviations = inputsAbbreviations inputs
    let references = fromMaybe [] $ inputsReferences inputs
    let citations = fromMaybe [] $ inputsCitations inputs
    return $ citeproc defaultCiteprocOptions
                      style{ styleAbbreviations = abbreviations }
                      lang
                      references
                      citations

app :: StyleMap -> Application
app styleMap = serve citeprocAPI (server1 styleMap)

main :: IO ()
main = do
  mbStylePath <- lookupEnv "CSL_STYLES"
  let getCslFiles fp = do
        exists <- doesDirectoryExist fp
        if exists
           then map (fp </>) . filter ((== ".csl") . takeExtension)
                 <$> listDirectory fp
           else return []
  stylePaths <-
    case mbStylePath of
      Just stylePath ->
        (++) <$> getCslFiles stylePath
             <*> getCslFiles (stylePath </> "dependent")
      Nothing -> do
        TIO.putStrLn "No styles loaded.  Set the CSL_STYLES environment"
        TIO.putStrLn "variable to the directory containing CSL styles."
        return []
  TIO.putStrLn "Loading style map...stand by..."
  styleMap <- foldM addStyle mempty stylePaths
  TIO.putStrLn "Serving citeproc API at port 8081"
  run 8081 (app styleMap)

type StyleMap = M.Map Text (Style (CslJson Text))

addStyle :: StyleMap -> FilePath -> IO StyleMap
addStyle m fp = do
  let name = T.pack $ dropExtension $ takeBaseName fp
  txt <- TIO.readFile fp
  res <- parseStyle (\url ->
              TIO.readFile ("styles"
                </> T.unpack (T.takeWhileEnd (/='/') url)
                <.> "csl"))
              txt
  style <- case res of
             Right x -> return x
             Left e  -> do
               TIO.hPutStrLn stderr $ prettyCiteprocError e
               exitWith $ ExitFailure 1
  TIO.putStrLn name
  return $ M.insert name style m
