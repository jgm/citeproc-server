{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}

module Main where

import Prelude ()
import Prelude.Compat

import Data.Aeson
import Control.Monad
import Control.Monad.Except
import Citeproc
import Citeproc.CslJson
import Data.FileEmbed (embedDir)
import Data.Text (Text)
import qualified Data.Text as T
import qualified Data.Text.IO as TIO
import Servant.API
import Servant.Server.StaticFiles (serveDirectoryEmbedded)
import Servant
import Safe (readMay)
import Network.Wai
import Network.Wai.Handler.Warp as Warp
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
import Data.Char (isAlphaNum)
import Data.List (sort)
import Control.Monad.Trans (liftIO)
import Control.Applicative
import Options.Applicative
import Debug.Trace

type CiteprocAPI =
  "citeproc" :> ReqBody '[JSON] (Inputs (CslJson Text))
             :> QueryParam "lang" Text
             :> Post '[JSON] CiteprocResult
  :<|> Raw

data CiteprocResult =
  CiteprocResult
    { citeprocResultBibliography  :: [(Text, Text)]
    , citeprocResultCitations     :: [Text]
    , citeprocResultWarnings      :: [Text]
    , citeprocResultHangingIndent :: Bool
    , citeprocResultEntrySpacing  :: Int
    , citeprocResultLineSpacing   :: Int
    } deriving (Show, Eq)

instance ToJSON CiteprocResult where
 toJSON r = object
   [ ("bibliography", toJSON $ citeprocResultBibliography r)
   , ("citations", toJSON $ citeprocResultCitations r)
   , ("warnings", toJSON $ citeprocResultWarnings r)
   , ("hanging-ident", toJSON $ citeprocResultHangingIndent r)
   , ("entry-spacing", toJSON $ citeprocResultEntrySpacing r)
   , ("line-spacing", toJSON $ citeprocResultLineSpacing r)
   ]

citeprocAPI :: Proxy CiteprocAPI
citeprocAPI = Proxy

err :: Text -> Handler a
err t =
  throwError $ err500 { errBody = BL.fromStrict $ TE.encodeUtf8 t }

server1 :: Server CiteprocAPI
server1 =
  citeprocServer
  :<|> serveDirectoryEmbedded staticDir

 where

  staticDir = $(embedDir "static")

  citeprocServer :: Inputs (CslJson Text)
                 -> Maybe Text
                 -> Handler CiteprocResult
  citeprocServer inputs mbLang = do
    style <- case inputsStyle inputs of
               Just s -> do -- parse XML
                 parseResult <- parseStyle
                    (getNamedStyle . T.takeWhileEnd (/='/')) s
                 case parseResult of
                    Left e -> err $ prettyCiteprocError e
                    Right sty -> return sty
               Nothing -> err "No style specified"
    let lang = (mbLang >>= \l -> case parseLang l of
                                   Left _ -> Nothing
                                   Right l' -> Just l')
                  <|> inputsLang inputs
    let abbreviations = inputsAbbreviations inputs
    let references = fromMaybe [] $ inputsReferences inputs
    let citations = fromMaybe [] $ inputsCitations inputs
    let locale = mergeLocales lang style
    let sopts = styleOptions style
    result <- traverse (return . renderCslJson True locale)
                $ citeproc defaultCiteprocOptions
                           style{ styleAbbreviations = abbreviations }
                           lang
                           references
                           citations
    return $ CiteprocResult
             { citeprocResultBibliography = resultBibliography result
             , citeprocResultCitations = resultCitations result
             , citeprocResultWarnings = resultWarnings result
             , citeprocResultHangingIndent = styleHangingIndent sopts
             , citeprocResultEntrySpacing = fromMaybe 0 $
                                              styleEntrySpacing sopts
             , citeprocResultLineSpacing = fromMaybe 1 $
                                              styleLineSpacing sopts
             }

app :: Application
app = serve citeprocAPI server1

getNamedStyle :: Text -> Handler Text
getNamedStyle s = err $ "style " <> s <> " not found"

data Opts = Opts
  { port      :: Int
  }

optsSpec :: Parser Opts
optsSpec = Opts
      <$> option (maybeReader readMay)
          ( long "port"
         <> short 'p'
         <> metavar "NUMBER"
         <> showDefault
         <> value 8081
         <> help "Port on which to run the server" )

main :: IO ()
main = do
  let options = info (optsSpec <**> helper)
        ( fullDesc
       <> progDesc "Run a server for citeproc"
       <> header "citeproc-server - an HTTP server for citeproc" )
  opts <- execParser options
  putStrLn $ "Starting server on port " <> show (port opts)
  let settings = Warp.setPort (port opts) Warp.defaultSettings
  Warp.runSettings settings app
