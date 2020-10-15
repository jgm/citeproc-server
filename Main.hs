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
import System.Directory (listDirectory)
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
                    Just s  ->
                      case M.lookup (T.strip . T.toLower $ s) styleMap of
                        Just sty -> return sty
                        Nothing -> do -- parse XML
                          parseResult <- parseStyle (\_ -> return mempty) s
                          case parseResult of
                             Left e -> throwError $
                               err500 { errBody = BL.fromStrict $
                                  TE.encodeUtf8 $ prettyCiteprocError e }
                             Right sty -> return sty
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
  args <- getArgs
  stylePaths <- mconcat <$>
    mapM (\dir -> map (dir </>) <$> listDirectory dir) args
  styleMap <- foldM addStyle mempty $
                filter ((== ".csl") . takeExtension) stylePaths
  TIO.putStrLn $ "Loaded styles:"
  mapM_ TIO.putStrLn $ M.keys styleMap
  run 8081 (app styleMap)

type StyleMap = M.Map Text (Style (CslJson Text))

addStyle :: StyleMap -> FilePath -> IO StyleMap
addStyle m fp = do
  let name = T.pack $ dropExtension $ takeBaseName fp
  txt <- TIO.readFile fp
  res <- parseStyle (\url ->
              TIO.readFile (T.unpack $ "styles/" <> T.dropWhileEnd (/='/') url))
              txt
  style <- case res of
             Right x -> return x
             Left e  -> do
               TIO.hPutStrLn stderr $ prettyCiteprocError e
               exitWith $ ExitFailure 1
  return $ M.insert name style m
