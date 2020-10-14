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
import Data.ByteString.Lazy as BL
import Data.ByteString (ByteString)
import System.FilePath
import qualified Data.Map as M
import System.Exit
import System.Directory (listDirectory)
import System.IO (stderr)

type CiteprocAPI =
  "citeproc" :> ReqBody '[JSON] (Inputs (CslJson Text))
             :> Post '[JSON] (Result (CslJson Text))

citeprocAPI :: Proxy CiteprocAPI
citeprocAPI = Proxy

server1 :: Server CiteprocAPI
server1 = citeprocServer
 where
  citeprocServer inputs = do
    stylesheet <- case inputsStyle inputs of
                    Just s  -> return s
                    Nothing ->
                      throwError $ err500 { errBody = "No style specified" }
    let lang = inputsLang inputs
    let abbreviations = inputsAbbreviations inputs
    let references = fromMaybe [] $ inputsReferences inputs
    let citations = fromMaybe [] $ inputsCitations inputs
    parseResult <- parseStyle (\_ -> return mempty) stylesheet
    case parseResult of
      Left e -> throwError $ err500 { errBody = BL.fromStrict $ TE.encodeUtf8 $
                                                  prettyCiteprocError e }
      Right parsedStyle -> do
        let style = parsedStyle{ styleAbbreviations = abbreviations }
        let locale = mergeLocales lang style
        let result = citeproc defaultCiteprocOptions
                       style
                       lang
                       references
                       citations
        return result

app :: Application
app = serve citeprocAPI server1

main :: IO ()
main = do
  stylePaths <- listDirectory "style"
  styleMap <- foldM addStyle mempty stylePaths
  run 8081 app

addStyle :: M.Map Text (Style (CslJson Text))
         -> FilePath
         -> IO (M.Map Text (Style (CslJson Text)))
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
