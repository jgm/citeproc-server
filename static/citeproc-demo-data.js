// items 1-7 taken from citeproc-js demo

var sampleReferences = [
  [{
      "id": "diaz2013",
      "type": "article-journal",
      "title": "What is social construction?",
      "container-title": "European Journal of Philosophy",
      "page": "1-16",
      "URL": "http://onlinelibrary.wiley.com/doi/10.1111/ejop.12033/abstract",
      "DOI": "10.1111/ejop.12033",
      "ISSN": "1468-0378",
      "language": "en",
      "author": [{
        "family": "Díaz-León",
        "given": "Esa"
      }],
      "issued": {
        "date-parts": [
          [
            2013,
            5,
            1
          ]
        ]
      },
      "accessed": {
        "date-parts": [
          [
            2015,
            11,
            14
          ]
        ]
      },
      "container-title-short": "Eur J Philos"
    },
    {
      "id": "diaz2015",
      "type": "article-journal",
      "title": "In defence of historical constructivism about races",
      "container-title": "Ergo, an Open Access Journal of Philosophy",
      "volume": "2",
      "URL": "http://hdl.handle.net/2027/spo.12405314.0002.021",
      "DOI": "10.3998/ergo.12405314.0002.021",
      "ISSN": "2330-4014",
      "author": [{
        "family": "Díaz-León",
        "given": "Esa"
      }],
      "issued": {
        "date-parts": [
          [
            2015
          ]
        ]
      }
    },
    {
      "id": "diaz2016",
      "type": "article-journal",
      "title": "<i>Woman</i> as a politically significant term: A solution to the puzzle",
      "container-title": "Hypatia",
      "page": "245-258",
      "URL": "http://onlinelibrary.wiley.com.uaccess.univie.ac.at/doi/10.1111/hypa.12234/abstract",
      "DOI": "10.1111/hypa.12234",
      "ISSN": "1527-2001",
      "title-short": "<i>Woman</i> as a Politically Significant Term",
      "language": "en",
      "author": [{
        "family": "Díaz-León",
        "given": "Esa"
      }],
      "issued": {
        "date-parts": [
          [
            2016,
            2,
            1
          ]
        ]
      },
      "accessed": {
        "date-parts": [
          [
            2016,
            2,
            18
          ]
        ]
      },
      "container-title-short": "Hypatia"
    },
    {
      "URL": "https://plato.stanford.edu/archives/win2014/entries/conditionals/",
      "author": [{
        "family": "Edgington",
        "given": "Dorothy"
      }],
      "container-title": "The Stanford Encyclopedia of Philosophy",
      "edition": "Winter 2014",
      "editor": [{
        "family": "Zalta",
        "given": "Edward N."
      }],
      "id": "edgington:conditionals",
      "issued": {
        "date-parts": [
          [
            2014
          ]
        ]
      },
      "publisher": "Metaphysics Research Lab, Stanford University",
      "title": "Indicative conditionals",
      "type": "chapter"
    },
    {
      "author": [{
        "family": "Edgington",
        "given": "Dorothy"
      }],
      "container-title": "A Philosophical Companion to First-order Logic",
      "editor": [{
        "family": "Hughes",
        "given": "R. I. G."
      }],
      "id": "edgington:do",
      "issued": {
        "date-parts": [
          [
            1993
          ]
        ]
      },
      "page": "28-49",
      "publisher": "Hackett",
      "publisher-place": "Indianapolis",
      "title": "Do conditionals have truth-conditions?",
      "type": "chapter"
    },
    {
      "author": [{
        "family": "Edgington",
        "given": "Dorothy"
      }],
      "container-title": "Vagueness: A reader",
      "editor": [{
          "family": "Keefe",
          "given": "Rosanna"
        },
        {
          "family": "Smith",
          "given": "Peter"
        }
      ],
      "id": "edgington:vagueness",
      "issued": {
        "date-parts": [
          [
            1997
          ]
        ]
      },
      "page": "294-316",
      "publisher": "MIT",
      "publisher-place": "Cambridge, MA",
      "title": "Vagueness by degrees",
      "type": "chapter"
    },
    {
      "author": [{
        "family": "Etchemendy",
        "given": "John"
      }],
      "id": "etchemendy:concept",
      "issued": {
        "date-parts": [
          [
            1990
          ]
        ]
      },
      "publisher": "Harvard University Press",
      "publisher-place": "Cambridge, MA",
      "title": "The concept of logical consequence",
      "type": "book"
    },
    {
      "author": [{
        "family": "Etchemendy",
        "given": "John"
      }],
      "container-title": "New Essays on Tarski and Philosophy",
      "editor": [{
        "family": "Patterson",
        "given": "Douglas"
      }],
      "id": "etchemendy:reflections",
      "issued": {
        "date-parts": [
          [
            2008
          ]
        ]
      },
      "publisher": "Oxford University Press",
      "publisher-place": "Oxford",
      "title": "Reflections on consequence",
      "type": "chapter"
    }
  ],

  [{
      type: 'article-journal',
      title: 'Litigation in Japan: a new look at old problems',
      'container-title': 'Willamette Journal of International Law and Dispute Resolution',
      page: '121-142',
      volume: '10',
      issue: '1',
      source: 'JSTOR',
      URL: 'http://www.jstor.org/stable/26211211',
      ISSN: '1521-0235',
      'title-short': 'LITIGATION IN JAPAN',
      author: [{
        family: 'Haley',
        given: 'John O.',
      }],
      issued: {
        'date-parts': [
          [
            '2002'
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            10,
            1
          ]
        ]
      },
      id: '2kntpabvm2'
    },
    {
      type: 'article-journal',
      title: 'The Baseball Players\' Labor Market',
      'container-title': 'Journal of Political Economy',
      page: '242-258',
      volume: '64',
      issue: '3',
      source: 'JSTOR',
      URL: 'http://www.jstor.org/stable/1825886',
      ISSN: '0022-3808',
      journalAbbreviation: 'Journal of Political Economy',
      author: [{
        family: 'Rottenberg',
        given: 'Simon',
      }],
      issued: {
        'date-parts': [
          [
            '1956',
            6,
            1
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2014',
            12,
            4
          ]
        ]
      },
      id: 'ubidvozfpv'
    },
    {
      type: 'article-journal',
      title: 'Handbook on the International Transfer of Sentenced Persons',
      page: '78',
      source: 'Zotero',
      language: 'en',
      id: 'unjo0nrjad'
    },
    {
      type: 'article-journal',
      title: 'In search of an effective monitoring board model: board reforms and the political economy of corporate law in china',
      'container-title': 'connecticut joural of international law',
      page: '1-47',
      volume: '22:1',
      source: 'Zotero',
      URL: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=977400',
      language: 'en',
      author: [{
        family: 'Xi',
        given: 'Chao',
      }],
      issued: {
        'date-parts': [
          [
            '2006'
          ]
        ]
      },
      id: 'fn05bzxs8b'
    },
    {
      type: 'article-journal',
      title: 'BEYOND RESCUECOM v. GOOGLE. THE FUTURE OF KEYWORD ADVERTISING',
      page: '29',
      volume: '25',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'KemnitZer',
        given: 'Kristin',
      }],
      id: 'vynvejthcu'
    },
    {
      type: 'article-journal',
      title: 'New and Renewable Sources of Energy for Developing Countries',
      'container-title': 'Ambio',
      page: '307-308',
      volume: '14',
      issue: '4/5',
      source: 'JSTOR',
      URL: 'http://www.jstor.org/stable/4313169',
      ISSN: '0044-7447',
      author: [{
        family: 'Kristoferson',
        given: 'Lars',
      }],
      issued: {
        'date-parts': [
          [
            '1985'
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            11,
            5
          ]
        ]
      },
      id: 't093pix2wi'
    },
    {
      type: 'article-journal',
      title: 'Consumer protection in the EU',
      page: '24',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'Jana',
        given: 'VALANT',
      }],
      id: 'o7glfae69o'
    },
    {
      type: 'article-journal',
      title: 'Asymmetric regulation of access and price discrimination in telecommunications',
      page: '24',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'Peitz',
        given: 'Martin',
      }],
      id: 'tbft3kh4oq'
    },
    {
      type: 'article-journal',
      title: 'Civil Society and the Fight against Corruption',
      issue: 'Corruption',
      'abstract': 'This paper provides a state of play analysis of corruption and anti-corruption policies within the public\nsector and law enforcement institutions in the Republic of Moldova. It reflects on the role and potentials\nof civil society actors in the fight against corruption and highlights concrete recommendations for a civil\nsociety driven anti-corruption reform agenda. The paper draws on the results of a series of workshops with\nMoldovan civil society representatives and anti-corruption experts that aimed at identifying successful\nanti-corruption measures for combatting systemic corruption in the Republic of Moldova.',
      author: [{
          family: 'Ruslan Codreanu',
          given: 'Mathias Jopp',
        },
        {
          family: 'Victor Lutenco',
          given: 'Eremei Priseajniuc',
        },
        {
          family: 'Martin Sieg',
          given: '',
          literal: 'Martin Sieg',
        }
      ],
      id: '08fetdkv3p'
    },
    {
      type: 'article-journal',
      title: 'The Implications of Licensing Agreements and the First Sale Doctrine on U.S. And EU Secondary Markets for Digital Goods',
      'container-title': 'DUKE JOURNAL OF COMPARATIVE & INTERNATIONAL LAW',
      page: '28',
      volume: '24:529',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'Cobb',
        given: 'Kristin',
      }],
      id: 'gtxhukwmeu'
    },
    {
      type: 'article-journal',
      title: 'Art of Writing Judgments',
      page: '6',
      source: 'Zotero',
      language: 'en',
      id: 'vkkup8mx9j'
    },
    {
      type: 'article-journal',
      title: 'Ottoman Tax Registers ( <i>Tahrir Defterleri</i> )',
      'container-title': 'Historical Methods: A Journal of Quantitative and Interdisciplinary History',
      page: '87-102',
      volume: '37',
      issue: '2',
      source: 'Crossref',
      'abstract': 'The Ottoman government obtained current information on the empire’s sources of revenue through periodic registers called tahrir defterleri. These documents include detailed information on taxpaying subjects and taxable resources, making it possible to study the economic and social history of the Middle East and eastern Europe in the fifteenth and sixteenth centuries. Although the use of these documents has been typically limited to the construction of local histories, adopting a more optimistic attitude toward their potential and using appropriate sampling procedures can greatly increase their contribution to historical scholarship. They can be used in comprehensive quantitative studies and in addressing questions of broader historical significance or larger social scientific relevance.',
      URL: 'http://www.tandfonline.com/doi/abs/10.3200/HMTS.37.2.87-102',
      DOI: '10.3200/HMTS.37.2.87-102',
      ISSN: '0161-5440, 1940-1906',
      language: 'en',
      author: [{
        family: 'CoşGel',
        given: 'Metin M',
      }],
      issued: {
        'date-parts': [
          [
            '2004',
            4
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            6,
            5
          ]
        ]
      },
      id: 'umk3nf9gqp'
    },
    {
      type: 'article-journal',
      title: 'Bananas, Laos and economic development: farming practice and farmers\' perceptions',
      page: '188',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'Vansilalom',
        given: 'Viengphet',
      }],
      id: '92q45qc5ty'
    },
    {
      type: 'article',
      title: 'European Convention on the Transfer of Sentenced Persons.pdf',
      id: 'jj2o34zqpu'
    },
    {
      type: 'article-journal',
      title: '‘Better-Practice’ Concessions? Lessons from Cambodia’s Leopard-Skin Landscape',
      'container-title': 'Brill',
      'collection-title': 'Large-Scale Land Acquisitions',
      'abstract': 'In the context of the global land rush, policy debates are split on the question of state land concessions: are smallholder-centric ‘inclusive’ investment models the only real form of responsible agricultural investment, or are ‘responsible’ concessions possible when it comes to the protection of local land access? To help move this debate forwards, this paper examines two case studies in Cambodia—an oil palm plantation recently certified by the Roundtable on Sustainable Palm Oil (RSPO) and a teak plantation certified by the Forest Stewardship Council (FSC)—which we refer to as ‘better-practice’ concessions. These cases reflect efforts to operationalise the Cambodian government’s ‘Leopard-Skin’ policy, which stipulates that concessions be developed around smallholders rather than directly on top of them. We argue that regularisation is not inherently objectionable, but carries risks when carried out on a concession-by-concession basis, because it distances vulnerable land users from the potentially protective effects of the law and defers to localised, and often unequal, relations of authority. The paper thus highlights the challenges that investors and communities are likely to face even when concession developers seek to respect existing local land claims, and suggests that models based on empowered communities with more secure forms of tenure are likely to work better for all parties involved.',
      author: [{
        family: 'Michael B. Dwyer, Emily Polack and  Sokbunthoeun So',
        given: 'Christophe Gironde',
        suffix: 'Christophe Golay, Peter Messerli',
      }],
      issued: {
        'date-parts': [
          [
            '2016'
          ]
        ]
      },
      id: 'jgqjusw5wn'
    },
    {
      type: 'article-journal',
      title: 'Roots of the modern interstate border dispute',
      'container-title': 'The Journal of Conflict Resolution',
      page: '427-454',
      volume: '24',
      issue: '3',
      source: 'JSTOR',
      'abstract': 'Recently there has been a flare-up of several significant international border disputes. This study examines when these disputes are most likely to arise, when they will escalate into war, and when they will spread beyond the original national participants. Specifically, this article hypothesizes that the frequency of border disputes is highest between nations that have (1) roughly equal levels of power and (2) relatively low levels of technology; that the severity of these disputes is highest when there is (3) a low level of technology, (4) contention on ethnic rather than resource issues, and (5) a two-state rather than three-state "mutually-contiguous" set; and that the scope of these disputes is highest between nations that are (6) members of opposing blocs rather than the same bloc. Data on 66 border dispute cases during 1945-1974 confirm these hypotheses.',
      URL: 'http://www.jstor.org/stable/173640',
      ISSN: '0022-0027',
      author: [{
        family: 'Mandel',
        given: 'Robert',
      }],
      issued: {
        'date-parts': [
          [
            '1980'
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            11,
            5
          ]
        ]
      },
      id: '9hxf1h94ut'
    },
    {
      type: 'article-journal',
      title: 'E‐government and developing countries: an overview',
      'container-title': 'International Review of Law, Computers & Technology',
      page: '109-132',
      volume: '18',
      issue: '1',
      source: 'Crossref',
      URL: 'http://www.tandfonline.com/doi/abs/10.1080/13600860410001674779',
      DOI: '10.1080/13600860410001674779',
      ISSN: '1360-0869, 1364-6885',
      'title-short': 'E‐government and developing countries',
      language: 'en',
      author: [{
        family: 'Basu',
        given: 'Subhajit',
      }],
      issued: {
        'date-parts': [
          [
            '2004',
            3
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            12,
            17
          ]
        ]
      },
      id: '8msu4bo3uq'
    },
    {
      type: 'article-journal',
      title: 'Statelessness in International Law: A Historic Overview',
      page: '7',
      source: 'Zotero',
      language: 'en',
      author: [{
        family: 'Stiller',
        given: 'Martin',
      }],
      id: 'vxkp8hkjo1'
    },
    {
      type: 'article-journal',
      title: 'French Domestic Arbitration Law Special Feature',
      'container-title': 'International Lawyer (ABA)',
      page: '749-792',
      volume: '16',
      source: 'HeinOnline',
      URL: 'https://heinonline.org/HOL/P?h=hein.journals/intlyr16&i=763',
      journalAbbreviation: 'Int\'l L.',
      language: 'eng',
      author: [{
        family: 'Seppala',
        given: 'Christopher R.',
      }],
      issued: {
        'date-parts': [
          [
            '1982'
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            12,
            17
          ]
        ]
      },
      id: '1i4n7nzg9s'
    },
    {
      type: 'article-journal',
      title: 'The Recruitment and Training of Bureaucrats in the United States',
      'container-title': 'The Annals of the American Academy of Political and Social Science',
      page: '39-44',
      volume: '292',
      source: 'JSTOR',
      URL: 'http://www.jstor.org/stable/1029730',
      ISSN: '0002-7162',
      author: [{
        family: 'Sayre',
        given: 'Wallace S.',
      }],
      issued: {
        'date-parts': [
          [
            '1954'
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            11,
            9
          ]
        ]
      },
      id: 'mo7p8er5sz'
    },
    {
      type: 'article-journal',
      title: 'Statelessness: Violation or Conduit for Violation of Human Rights?',
      'container-title': 'Human Rights Quarterly',
      page: '106',
      volume: '3',
      issue: '1',
      source: 'Crossref',
      URL: 'https://www.jstor.org/stable/762070?origin=crossref',
      DOI: '10.2307/762070',
      ISSN: '02750392',
      'title-short': 'Statelessness',
      language: 'en',
      author: [{
        family: 'Walker',
        given: 'Dorothy Jean',
      }],
      issued: {
        'date-parts': [
          [
            '1981',
            2
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            11,
            8
          ]
        ]
      },
      id: '6x7tqwo7mu'
    },
    {
      type: 'article-journal',
      title: 'TAX PLANNING FOR CAPITAL ASSET DISPOSAL IS COMPLEX YET NECESSARY.',
      page: '5',
      source: 'Zotero',
      language: 'en',
      author: [{
          family: 'Joy',
          given: 'David',
        },
        {
          family: 'Vecchio',
          given: 'Stephen C Del',
        },
        {
          family: 'Clinton',
          given: 'B D Ouglas',
        },
        {
          family: 'Young',
          given: 'James C',
        }
      ],
      id: 'qpnu5xewnf'
    },
    {
      type: 'article-journal',
      title: 'Concession Agreements: From Private Contract to Public Policy',
      'container-title': 'The Yale Law Journal Company, Inc.',
      'abstract': 'C T. Many concession agreements between governments of developing countries and corporations have failed to produce expected infrastructural, monetary, and efficiency gains. This Note argues that these agreements fail in part because the parties construct them as traditional private contracts. Given their subject matter, their noneconomic focus and purposes, and the ways in which they shape future economic development strategy, international policymakers and business leaders should conceptually and procedurally recast concession agreements as traditional matters of public policy. This reinterpretation will make the agreements more stable and successful by making their costs and benefits more transparent, their drafters more accountable to the populations they are intended to benefit, and their terms more responsive to the concerns of those populations',
      URL: 'https://www.jstor.org/stable/20455800',
      author: [{
        family: 'Nicholas Miranda',
        given: '',
        literal: 'Nicholas Miranda',
      }],
      id: 'qne70flb0r'
    },
    {
      type: 'article-journal',
      title: 'From Domestic to Global? Recent Trends in Environmental Liability from a Multi-Level and Comparative Law Perspective',
      'container-title': 'Review of European Community & International Environmental Law',
      page: 'pp. 289-303.',
      volume: '24',
      issue: '3',
      'abstract': 'The law of environmental liability has already been the object of several comparative endeavours. This article seeks to bring a different perspective to the debate, by examining selected developments in the field through the lens of the emerging global environmental law scholarship. It brings the comparative method of analysis into a multi-level context with a view to identifying the emergence of common legal responses to the problem of liability and reparation for environmental harm across different jurisdictions and regulatory levels. The analysis will focus on a ‘novel’ set of environmental liability regimes, which specifically address damage to the environment and to natural resources, as distinct from more traditional categories of damage to property and other individual rights arising as a consequence of environmental pollution. These include: the United States Comprehensive Environmental Response, Compensation, and Liability Act, and the Oil Pollution Act, which constitute a pioneering attempt to envisage a public law-oriented system of liability and restoration for damage to natural resources; the European Union Environmental Liability Directive; and selected, recent international treaty developments. The article argues that, while adopted within different legal orders and regulatory contexts, these environmental liability regimes share common features, which correspond to the ontological aspects of environmental damage and ultimately reflect a common understanding of the environment as a global public good.',
      URL: 'https://onlinelibrary.wiley.com/doi/epdf/10.1111/reel.12136',
      DOI: '10.1111/reel.12136',
      ISSN: '2050-0386',
      language: 'English',
      author: [{
        family: 'Emanuela Orlando',
        given: '',
        literal: 'Emanuela Orlando',
      }],
      issued: {
        'date-parts': [
          [
            '2015',
            10,
            19
          ]
        ]
      },
      id: '9lkyj6mxpl'
    },
    {
      type: 'article-journal',
      title: 'Blinking on the Bench: How Judges Decide Cases',
      'container-title': 'Cornell Law Review',
      page: '1-44',
      volume: '93',
      source: 'HeinOnline',
      URL: 'https://heinonline.org/HOL/P?h=hein.journals/clqv93&i=3',
      'title-short': 'Blinking on the Bench',
      journalAbbreviation: 'Cornell L. Rev.',
      language: 'eng',
      author: [{
          family: 'Guthrie',
          given: 'Chris',
        },
        {
          family: 'Rachlinski',
          given: 'Jeffrey J.',
        },
        {
          family: 'Wistrich',
          given: 'Andrew J.',
        }
      ],
      issued: {
        'date-parts': [
          [
            '2007'
          ],
          [
            2008
          ]
        ]
      },
      accessed: {
        'date-parts': [
          [
            '2018',
            12,
            18
          ]
        ]
      },
      id: 'k4l65zfg1y'
    }
  ],
];

