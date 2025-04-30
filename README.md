# citeproc-server

A web API wrapping the Haskell citeproc library.  Use `--port` or `-p` to
specify the port.

## Request

A POST request will be accepted at `/citeproc`. The request body
should be a JSON document with the following structure:

``` json
{ "citations":     [ ...list of citations... ],
  "references":    [ ...list of references... ],
  "style":         "<style>...</style>",
  "abbreviations": { ...abbreviations... },
  "lang":          "fr-FR" }
```

A citation is structured like this:

``` json
{ "citationID": "foo",
  "citationItems": [ ...list of citationItems... ],
  "citationNoteNumber": 3 }
```

Only `citationItems` is necessary.  Alternatively,
instead of

``` json
{ "citationItems": [ ... ] }
```

one can just specify an array of items directly:

``` json
[ ... ]
```

A citation item is structured like this:

``` json
{ "id":       "foo",
  "type":     "suppress-author",
  "label":    "page",
  "locator":  "45",
  "prefix":   "see ",
  "suffix":   " and others" }
```

Only `id` is mandatory.  If `type` is omitted, it will
be assumed to be `normal-cite` (other values are
`suppress-author` and `author-only`).

A reference is structured like this:

``` json
{
  "author": [
    {
      "family": "Aristotle"
    }
  ],
  "id": "aristotle:prior",
  "issued": {
    "date-parts": [
      [
        1989
      ]
    ]
  },
  "publisher": "Hackett",
  "publisher-place": "Indianapolis",
  "title": "Prior analytics",
  "translator": [
    {
      "family": "Smith",
      "given": "Robin"
    }
  ],
  "type": "book"
}
```

An abbreviations object has this form:

``` json
{ "default": {
    "container-title": {
            "Lloyd's Law Reports": "Lloyd's Rep",
            "Estates Gazette": "EG",
            "Scots Law Times": "SLT"
    }
  }
}
```

The abbreviations will be substituted in the output
only when the `form` attribute for the style element that
renders the variable is set to `short`.

## Response

The output JSON will have the structure:

``` json
{ "citations":    [ ...list of strings... ],
  "bibliography": [ ...list of arrays: item id and a string... ],
  "warnings":     [ ...list of warnings... ]
}
```

