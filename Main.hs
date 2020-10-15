{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}

module Main where

import Prelude ()
import Prelude.Compat

import Control.Monad
import Control.Monad.Except
import Citeproc
import Citeproc.CslJson
import System.Clock (TimeSpec(..))
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
import Data.Char (isAlphaNum)
import Control.Monad.Trans (liftIO)
import Control.Applicative
import Data.Cache

type CiteprocAPI =
  "citeproc" :> ReqBody '[JSON] (Inputs (CslJson Text))
             :> QueryParam "style" Text
             :> QueryParam "lang" Text
             :> Post '[JSON] (Result (CslJson Text))

citeprocAPI :: Proxy CiteprocAPI
citeprocAPI = Proxy

err :: Text -> Handler a
err t =
  throwError $ err500 { errBody = BL.fromStrict $ TE.encodeUtf8 t }

server1 :: Server CiteprocAPI
server1 = citeprocServer
 where
  citeprocServer inputs mbSty mbLang = do
    style <- case mbSty of
               Just s -> loadNamedStyle s
               Nothing ->
                 case inputsStyle inputs of
                    Just s | T.all (\c -> isAlphaNum c || c == '-') s
                           -> loadNamedStyle s
                    Just s -> do -- parse XML
                      parseResult <- parseStyle (\_ -> return mempty) s
                      case parseResult of
                         Left e -> err $ prettyCiteprocError e
                         Right sty -> return sty
                    Nothing -> err $ "No style specified"
    let lang = (parseLang <$> mbLang) <|> inputsLang inputs
    let abbreviations = inputsAbbreviations inputs
    let references = fromMaybe [] $ inputsReferences inputs
    let citations = fromMaybe [] $ inputsCitations inputs
    return $ citeproc defaultCiteprocOptions
                      style{ styleAbbreviations = abbreviations }
                      lang
                      references
                      citations

app :: Application
app = serve citeprocAPI server1

loadNamedStyle :: Text -> Handler (Style (CslJson Text))
loadNamedStyle s = do
  mbStyleDir <- liftIO $ lookupEnv "CSL_STYLES"
  case mbStyleDir of
    Nothing -> err $ "CSL_STYLES not set"
    Just d  -> do
      mbtxt <- liftIO $ Just <$>
               ( TIO.readFile (d </> T.unpack s <.> "csl")
                 <|>
                 TIO.readFile (d </> "dependent" </> T.unpack s <.> "csl") )
              <|> pure Nothing
      parseResult <- maybe
        (err $ "style " <> s <> " not found")
        (\txt -> liftIO $ parseStyle
                   (\url -> TIO.readFile (d </>
                             T.unpack (T.takeWhileEnd (/='/') url) <.> "csl"))
                   txt)
        mbtxt
      case parseResult of
        Left e -> err $ prettyCiteprocError e
        Right sty -> return sty

type StyleMap = M.Map Text (Style (CslJson Text))

main :: IO ()
main = do
  (cache :: Cache Text StyleMap) <- newCache (Just $ TimeSpec 60 0)
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
  TIO.putStrLn "Serving citeproc API at port 8081"
  run 8081 app

