```
CSL_STYLES=styles cabal run
```

Notes:

style and lang can be used as parameters to override anything
in the request body:

e.g.

```
curl -d @test.json -H "Content-Type: application/json" 'localhost:8081/citeproc?style=zoology&lang=fr'
```

test.json looks like this:

```
{ "citations":
[ [ {"id":"diaz2013","prefix":"see "}, {"id":"diaz2016", "prefix": "also "}, {"id":"diaz2015"} ] ],
  "references":
[ {"id":"diaz2013","type":"article-journal","title":"What Is Social Construction?","container-title":"European Journal of Philosophy","page":"1-16","URL":"http://onlinelibrary.wiley.com/doi/10.1111/ejop.12033/abstract","DOI":"10.1111/ejop.12033","ISSN":"1468-0378","language":"en","author":[{"family":"Díaz-León","given":"Esa"}],"issued":{"date-parts":[[2013,5,1]]},"accessed":{"date-parts":[[2015,11,14]]},"container-title-short":"Eur J Philos"}
, {"id":"diaz2015","type":"article-journal","title":"In Defence of Historical Constructivism about Races","container-title":"Ergo, an Open Access Journal of Philosophy","volume":"2","URL":"http://hdl.handle.net/2027/spo.12405314.0002.021","DOI":"10.3998/ergo.12405314.0002.021","ISSN":"2330-4014","author":[{"family":"Díaz-León","given":"Esa"}],"issued":{"date-parts":[[2015]]}}
, {"id":"diaz2016","type":"article-journal","title":"<i>Woman</i> as a Politically Significant Term: A Solution to the Puzzle","container-title":"Hypatia","page":"245-258","URL":"http://onlinelibrary.wiley.com.uaccess.univie.ac.at/doi/10.1111/hypa.12234/abstract","DOI":"10.1111/hypa.12234","ISSN":"1527-2001","title-short":"<i>Woman</i> as a Politically Significant Term","language":"en","author":[{"family":"Díaz-León","given":"Esa"}],"issued":{"date-parts":[[2016,2,1]]},"accessed":{"date-parts":[[2016,2,18]]},"container-title-short":"Hypatia"}
]
}
```

See citeproc executable documentation for details.