var sampleCitations = [
  [
    [{
        "id": "diaz2013"
      },
      {
        "prefix": "see also ",
        "id": "diaz2016",
        "locator": 251,
        "label": "page"
      },
      {
        "id": "diaz2015"
      }
    ],
    [{
      "id": "etchemendy:concept"
    }]
  ],

  [
    [{
        citationID: 'SXDNEKR5AD',
        citationItems: [{
          id: '2kntpabvm2'
        }],
        properties: {
          noteIndex: 1
        }
      },
      [],
      []
    ],
    [{
        citationID: 'JZNLFQX4O5',
        citationItems: [{
          id: 'ubidvozfpv'
        }],
        properties: {
          noteIndex: 2
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ]
      ],
      []
    ],
    [{
        citationID: 'RTME11VFU2',
        citationItems: [{
          id: 'unjo0nrjad'
        }],
        properties: {
          noteIndex: 3
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ]
      ],
      []
    ],
    [{
        citationID: '9JDU56GUQE',
        citationItems: [{
          id: 'fn05bzxs8b'
        }],
        properties: {
          noteIndex: 4
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ]
      ],
      []
    ],
    [{
        citationID: 'JR7944MVMF',
        citationItems: [{
          id: 'vynvejthcu'
        }],
        properties: {
          noteIndex: 5
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ]
      ],
      []
    ],
    [{
        citationID: 'B7KJGSND3J',
        citationItems: [{
          id: 't093pix2wi'
        }],
        properties: {
          noteIndex: 6
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ]
      ],
      []
    ],
    [{
        citationID: 'QJKXYRLACJ',
        citationItems: [{
          id: 'o7glfae69o'
        }],
        properties: {
          noteIndex: 7
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ]
      ],
      []
    ],
    [{
        citationID: 'K3PGTSPU9E',
        citationItems: [{
          id: 'tbft3kh4oq'
        }],
        properties: {
          noteIndex: 8
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ]
      ],
      []
    ],
    [{
        citationID: '870U89B4O6',
        citationItems: [{
          id: '08fetdkv3p'
        }],
        properties: {
          noteIndex: 9
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ]
      ],
      []
    ],
    [{
        citationID: 'V1HIAG33VN',
        citationItems: [{
          id: 'gtxhukwmeu'
        }],
        properties: {
          noteIndex: 10
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ]
      ],
      []
    ],
    [{
        citationID: 'GWZBYXJOVX',
        citationItems: [{
          id: 'vkkup8mx9j'
        }],
        properties: {
          noteIndex: 11
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ]
      ],
      []
    ],
    [{
        citationID: '1LAD2NKKUR',
        citationItems: [{
          id: 'umk3nf9gqp'
        }],
        properties: {
          noteIndex: 12
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ]
      ],
      []
    ],
    [{
        citationID: 'ACUM2NWUN9',
        citationItems: [{
          id: '92q45qc5ty'
        }],
        properties: {
          noteIndex: 13
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ]
      ],
      []
    ],
    [{
        citationID: 'KPR2HM6PKU',
        citationItems: [{
          id: 'jj2o34zqpu'
        }],
        properties: {
          noteIndex: 14
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ]
      ],
      []
    ],
    [{
        citationID: 'UD7UY63FOU',
        citationItems: [{
          id: 'jgqjusw5wn'
        }],
        properties: {
          noteIndex: 15
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ]
      ],
      []
    ],
    [{
        citationID: 'LKS4B7MS3Y',
        citationItems: [{
          id: '9hxf1h94ut'
        }],
        properties: {
          noteIndex: 16
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ]
      ],
      []
    ],
    [{
        citationID: 'S7YHQE56TF',
        citationItems: [{
          id: '8msu4bo3uq'
        }],
        properties: {
          noteIndex: 17
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ]
      ],
      []
    ],
    [{
        citationID: 'WC0FYV6D60',
        citationItems: [{
          id: 'vxkp8hkjo1'
        }],
        properties: {
          noteIndex: 18
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ]
      ],
      []
    ],
    [{
        citationID: 'OWVL2EE0AM',
        citationItems: [{
          id: '1i4n7nzg9s'
        }],
        properties: {
          noteIndex: 19
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ]
      ],
      []
    ],
    [{
        citationID: 'TA1394EMR0',
        citationItems: [{
          id: 'mo7p8er5sz'
        }],
        properties: {
          noteIndex: 20
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ]
      ],
      []
    ],
    [{
        citationID: 'X23KK2PY99',
        citationItems: [{
          id: '6x7tqwo7mu'
        }],
        properties: {
          noteIndex: 21
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ],
        [
          'TA1394EMR0',
          20
        ]
      ],
      []
    ],
    [{
        citationID: 'NUZQT03DUU',
        citationItems: [{
          id: 'qpnu5xewnf'
        }],
        properties: {
          noteIndex: 22
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ],
        [
          'TA1394EMR0',
          20
        ],
        [
          'X23KK2PY99',
          21
        ]
      ],
      []
    ],
    [{
        citationID: '4R3JIJ120E',
        citationItems: [{
          id: 'qne70flb0r'
        }],
        properties: {
          noteIndex: 23
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ],
        [
          'TA1394EMR0',
          20
        ],
        [
          'X23KK2PY99',
          21
        ],
        [
          'NUZQT03DUU',
          22
        ]
      ],
      []
    ],
    [{
        citationID: 'G5FAQWKKRW',
        citationItems: [{
          id: '9lkyj6mxpl'
        }],
        properties: {
          noteIndex: 24
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ],
        [
          'TA1394EMR0',
          20
        ],
        [
          'X23KK2PY99',
          21
        ],
        [
          'NUZQT03DUU',
          22
        ],
        [
          '4R3JIJ120E',
          23
        ]
      ],
      []
    ],
    [{
        citationID: 'XGR2ARHDL8',
        citationItems: [{
          id: 'k4l65zfg1y'
        }],
        properties: {
          noteIndex: 25
        }
      },
      [
        [
          'SXDNEKR5AD',
          1
        ],
        [
          'JZNLFQX4O5',
          2
        ],
        [
          'RTME11VFU2',
          3
        ],
        [
          '9JDU56GUQE',
          4
        ],
        [
          'JR7944MVMF',
          5
        ],
        [
          'B7KJGSND3J',
          6
        ],
        [
          'QJKXYRLACJ',
          7
        ],
        [
          'K3PGTSPU9E',
          8
        ],
        [
          '870U89B4O6',
          9
        ],
        [
          'V1HIAG33VN',
          10
        ],
        [
          'GWZBYXJOVX',
          11
        ],
        [
          '1LAD2NKKUR',
          12
        ],
        [
          'ACUM2NWUN9',
          13
        ],
        [
          'KPR2HM6PKU',
          14
        ],
        [
          'UD7UY63FOU',
          15
        ],
        [
          'LKS4B7MS3Y',
          16
        ],
        [
          'S7YHQE56TF',
          17
        ],
        [
          'WC0FYV6D60',
          18
        ],
        [
          'OWVL2EE0AM',
          19
        ],
        [
          'TA1394EMR0',
          20
        ],
        [
          'X23KK2PY99',
          21
        ],
        [
          'NUZQT03DUU',
          22
        ],
        [
          '4R3JIJ120E',
          23
        ],
        [
          'G5FAQWKKRW',
          24
        ]
      ],
      []
    ]
  ],

];
