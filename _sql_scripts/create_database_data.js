// All book-list are from Google Book Api with the following criteria
// Google books api request: https://www.googleapis.com/books/v1/volumes?q=Dungeons&maxResults=40&printType=books&key=YOUR_PRIVATE_KEY
// DOCS: https://developers.google.com/books/docs/v1/using#st_params
// feel free to add new columns to the database tables and private_service.proto to improve user experience at the TVBox
let booksList = {
  "kind": "books#volumes",
  "totalItems": 451,
  "items": [
    {
      "kind": "books#volume",
      "id": "8EvYDwAAQBAJ",
      "etag": "0HStoQG+3ug",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/8EvYDwAAQBAJ",
      "volumeInfo": {
        "title": "DUNGEONS & DRAGONS - MONSTROS & CRIATURAS",
        "authors": [
          "Dungeons & Dragons",
          "Jim Zub",
          "Stacy King",
          "Andrew Wheeler "
        ],
        "publisher": "BOOK ONE Editora Ltda",
        "publishedDate": "2018-10-07",
        "description": "Este livro épico totalmente ilustrado produzido pelo time da Wizards of the Coast transportará você para os mundos lendários e mágicos de Dungeons & Dragons, trazendo fichas únicas sobre alguns dos monstros mais sinistros, horríveis e memoráveis do sistema. Com ilustrações sensacionais e dicas especializadas sobre alguns dos monstros mais perigosos de D&D, este guia destaca feras que assustam, empolgam e metem os aventureiros em confusão — de criaturas que vivem nos subterrâneos àquelas que voam pelos céus, passando pelas que habitam a natureza selvagem ou os cemitérios. Nesses perfis, você irá encontrar informações sobre o tamanho e o nível de perigo de cada um dos monstros, além de dicas para sobreviver a um encontro com eles. Este livro é o ponto de partida perfeito para os jovens fãs de fantasia que mal veem a hora de se tornar aventureiros de D&D, apresentando também histórias introdutórias chamadas de “Encontro” para que os leitores possam exercitar as habilidades de solução de problemas das quais precisarão para lutar contra esses monstros enquanto jogam suas próprias aventuras de D&D.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9786580448067"
          },
          {
            "type": "ISBN_10",
            "identifier": "6580448067"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 112,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=8EvYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=8EvYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt-BR",
        "previewLink": "http://books.google.com.br/books?id=8EvYDwAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=8EvYDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=8EvYDwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 19.9,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 19.9,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=8EvYDwAAQBAJ&rdid=book-8EvYDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 19900000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 19900000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/DUNGEONS_DRAGONS_MONSTROS_CRIATURAS-sample-epub.acsm?id=8EvYDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/DUNGEONS_DRAGONS_MONSTROS_CRIATURAS-sample-pdf.acsm?id=8EvYDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8EvYDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Este livro épico totalmente ilustrado produzido pelo time da Wizards of the Coast transportará você para os mundos lendários e mágicos de Dungeons &amp; Dragons, trazendo fichas únicas sobre alguns dos monstros mais sinistros, horríveis ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "YVlEBAAAQBAJ",
      "etag": "U1y1LfGY9nk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/YVlEBAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons and Dragons and Philosophy",
        "subtitle": "Read and Gain Advantage on All Wisdom Checks",
        "authors": [
          "Christopher Robichaud"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2014-08-05",
        "description": "Do demons and devils have free will? Does justice exist inMenzoberranzan? What’s the morality involved with playercharacters casting necromancy and summoning spells? Dungeons & Dragons and Philosophy probes the richterrain of philosophically compelling concepts and ideas thatunderlie Dungeons & Dragons, the legendary fantasyrole-playing game that grew into a world-wide cultural phenomenon.A series of accessible essays reveals what the imaginary worlds ofD&D can teach us about ethics, morality, metaphysics andmore. Illustrates a wide variety of philosophical concepts and ideasthat arise in Dungeons & Dragons gameplay and presentsthem in an accessible and entertaining manner Reveals how the strategies, tactics, improvisations, androle-play employed by D&D enthusiasts have startlingparallels in the real world of philosophy Explores a wide range of philosophical topics, including thenature of free will, the metaphysics of personal identity, themorality of crafting fictions, sex and gender issues in tabletopgameplay, and friendship and collaborative storytelling Provides gamers with deep philosophical insights that can leadto a richer appreciation of D&D and any gamingexperience",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781118397640"
          },
          {
            "type": "ISBN_10",
            "identifier": "1118397649"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 240,
        "printType": "BOOK",
        "categories": [
          "Philosophy"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.1.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=YVlEBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=YVlEBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=YVlEBAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=YVlEBAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=YVlEBAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 57.9,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 57.9,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=YVlEBAAAQBAJ&rdid=book-YVlEBAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 57900000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 57900000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_and_Dragons_and_Philosophy-sample-epub.acsm?id=YVlEBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_and_Dragons_and_Philosophy-sample-pdf.acsm?id=YVlEBAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=YVlEBAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "How does one cope with the death of a player character? Is it ever morally acceptable to cast necromancy and summoning spells? Is Raistlin Majere the same person over time? Do demons and devils have free will?"
      }
    },
    {
      "kind": "books#volume",
      "id": "z8eyygEACAAJ",
      "etag": "DvggrxDMUXA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/z8eyygEACAAJ",
      "volumeInfo": {
        "title": "Guide to Minecraft Dungeons",
        "authors": [
          "Mojang AB",
          "Stephanie Milton"
        ],
        "publishedDate": "2020-06-11",
        "description": "\"Guide to Minecraft Dungeons\" is created especially for heroes who intend to vanquish the Arch-Illager and his evil illager minions. It contains: strategy tips for all the malicious mobs you'll need to defeat; hints about where to look for helpful items and treasure; an in-depth look at each unique dungeon environment and what you'll find there; combo ideas for weapons, armour and artefacts to suit different play styles; insider info from the team who created Dungeons.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1405298340"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781405298346"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 80,
        "printType": "BOOK",
        "categories": [
          "Minecraft (Game)"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=z8eyygEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=z8eyygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=z8eyygEACAAJ&dq=Dungeons&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=z8eyygEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Guide_to_Minecraft_Dungeons.html?hl=&id=z8eyygEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=z8eyygEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "THE OFFICIAL GUIDE TO MINECRAFT DUNGEONS - THE ALL-NEW DUNGEON CRAWLER GAME FROM MOJANG. This companion guide to the game has been created especially for heroes who intend to vanquish the Arch-Illager and his evil illager minions."
      }
    },
    {
      "kind": "books#volume",
      "id": "ZQMyEAAAQBAJ",
      "etag": "RY0MmaSFVjg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ZQMyEAAAQBAJ",
      "volumeInfo": {
        "title": "Stranger Things and Dungeons & Dragons (Graphic Novel)",
        "authors": [
          "Jody Houser",
          "Jim Zub"
        ],
        "publisher": "Dark Horse Comics",
        "publishedDate": "2021-07-06",
        "description": "Follow the crew from Hawkins, Indiana, as they discover the legendary monsters and epic adventures of the Dungeons & Dragons tabletop role-playing game together. Long before the dreaded Demogorgon took one of them to the Upside Down, watch Mike, Lucas, and Will bond with Dustin for the first time over the game that would define their childhood. See the party come together as a team through communal stories and perilous quests to learn important lessons about friendship and find the courage to stand up to the bullies that challenge their everyday. Written by comics and RPG all-stars Jim Zub (Rick and Morty vs. D&D, Conan: Serpent War, Dungeons & Dragons: Infernal Tides) and Jody Houser (Critical Role: Vox Machina, Stranger Things, Star Wars), with vorpal-sharp line art from rising talent Diego Galindo (Power Rangers, Kino) and eye-popping colors from MsassyK (Isola) that strike as true as a Magic Missile. Dive into this love letter to a game that has defined role-playing through the lens of your current favorite icons of eighties nostalgia.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781506721071"
          },
          {
            "type": "ISBN_10",
            "identifier": "1506721079"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 98,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "averageRating": 2,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ZQMyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ZQMyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=ZQMyEAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=ZQMyEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Stranger_Things_and_Dungeons_Dragons_Gra.html?hl=&id=ZQMyEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Stranger_Things_and_Dungeons_Dragons_Gra-sample-pdf.acsm?id=ZQMyEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ZQMyEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Written by comics and RPG all-stars Jim Zub (Rick and Morty vs."
      }
    },
    {
      "kind": "books#volume",
      "id": "9JqTEAAAQBAJ",
      "etag": "jDtKeUdyR7c",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/9JqTEAAAQBAJ",
      "volumeInfo": {
        "title": "Guide to Minecraft Dungeons",
        "subtitle": "A Handbook for Heroes",
        "authors": [
          "Mojang AB",
          "The Official Minecraft Team"
        ],
        "publisher": "Random House Worlds",
        "publishedDate": "2020-05-26",
        "description": "With insider info and tips from the experts at Mojang, this is the definitive guide to Minecraft Dungeons. It is a dark and dangerous time. Corrupted by the Orb of Dominance, the evil Arch-Illager has gathered a loyal following of Illagers. Together they have ravaged the land, enslaving the peaceful Villagers and forcing them to do their bidding. The Villagers are in desperate need of a hero, and you are their only hope. Within the pages of this valuable book, you will find strategies for fighting malicious mobs, observations about the perils of each dungeon and advice about how to get your hands on rare and powerful items. You will also learn how to work as part of a team to vanquish the Arch-Illager once and for all. The fate of us all lies in your hands, brave hero. The Arch-Illager’s reign of terror ends now.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781984818713"
          },
          {
            "type": "ISBN_10",
            "identifier": "1984818716"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Juvenile Nonfiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=9JqTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=9JqTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=9JqTEAAAQBAJ&dq=Dungeons&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=9JqTEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Guide_to_Minecraft_Dungeons.html?hl=&id=9JqTEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=9JqTEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With insider info and tips from the experts at Mojang, this is the definitive guide to Minecraft Dungeons. It is a dark and dangerous time. Corrupted by the Orb of Dominance, the evil Arch-Illager has gathered a loyal following of Illagers."
      }
    },
    {
      "kind": "books#volume",
      "id": "oEC6DwAAQBAJ",
      "etag": "EErWXcf4CvU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/oEC6DwAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Tombs (Dungeons & Dragons)",
        "subtitle": "A Young Adventurer's Guide",
        "authors": [
          "Jim Zub",
          "Stacy King",
          "Andrew Wheeler",
          "Official Dungeons & Dragons Licensed"
        ],
        "publisher": "Ten Speed Press",
        "publishedDate": "2019-11-26",
        "description": "This introductory guide to the worlds of the leading fantasy role-playing game provides an immersive illustrated primer to the prisons, castles, traps, and labyrinths where players find adventure in D&D. In this illustrated guide for new players, you'll be transported to the mystical and magical worlds of Dungeons & Dragons and given a one-of-a-kind course on the dungeons and deathtraps for which the game (and all its iterations) is known. Featuring maps, cutaway illustrations, and fun insights that show would-be adventurers how to travel and survive in these fantastical settings, along with original illustrations and archival images, the book shines a spotlight down the dark, foreboding corners of the most infamous locations in the worlds of D&D. The perfect jumping-on point for young fans of fantasy looking to give D&D a try, the book also features prompts to encourage creative problem-solving skills in the dangerous situations you may find yourself in when on D&D adventures.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781984856449"
          },
          {
            "type": "ISBN_10",
            "identifier": "1984856448"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 114,
        "printType": "BOOK",
        "categories": [
          "Juvenile Nonfiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=oEC6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=oEC6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=oEC6DwAAQBAJ&dq=Dungeons&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=oEC6DwAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Tombs_Dungeons_Dragons.html?hl=&id=oEC6DwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=oEC6DwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This introductory guide to the worlds of the leading fantasy role-playing game provides an immersive illustrated primer to the prisons, castles, traps, and labyrinths where players find adventure in D&amp;D. In this illustrated guide for new ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "NrVCEAAAQBAJ",
      "etag": "VYuUY9lAJi4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/NrVCEAAAQBAJ",
      "volumeInfo": {
        "title": "Game Wizards",
        "subtitle": "The Epic Battle for Dungeons & Dragons",
        "authors": [
          "Jon Peterson"
        ],
        "publisher": "MIT Press",
        "publishedDate": "2021-10-12",
        "description": "The story of the arcane table-top game that became a pop culture phenomenon and the long-running legal battle waged by its cocreators. When Dungeons & Dragons was first released to a small hobby community, it hardly seemed destined for mainstream success--and yet this arcane tabletop role-playing game became an unlikely pop culture phenomenon. In Game Wizards, Jon Peterson chronicles the rise of Dungeons & Dragons from hobbyist pastime to mass market sensation, from the initial collaboration to the later feud of its creators, Gary Gygax and Dave Arneson. As the game's fiftieth anniversary approaches, Peterson--a noted authority on role-playing games--explains how D&D and its creators navigated their successes, setbacks, and controversies. Peterson describes Gygax and Arneson's first meeting and their work toward the 1974 release of the game; the founding of TSR and its growth as a company; and Arneson's acrimonious departure and subsequent challenges to TSR. He recounts the \"Satanic Panic\" accusations that D&D was sacrilegious and dangerous, and how they made the game famous. And he chronicles TSR's reckless expansion and near-fatal corporate infighting, which culminated with the company in debt and overextended and the end of Gygax's losing battle to retain control over TSR and D&D. With Game Wizards, Peterson restores historical particulars long obscured by competing narratives spun by the one-time partners. That record amply demonstrates how the turbulent experience of creating something as momentous as Dungeons & Dragons can make people remember things a bit differently from the way they actually happened.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780262542951"
          },
          {
            "type": "ISBN_10",
            "identifier": "0262542951"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 401,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "averageRating": 4,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=NrVCEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=NrVCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=NrVCEAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=7&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=NrVCEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Game_Wizards.html?hl=&id=NrVCEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Game_Wizards-sample-pdf.acsm?id=NrVCEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=NrVCEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The story of the arcane table-top game that became a pop culture phenomenon and the long-running legal battle waged by its cocreators."
      }
    },
    {
      "kind": "books#volume",
      "id": "D33ZAAAAMAAJ",
      "etag": "o+qwW8w66io",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/D33ZAAAAMAAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons Dungeon Master's Guide",
        "subtitle": "Core Rulebook II V.3.5",
        "authors": [
          "Monte Cook",
          "Jonathan Tweet",
          "Skip Williams"
        ],
        "publishedDate": "2003",
        "description": "Weave exciting tales of heroism filled with magic and monsters. Within these pages, you’ll discover the tools and options you need to create detailed worlds and dynamic adventures for your players to experience in the Dungeons & Dragons roleplaying game. The revised Dungeon Master's Guide is an essential rulebook for Dungeon Masters of the D&D game. The Dungeon Master's Guide has been reorganized to be more user friendly. It features information on running a D&D game, adjudicating play, writing adventures, nonplayer characters (including nonplayer character classes), running a campaign, characters, magic items (including intelligent and cursed items, and artifacts), and a dictionary of special abilities and conditions. Changes have been made to the item creation rules and pricing, and prestige classes new to the Dungeon Master's Guide are included (over 10 prestige classes). The revision includes expanded advice on how to run a campaign and instructs players on how to take full advantage of the tie-in D&D miniatures line.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PSU:000054550452"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 330,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.6.3.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=D33ZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=D33ZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=D33ZAAAAMAAJ&q=Dungeons&dq=Dungeons&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=D33ZAAAAMAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Dragons_Dungeon_Master_s_Guide.html?hl=&id=D33ZAAAAMAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=D33ZAAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Within these pages , you &#39; ll discover the tools and options you need to create detailed worlds and dynamic adventures for your players to experience in the \u003cb\u003eDungeons\u003c/b\u003e &amp; DRAGONS® roleplaying game . System Visit our website at www&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "7M2QEAAAQBAJ",
      "etag": "QlMV0vOT3wE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/7M2QEAAAQBAJ",
      "volumeInfo": {
        "title": "Rick and Morty vs. Dungeons & Dragons",
        "authors": [
          "Patrick Rothfuss",
          "Jim Zub"
        ],
        "publisher": "National Geographic Books",
        "publishedDate": "2019-03-12",
        "description": "You've got to--belch!--roll for initiative, Morty! Two pop-culture juggernauts are teaming up and neither multiverse is prepared for what comes next! When Morty sees a cute girl at school playing Dungeons & Dragons, he asks Rick to show him the ropes, only to discover that his grandfather is a veteran gamer. Next thing he knows, the entire family has been pulled into a campaign that escalates from virtual D&D simulations to alternate universes governed by the rules of the game. And as it turns out, Rick isn't the only one who knows his way around a d20. #1 New York Times-bestselling fantasy author Patrick Rothfuss (The Name of the Wind), acclaimed comics writer Jim Zub (Dungeons & Dragons: Evil at Baldur's Gate, Skullkickers), and Eisner-nominated artist Troy Little (Hunter S. Thompson's Fear and Loathing in Las Vegas) bring you the comics crossover of the year! It's an irreverent, unexpected adventure sure to please fans of both franchises. Collects the complete four issue miniseries.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781684054169"
          },
          {
            "type": "ISBN_10",
            "identifier": "1684054168"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "averageRating": 3.5,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=7M2QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=7M2QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=7M2QEAAAQBAJ&dq=Dungeons&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=7M2QEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Rick_and_Morty_vs_Dungeons_Dragons.html?hl=&id=7M2QEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=7M2QEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "And as it turns out, Rick isn&#39;t the only one who knows his way around a d20. #1 New York Times-bestselling fantasy author Patrick Rothfuss (The Name of the Wind), acclaimed comics writer Jim Zub (Dungeons &amp; Dragons: Evil at Baldur&#39;s Gate, ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "mQjgwQEACAAJ",
      "etag": "/lzkSFwKtBY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/mQjgwQEACAAJ",
      "volumeInfo": {
        "title": "Dungeons and Drawings",
        "authors": [
          "Blanca Marta-Nez de Rituerto",
          "Joe Sparrow"
        ],
        "publishedDate": "2019-11-12",
        "description": "Who hasn't been fascinated by monsters? This book collects some of the best creatures from Dungeons & Dragons, setting them out in an informative illustrated bestiary for beginners and enthusiasts alike. Whether they're beasts, spirits, demons, or even aliens, most fantasy worlds are filled with monsters. Some are harmless--many more are deadly. Luckily for the discerning adventurer, this book is here to help distinguish between the two. As a popular series sold at conventions and on Etsy, animators Blanca Martinez de Riuerro and Joe Sparrow have compiled three volumes into one deluxe edition. Each creature comes with a full-color illustration, a set of simplified statistics, a description, and a history section indicating its folkloric history and the scientific phenomena that may have influenced its creation. With creatures like the Archdevil, Dryad, Fire Bat, Gold Dragon, Smoke Devil, Bomb Plant, Ettin, and Spirit Fox, any tabletop player will find the perfect creature for their next campaign.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1524852015"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781524852016"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 280,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=mQjgwQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=mQjgwQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=mQjgwQEACAAJ&dq=Dungeons&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=mQjgwQEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_and_Drawings.html?hl=&id=mQjgwQEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=mQjgwQEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This text collects some of the best creatures from Dungeons &amp; Dragons, setting them out in an informative illustrated bestiary for beginners and enthusiasts alike."
      }
    },
    {
      "kind": "books#volume",
      "id": "TM-QEAAAQBAJ",
      "etag": "s0HnJP96St4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/TM-QEAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons: At the Spine of the World",
        "authors": [
          "A.J. Mendez",
          "Aimee Garcia"
        ],
        "publisher": "National Geographic Books",
        "publishedDate": "2021-08-17",
        "description": "A new Dungeons & Dragons adventure awaits! Return to Icewind Dale with a new party of adventurers! Can these five unlikely heroes stop the plot of an ancient, primordial evil? A never-ending winter night is driving an isolated northern town to the brink of madness. To save them, Runa, Saarvin, Patience, Amos, and Belvyre must traverse the blighted tundra to find a cure. On the journey, they'll encounter frozen obstacles, unimaginable monsters, and, perhaps most dangerous, dissension in their ranks and the fraying of the bonds of friendship that must sustain them through the dark. Based on the original, massively popular tabletop role-playing game and featuring a brand-new cast of characters, Dungeons and Dragons: At the Spine of the World is written by New York Times bestselling author AJ Mendez and writer/actor Aimee Garcia! Martin Coccolo (Green Lantern, Star Trek: Year Five) provides stunning art that will have readers feeling the crunch of snow under their boots. Whether you're a veteran dice-slinger or a new visitor to the Forgotten Realms, At the Spine of the World is a perfect gateway to new adventure.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781684057917"
          },
          {
            "type": "ISBN_10",
            "identifier": "1684057914"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=TM-QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=TM-QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=TM-QEAAAQBAJ&dq=Dungeons&hl=&cd=11&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=TM-QEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Dragons_At_the_Spine_of_the_Wor.html?hl=&id=TM-QEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=TM-QEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Based on the original, massively popular tabletop role-playing game and featuring a brand-new cast of characters, Dungeons and Dragons: At the Spine of the World is written by New York Times bestselling author AJ Mendez and writer/actor ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "QQwrtAEACAAJ",
      "etag": "27cpH6coUHg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/QQwrtAEACAAJ",
      "volumeInfo": {
        "title": "Dungeons and Desktops",
        "authors": [
          "Matt Barton",
          "Shane Stacks"
        ],
        "publisher": "A K PETERS",
        "publishedDate": "2019-05",
        "description": "Computer role-playing games (CRPGs) are a special genre of computer games that bring the tabletop role-playing experience of games such as Dungeons & Dragons to the computer screen. Thisnew edition inlcudes two new chapters: The Modern Age, and a chapter on Indies and Mobile CRPGs. The new modern age chapter will cover, among other topics, Kickstarter/FIG crowdfunded projects such as Torment: Tides of Numenera and Pillars of Eternity. It'll also bring the book up to date with major games such as Dragon Age, Witcher, Skyrim. Expanded info in first chapter about educational potential of CRPGs. Color figures will be introduced for the first time. Key Features gives reviews of hundreds of games across many platforms. comprehensive book covering the history of computer RPGs. comprehensive index at the back, letting you quickly look up your favourite titles s",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1138574643"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781138574649"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 618,
        "printType": "BOOK",
        "categories": [
          "Computer games"
        ],
        "averageRating": 4,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=QQwrtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=QQwrtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=QQwrtAEACAAJ&dq=Dungeons&hl=&cd=12&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=QQwrtAEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_and_Desktops.html?hl=&id=QQwrtAEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=QQwrtAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "An introduction to computer role-playing games -- Origins -- The dark age -- The bronze age -- The silver age -- The birth of the golden age -- SSI&#39;s golden age -- Origin&#39;s golden age -- The golden age of Sir-Tech, New World Computing, and ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "-5qxDwAAQBAJ",
      "etag": "wYIarlYM6qs",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-5qxDwAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Detectives",
        "authors": [
          "Franklin W. Dixon"
        ],
        "publisher": "Aladdin",
        "publishedDate": "2019-10-22",
        "description": "Brother detectives Frank and Joe search a hidden castle for clues to help them find a missing comic book in the nineteenth book in the thrilling Hardy Boys Adventures series. Frank and Joe have been hanging out at Sir Robert’s Comic Kingdom, the local comic and gaming shop, and got the exclusive invite to this year’s Halloween costume ball at Bayport’s one and only castle. Sir Robert plans to use the big event to unveil his most prized possession, a super rare comic that is rumored to contain a map to buried treasure. Sir Robert agrees to show his store regulars—who now include Frank and Joe—a sneak preview of the comic before the party. But when he goes to unlock the fireproof casing, he finds the book is gone. It will take all of Frank and Joe’s recently acquired LARPing skills to solve this case. Anything can happen in a castle full of dungeons and deception. Can the Hardy boys keep up?",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781534421059"
          },
          {
            "type": "ISBN_10",
            "identifier": "153442105X"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 208,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-5qxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-5qxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=-5qxDwAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=13&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=-5qxDwAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Detectives.html?hl=&id=-5qxDwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=-5qxDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Sir Robert agrees to show his store regulars—who now include Frank and Joe—a sneak preview of the comic before the party. But when he goes to unlock the fireproof casing, he finds the book is gone."
      }
    },
    {
      "kind": "books#volume",
      "id": "m57ECwAAQBAJ",
      "etag": "eyaq0cWKXhY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/m57ECwAAQBAJ",
      "volumeInfo": {
        "title": "Through Dungeons Deep",
        "subtitle": "A Fantasy Gamers' Handbook",
        "authors": [
          "Robert Plamondon"
        ],
        "publisher": "Norton Creek Press",
        "publishedDate": "2008-08-20",
        "description": "Through Dungeons Deep delves into the art of role-playing, showing players and Game Masters how to have more fun and excitement with fantasy role-playing games. First published more than 25 years ago, this book was an instant classic. Long out of print, the original edition sells for several times its cover price. This Norton Creek Press reprint makes the book available (and affordable) again. Robert Plamondon wrote Through Dungeons Deep after realizing that the most important part of role-playing games-role-playing-is barely mentioned in gaming systems. When it is, it is often confused with rules. But role-playing really boils down to make-believe, and the real fun in role-playing games comes from unlocking your imagination. But it's also important to carry a length of rope and wear shoes you can run in.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780972177078"
          },
          {
            "type": "ISBN_10",
            "identifier": "0972177078"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 341,
        "printType": "BOOK",
        "categories": [
          "Games"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=m57ECwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=m57ECwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=m57ECwAAQBAJ&pg=PA58&dq=Dungeons&hl=&cd=14&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=m57ECwAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Through_Dungeons_Deep.html?hl=&id=m57ECwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Through_Dungeons_Deep-sample-pdf.acsm?id=m57ECwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=m57ECwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Evil creatures and the bulk of the castle&#39;s treasure hoard remain unmolested in the \u003cb\u003edungeon&#39;s\u003c/b\u003e gloomy depths. Some \u003cb\u003edungeons\u003c/b\u003e are incredibly large—especially the ones designed in the first years of fantasy role-playing games."
      }
    },
    {
      "kind": "books#volume",
      "id": "GCbbzQEACAAJ",
      "etag": "+6RZrupvTdU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/GCbbzQEACAAJ",
      "volumeInfo": {
        "title": "Minecraft Dungeons Sticker Book",
        "authors": [
          "Egmont Publishing UK"
        ],
        "publishedDate": "2021-03-04",
        "description": "Are you the hero that will end the reign of the evil Arch-Illager? Journey through the world of Minecraft Dungeons in this exciting sticker and activity book, where you'll spot dangerous mobs, protect innocent villagers and unleash a horde of heroes to fight back the sprawl of evil.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1405299703"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781405299701"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=GCbbzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=GCbbzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=GCbbzQEACAAJ&dq=Dungeons&hl=&cd=15&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=GCbbzQEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Minecraft_Dungeons_Sticker_Book.html?hl=&id=GCbbzQEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=GCbbzQEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Packed with stickers and activities like mazes, sudokus and spot-the-difference, this book has hours of fun that only a worthy hero will be able to complete."
      }
    },
    {
      "kind": "books#volume",
      "id": "gj9wDwAAQBAJ",
      "etag": "rY+zwY3kjwo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/gj9wDwAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons Art & Arcana",
        "subtitle": "A Visual History",
        "authors": [
          "Michael Witwer",
          "Kyle Newman",
          "Jon Peterson",
          "Sam Witwer",
          "Official Dungeons & Dragons Licensed"
        ],
        "publisher": "Ten Speed Press",
        "publishedDate": "2018-10-23",
        "description": "An illustrated guide to the history and evolution of the beloved role-playing game told through the paintings, sketches, illustrations, and visual ephemera behind its creation, growth, and continued popularity. FINALIST FOR THE HUGO AWARD • FINALIST FOR THE LOCUS AWARD • NOMINATED FOR THE DIANA JONES AWARD From one of the most iconic game brands in the world, this official DUNGEONS & DRAGONS illustrated history provides an unprecedented look at the visual evolution of the brand, showing its continued influence on the worlds of pop culture and fantasy. Inside the book, you’ll find more than seven hundred pieces of artwork—from each edition of the core role-playing books, supplements, and adventures; as well as Forgotten Realms and Dragonlance novels; decades of Dragon and Dungeon magazines; and classic advertisements and merchandise; plus never-before-seen sketches, large-format canvases, rare photographs, one-of-a-kind drafts, and more from the now-famous designers and artists associated with DUNGEONS & DRAGONS. The superstar author team gained unparalleled access to the archives of Wizards of the Coast and the personal collections of top collectors, as well as the designers and illustrators who created the distinctive characters, concepts, and visuals that have defined fantasy art and gameplay for generations. This is the most comprehensive collection of D&D imagery ever assembled, making this the ultimate collectible for the game's millions of fans around the world.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780399580949"
          },
          {
            "type": "ISBN_10",
            "identifier": "0399580948"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 450,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "averageRating": 4.5,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=gj9wDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=gj9wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=gj9wDwAAQBAJ&dq=Dungeons&hl=&cd=16&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=gj9wDwAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Dragons_Art_Arcana.html?hl=&id=gj9wDwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=gj9wDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This is the most comprehensive collection of D&amp;D imagery ever assembled, making this the ultimate collectible for the game&#39;s millions of fans around the world."
      }
    },
    {
      "kind": "books#volume",
      "id": "BfNEDwAAQBAJ",
      "etag": "MTco4Lj+YcY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/BfNEDwAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons Art & Arcana",
        "subtitle": "A Visual History",
        "authors": [
          "Michael Witwer",
          "Kyle Newman",
          "Jon Peterson",
          "Sam Witwer",
          "Official Dungeons & Dragons Licensed"
        ],
        "publisher": "Ten Speed Press",
        "publishedDate": "2018-10-23",
        "description": "An illustrated guide to the history and evolution of the beloved role-playing game told through the paintings, sketches, illustrations, and visual ephemera behind its creation, growth, and continued popularity. FINALIST FOR THE HUGO AWARD • FINALIST FOR THE LOCUS AWARD • NOMINATED FOR THE DIANA JONES AWARD From one of the most iconic game brands in the world, this official DUNGEONS & DRAGONS illustrated history provides an unprecedented look at the visual evolution of the brand, showing its continued influence on the worlds of pop culture and fantasy. Inside the book, you’ll find more than seven hundred pieces of artwork—from each edition of the core role-playing books, supplements, and adventures; as well as Forgotten Realms and Dragonlance novels; decades of Dragon and Dungeon magazines; and classic advertisements and merchandise; plus never-before-seen sketches, large-format canvases, rare photographs, one-of-a-kind drafts, and more from the now-famous designers and artists associated with DUNGEONS & DRAGONS. The superstar author team gained unparalleled access to the archives of Wizards of the Coast and the personal collections of top collectors, as well as the designers and illustrators who created the distinctive characters, concepts, and visuals that have defined fantasy art and gameplay for generations. This is the most comprehensive collection of D&D imagery ever assembled, making this the ultimate collectible for the game's millions of fans around the world.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780399580956"
          },
          {
            "type": "ISBN_10",
            "identifier": "0399580956"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 448,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "averageRating": 4.5,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.4.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=BfNEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=BfNEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=BfNEDwAAQBAJ&pg=PA435&dq=Dungeons&hl=&cd=17&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=BfNEDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=BfNEDwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 112.55,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 112.55,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=BfNEDwAAQBAJ&rdid=book-BfNEDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 112550000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 112550000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_Dragons_Art_Arcana-sample-epub.acsm?id=BfNEDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=BfNEDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "A Visual History Michael Witwer, Kyle Newman, Jon Peterson, Sam Witwer, Official \u003cb\u003eDungeons\u003c/b\u003e &amp; Dragons Licensed. The complete Thief&#39;s Handbook, 221 computer games, 212-13,231,280–81, 320, 344-46, 348, 418–19 Computer Labyrinth Game,&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "qPPRBQAAQBAJ",
      "etag": "+eZ1LIDm0Tk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/qPPRBQAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons and Desktops",
        "subtitle": "The History of Computer Role-Playing Games",
        "authors": [
          "Matt Barton"
        ],
        "publisher": "CRC Press",
        "publishedDate": "2008-02-22",
        "description": "Computer role-playing games (CRPGs) are a special genre of computer games that bring the tabletop role-playing experience of games such as Dungeons & Dragons to the computer screen. This genre includes classics such as Ultima and The Bard's Tale as well as more modern games such as World of Warcraft and Guild Wars. Written in an engaging style for",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781439865248"
          },
          {
            "type": "ISBN_10",
            "identifier": "1439865248"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 452,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=qPPRBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=qPPRBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=qPPRBQAAQBAJ&pg=PA80&dq=Dungeons&hl=&cd=18&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=qPPRBQAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_and_Desktops.html?hl=&id=qPPRBQAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_and_Desktops-sample-pdf.acsm?id=qPPRBQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=qPPRBQAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The next two games we&#39;ll discuss, \u003cb\u003eDungeons\u003c/b\u003e of Daggorath and Tunnels of Doom, are examples of games that were released only on a single, relatively minor platform (the Tandy CoCo and Texas Instruments&#39; TI-99/4A, respectively)."
      }
    },
    {
      "kind": "books#volume",
      "id": "nTVpDwAAQBAJ",
      "etag": "A2RFa9flX3U",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/nTVpDwAAQBAJ",
      "volumeInfo": {
        "title": "Through Dungeons Deeper: A Survival Guide For Dungeoneers As Written By A Survivor",
        "authors": [
          "Jason Paul McCartan"
        ],
        "publisher": "Lulu.com",
        "publishedDate": "2017-11-29",
        "description": "Have you ever wanted a primer on dungeon delving and dungeoneering? Ever wanted to know the stuff that real experts know about how to survive and thrive while looting dungeons of everything they have that's valuable and isn't nailed down? HIS BOOK IS FOR YOU! Written by master dungeoneer halfling Maximillian Sparfoot, veteran of a thousand dungeon delves (according to his own bio). Follow along with Max as he: Explains the 10 Dungeon Axioms! Introduces you to his 78 Rules of Dungeoneering, including preparation, your role in the party, how to fight wisely, and how to make a last will and testament, among other Very Important Rules If You Don't Want To Die! Tactics! Strategy! Other stuff! Gives you important information about magic items, curses, owlbears, traps, mimics and gelatinous cubes! Tells you the important things you need to know about the races and professions that you'll be dungeoneering with! Includes a sample simple will from Stonehand & Associates, lawyers to dungeoneers!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781945826085"
          },
          {
            "type": "ISBN_10",
            "identifier": "1945826088"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 151,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nTVpDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nTVpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=nTVpDwAAQBAJ&pg=PA2&dq=Dungeons&hl=&cd=19&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=nTVpDwAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Through_Dungeons_Deeper_A_Survival_Guide.html?hl=&id=nTVpDwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Through_Dungeons_Deeper_A_Survival_Guide-sample-pdf.acsm?id=nTVpDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=nTVpDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "There are some axioms, ortruths accepted without controversy or question, about \u003cb\u003edungeons\u003c/b\u003e that typically hold across each and every one you&#39;ll find yourself exploring. Most of these axioms are agreed up within the dungeoneering community&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "kd15EAAAQBAJ",
      "etag": "Rq+XVE5XHI4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/kd15EAAAQBAJ",
      "volumeInfo": {
        "title": "D-Genesis: Three Years after the Dungeons Appeared Volume 2",
        "authors": [
          "KONO Tsuranori"
        ],
        "publisher": "J-Novel Club",
        "publishedDate": "2022-10-20",
        "description": "After D-Powers shocked the world by auctioning off skill orbs—the most precious and ephemeral of items—the JDA tasked Keigo and Miyoshi with finding the Otherworldly Language Comprehension orb. This rare item could spark wars between nations in the wrong hands, but it could also make D-Powers obscenely wealthy. To find it, Keigo and Miyoshi must delve deeper into Yoyogi Dungeon than ever before, facing new dangers, testing out their many skills, and learning what it truly means to be an explorer along the way! Back on the surface, government agencies across the world are also starting to move—some hoping to aid D-Powers, while others seek to thwart them. This time, Keigo will have to face enemies far more dangerous than slimes, goblins, or even undead monsters...all in a day’s work for the world’s laziest top-ranked explorer!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781718351424"
          },
          {
            "type": "ISBN_10",
            "identifier": "1718351429"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 330,
        "printType": "BOOK",
        "categories": [
          "Young Adult Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.3.3.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=kd15EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=kd15EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=kd15EAAAQBAJ&pg=PT18&dq=Dungeons&hl=&cd=20&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=kd15EAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=kd15EAAAQBAJ",
        "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "2",
          "volumeSeries": [
            {
              "seriesId": "QzkuGwAAABBsIM",
              "seriesBookType": "COLLECTED_EDITION",
              "orderNumber": 2
            }
          ]
        }
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 41.59,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 41.59,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=kd15EAAAQBAJ&rdid=book-kd15EAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 41590000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 41590000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/D_Genesis_Three_Years_after_the_Dungeons-sample-epub.acsm?id=kd15EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/D_Genesis_Three_Years_after_the_Dungeons-sample-pdf.acsm?id=kd15EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=kd15EAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "“But imagine the \u003cb\u003eDungeon\u003c/b\u003e Passage Theory is correct, and the deepest \u003cb\u003edungeons\u003c/b\u003e serve as links to another world. There could be a difference in atmospheric pressure and the balance of gasses making up the atmosphere, right?"
      }
    },
    {
      "kind": "books#volume",
      "id": "4bo59BEaoDQC",
      "etag": "nnk2rBetm58",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/4bo59BEaoDQC",
      "volumeInfo": {
        "title": "Dungeons and Dragons and Philosophy",
        "subtitle": "Raiding the Temple of Wisdom",
        "authors": [
          "Jon Cogburn",
          "Mark Silcox"
        ],
        "publisher": "Open Court",
        "publishedDate": "2012-09-11",
        "description": "This volume will convince readers that the swift ascent of the tabletop role-playing game Dungeons and Dragons to worldwide popularity in the 1970s and 1980s is “the most exciting event in popular culture since the invention of the motion picture.” Dungeons and Dragons and Philosophy presents twenty-one chapters by different writers, all D&D aficionados but with starkly different insights and points of view. It will be appreciated by thoughtful fans of the game, including both those in their thirties, forties, and fifties who have rediscovered the pastime they loved as teenagers and the new teenage and college-student D&D players who have grown up with gaming via computer and console games and are now turning to D&D as a richer, fuller gaming experience. The book is divided into three parts. The first, “Heroic Tier: The Ethical Dungeon-Crawler,” explores what D&D has to teach us about ethics and about how results from the philosophical study of morality can enrich and transform the game itself. Authors argue that it’s okay to play evil characters, criticize the traditional and new systems of moral alignment, and (from the perspective of those who love the game) tackle head-on the recurring worries about whether the game has problems with gender and racial stereotypes. Readers of Dungeons and Dragons and Philosophy will become better players, better thinkers, better dungeon-masters, and better people. Part II, “Paragon Tier: Planes of Existence,” arouses a new sense of wonder about both the real world and the collaborative world game players create. Authors look at such metaphysical questions as what separates magic from science, how we express the inexpressible through collaborative storytelling, and what the objects that populate Dungeons and Dragons worlds can teach us about the equally fantastic objects that surround us in the real world. The third part, “Epic Tier: Leveling Up,” is at the crossroads of philosophy and the exciting new field of Game Studies. The writers investigate what makes a game a game, whether D&D players are artists producing works of art, whether D&D (as one of its inventors claimed) could operate entirely without rules, how we can overcome the philosophical divide between game and story, and what types of minds take part in D&D.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780812698039"
          },
          {
            "type": "ISBN_10",
            "identifier": "0812698037"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 288,
        "printType": "BOOK",
        "categories": [
          "Philosophy"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.6.3.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=4bo59BEaoDQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=4bo59BEaoDQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=4bo59BEaoDQC&pg=PA185&dq=Dungeons&hl=&cd=21&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=4bo59BEaoDQC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=4bo59BEaoDQC"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 151.9,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 151.9,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=4bo59BEaoDQC&rdid=book-4bo59BEaoDQC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 151900000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 151900000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_and_Dragons_and_Philosophy-sample-epub.acsm?id=4bo59BEaoDQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_and_Dragons_and_Philosophy-sample-pdf.acsm?id=4bo59BEaoDQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=4bo59BEaoDQC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003cb\u003eDungeons\u003c/b\u003e and Dragons, on the other hand, involves a much smaller group of players interacting in much closer quarters, with their real-life identities obvious to the other players, and with a \u003cb\u003eDungeon\u003c/b\u003e Master rather than a computer&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "LbtvEAAAQBAJ",
      "etag": "PpWsWBgq9oY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/LbtvEAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons 'n' Durags",
        "subtitle": "One Black Nerd’s Comical Quest of Racial Identity and Crisis of Faith",
        "authors": [
          "Ron Dawson"
        ],
        "publisher": "Mango Media Inc.",
        "publishedDate": "2022-05-17",
        "description": "Funny Stories About White Privilege and Black Identity from a Black Nerd’s Perspective Author and Ebony Magazine podcaster Ron Dawson lends his wit and comical social commentary to tell the story of how one of the “whitest” and nerdiest of black men finally woke up, found his blackness, and lost all inhibitions at dropping the f-bomb. A coming-of-age story of black identity. In the suburbs of Atlanta, Ron was a black nerd (aka “blerd”) living very comfortably in his white world. He loved his white wife, worked well with his white workmates, and worshiped at a white church. On November 8, 2016, everything changed when Trump became POTUS. Ron began a journey of self-discovery that made him question everything—from faith to friendships. Part social commentary and part fantastical narrative. This book goes where no blerd has gone before. In a psychedelic way, Ron is guided by a guardian “angel” in the guise of Samuel L. Jackson’s character from Pulp Fiction. Sam is there to help Ron, well, be more black. Ron confronts his black “sins” and wrestles with black identity, systemic racism, and what it means to be “black” in America. Throughout this book, you’ll learn lessons from a man who deconstructs his faith and confronts personal demons of racial identity. Gain new perspectives through these funny stories that will reshape your current views on black identity. Inside, you’ll find: • The funniest social commentary on white privilege and black identity • Political satire wrapped in funny stories of a man’s journey to confront the systemic racism and Christian hypocrisy around him • Comical if not uncomfortable conversations about what it means to be black in America If you liked Sure, I’ll Be Your Black Friend; You Can’t Touch My Hair; or Uncomfortable Conversations with a Black Man, you’ll love Dungeons ‘n’ Durags.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781642508765"
          },
          {
            "type": "ISBN_10",
            "identifier": "1642508764"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Humor"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=LbtvEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=LbtvEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=LbtvEAAAQBAJ&pg=PT73&dq=Dungeons&hl=&cd=22&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=LbtvEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=LbtvEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 52.06,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 52.06,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=LbtvEAAAQBAJ&rdid=book-LbtvEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 52060000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 52060000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=LbtvEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "I&#39;d then go home and spend more hours creating my \u003cb\u003edungeon\u003c/b\u003e campaigns for my brother and me to play. (Yes, I had to play both \u003cb\u003eDungeon\u003c/b\u003e Master and player character. It&#39;s odd, I know. Kinda like managing an election for a state gubernatorial&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "fD91DwAAQBAJ",
      "etag": "jGtcPR6bm4Q",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/fD91DwAAQBAJ",
      "volumeInfo": {
        "title": "Warriors & Weapons (Dungeons & Dragons)",
        "subtitle": "A Young Adventurer's Guide",
        "authors": [
          "Jim Zub",
          "Stacy King",
          "Andrew Wheeler",
          "Official Dungeons & Dragons Licensed"
        ],
        "publisher": "Ten Speed Press",
        "publishedDate": "2019-07-16",
        "description": "This introductory guide to DUNGEONS & DRAGONS is an illustrated primer to many of the characters you can play in D&D, along with their essential weapons and adventuring tools. In this illustrated guide, you're transported to the legendary and magical worlds of Dungeons & Dragons, where you are presented with one-of-a-kind entries for different types of warriors, as well as the weaponry these fighters need for D&D adventuring. This guide includes detailed illustrations of the weapons, armor, clothing, and other equipment that fighters use, and offers the tools young, aspiring adventurers need for learning how to build their own characters, including sample profiles, a flowchart to help you decide what type of warrior to be, and brainstorming challenges to start you thinking like an adventurer whether on your own or in the midst of an exciting quest with friends and fellow players.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781984856432"
          },
          {
            "type": "ISBN_10",
            "identifier": "198485643X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 112,
        "printType": "BOOK",
        "categories": [
          "Juvenile Nonfiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.3.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=fD91DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=fD91DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=fD91DwAAQBAJ&pg=PA105&dq=Dungeons&hl=&cd=23&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=fD91DwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fD91DwAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 44.98,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 44.98,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=fD91DwAAQBAJ&rdid=book-fD91DwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 44980000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 44980000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Warriors_Weapons_Dungeons_Dragons-sample-epub.acsm?id=fD91DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=fD91DwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003cb\u003eDUNGEONs\u003c/b\u003e &amp; DRAGONs is a collaborative game where you work with your friends to create your own stories. One person acts as a narrator, called a \u003cb\u003eDungeon\u003c/b\u003e Master, and the other players each take on the role of a hero, called a Player&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "zOFIEAAAQBAJ",
      "etag": "o2j103Rg5wg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/zOFIEAAAQBAJ",
      "volumeInfo": {
        "title": "Random Tables: Dungeons and Lairs",
        "subtitle": "The Game Master's Companion for Creating Secret Entrances, Rumors, Prisons, and More",
        "authors": [
          "Dr. Timm Woods"
        ],
        "publisher": "Simon and Schuster",
        "publishedDate": "2022-09-27",
        "description": "Get ready to add even more dark and dangerous detail to your table fantasy tabletop role-playing game with hundreds of random tables designed to help you create epic storylines full of mysterious dungeons, secret entrances, and more! Take your fantasy world to the next level, all with the roll of a dice! Random Tables: Dungeons and Lairs is a utility book for fans of tabletop role-playing games like Dungeons & Dragons, allowing game masters to generate on-the-fly content for their adventures traveling through dangerous dungeons, choosing room and hall aesthetics, and discovering unique sealing techniques. Adventurers love to ask tough questions that can sometimes put game masters on the spot and put their creative skills to the test. Never fear being stumped when the party asks: What type of rumors are embedded into this dungeon? What’s this room's feature and how can I navigate it? Is this door made from magical properties or is it normal? Generate all of these answers and more by rolling on the dozens of randomized tables provided within these pages. Your party will love your fast-paced and exciting adventures, and even you will be on the edge of your seat to see what happens next!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781646043743"
          },
          {
            "type": "ISBN_10",
            "identifier": "164604374X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 128,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.2.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=zOFIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=zOFIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=zOFIEAAAQBAJ&pg=PA11&dq=Dungeons&hl=&cd=24&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=zOFIEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=zOFIEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 62.6,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 62.6,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=zOFIEAAAQBAJ&rdid=book-zOFIEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 62600000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 62600000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Random_Tables_Dungeons_and_Lairs-sample-epub.acsm?id=zOFIEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=zOFIEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Some tables will ask you to apply a modifier to the roll according to certain details about your \u003cb\u003edungeon\u003c/b\u003e. Those details will need to be established before rolling. Let one roll inform the next in an unfolding story."
      }
    },
    {
      "kind": "books#volume",
      "id": "cznyzQEACAAJ",
      "etag": "3D6xUtv3RDI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/cznyzQEACAAJ",
      "volumeInfo": {
        "title": "Rick and Morty vs. Dungeons & Dragons",
        "authors": [
          "Patrick Rothfuss",
          "Jim Zub"
        ],
        "publisher": "Oni Press",
        "publishedDate": "2021-06-08",
        "description": "It's the COMPLETE ADVENTURE! Grab your dice, pencils, and spell book, as Rick and Morty Vs. Dungeons & Dragons returns in this deluxe edition hardcover! Featuring all eight issues of the hit series, plus a BRAND NEW story from Jim Zub and Troy Little featuring Mr. Meeseeks conquering The Forgotten Realms! Over 250 pages of monsters, mayhem, and a bag of holding worth of bonus materials. When Morty asks Rick for help learning how to play D&D because he has a crush on a girl, and it ends up drawing the entire family into a D&D world, where they inadvertently help \"the bad guys\" win, but make it right in the end. Then, in the hit series PAINSCAPE, magical D&D adventures coming to Earth, and no one will survive the Painscape! The world’s greatest role-playing game returns to plague the world’s most dysfunctional animated family and this time, we can’t just rest on brand name recognition and curiosity to fuel your interest, Morty, because no one gives a d-d-damn about sequels unless they’re really good, so no pressure, you f***ing hacks! #1 New York Times-bestselling fantasy author Patrick Rothfuss (The Name of the Wind), acclaimed comics writer Jim Zub, and Eisner-nominated artist Troy Little bring you the comics crossover of the year now in a deluxe, hardcover collector's edition!",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1620108755"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781620108758"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 296,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "averageRating": 3.5,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=cznyzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=cznyzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=cznyzQEACAAJ&dq=Dungeons&hl=&cd=25&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=cznyzQEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Rick_and_Morty_vs_Dungeons_Dragons.html?hl=&id=cznyzQEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=cznyzQEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Grab your dice, pencils, and spell book, as Rick and Morty Vs. Dungeons &amp; Dragons returns in this deluxe edition hardcover! #1 New York Times-bestselling fantasy author Patrick Rothfuss (The Name of the Wind), acclaimed comics writer Jim ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "azZmCgAAQBAJ",
      "etag": "QxBocRLZ7OM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/azZmCgAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons: Drizzt - Neverwinter Tales",
        "authors": [
          "R.A. Salvatore",
          "Geno Salvatore"
        ],
        "publisher": "IDW Publishing",
        "publishedDate": "2012-04-09",
        "description": "The MOST POPULAR CHARACTER from the MOST POPULAR FANTASY WORLD of all time comes to life in his FIRST ORIGINAL comic book tale! Drizzt leads this massive thriller into R.A. Salvatore's next blockbuster novel! Drizzt and his companion Dahlia hunt for something that seems part vampire and part elite dwarven warrior and must find out how the evil lich Valindra Shadowmantle and her minion Korbin Dor'crae factor into the mystery.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781613774618"
          },
          {
            "type": "ISBN_10",
            "identifier": "1613774613"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "averageRating": 3,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "c6bf6a8ae6c61b5f",
          "imageBubbleVersion": "c6bf6a8ae6c61b5f"
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=azZmCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=azZmCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=azZmCgAAQBAJ&pg=PT125&dq=Dungeons&hl=&cd=26&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=azZmCgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=azZmCgAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 52.18,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 52.18,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=azZmCgAAQBAJ&rdid=book-azZmCgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 52180000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 52180000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=azZmCgAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Introduction Getting Started In \u003cb\u003eDuNGEONS\u003c/b\u003e &amp; DRAGONS: THE LEGEND OF DRIZZT. \u003cb\u003eDungeon\u003c/b\u003e Masters need a copy of the \u003cb\u003eDuNGEONS\u003c/b\u003e &amp; NEVERWINTERTALEs #1, you&#39;ve witnessed the DRAGONS game rules, which you can find in either unfortunate fate of&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "OR3gBQAAQBAJ",
      "etag": "O4Gxr5jL/dw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/OR3gBQAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons Legends of Baldur's Gate #1",
        "authors": [
          "Jim Zub"
        ],
        "publisher": "IDW Publishing",
        "description": "Evil, meet my sword! Sword, meet evil! Generations have passed since the original Heroes of Baldur's Gate saved the city and the Realms. Now a new threat rises and an unlikely group of misfits are thrust into adventure with MINSC, the legendary Ranger do-gooder with a heart of gold, brain of lead, and hamster of pronounced wisdom.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:AUG140436"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=OR3gBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=OR3gBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=OR3gBQAAQBAJ&pg=PT23&dq=Dungeons&hl=&cd=27&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=OR3gBQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=OR3gBQAAQBAJ",
        "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "1",
          "volumeSeries": [
            {
              "seriesId": "L9J9GgAAABBTyM",
              "seriesBookType": "ISSUE",
              "orderNumber": 1
            }
          ]
        }
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 10.39,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 10.39,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=OR3gBQAAQBAJ&rdid=book-OR3gBQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 10390000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 10390000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=OR3gBQAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Without \u003cb\u003eDungeons\u003c/b\u003e &amp; Dragons, I wouldn&#39;t be here. I guess that sounds fairly obvious on the surface. If there was no \u003cb\u003eDungeons\u003c/b\u003e &amp; Dragons roleplaying game, then obviously there&#39;d be no Forgotten Realms, no best-selling Baldur&#39;s Gate&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "AJJqBAAAQBAJ",
      "etag": "UtuqVhYb4BI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/AJJqBAAAQBAJ",
      "volumeInfo": {
        "title": "Of Dice and Men",
        "subtitle": "The Story of Dungeons & Dragons and The People Who Play It",
        "authors": [
          "David M. Ewalt"
        ],
        "publisher": "Simon and Schuster",
        "publishedDate": "2013",
        "description": "Originally published in hardcover in 2013.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781451640519"
          },
          {
            "type": "ISBN_10",
            "identifier": "145164051X"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Biography & Autobiography"
        ],
        "averageRating": 4,
        "ratingsCount": 16,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=AJJqBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=AJJqBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=AJJqBAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=28&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=AJJqBAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Of_Dice_and_Men.html?hl=&id=AJJqBAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=AJJqBAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Originally published in hardcover in 2013."
      }
    },
    {
      "kind": "books#volume",
      "id": "swSPEAAAQBAJ",
      "etag": "XVlRi6JOGSg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/swSPEAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeon! Board Game",
        "authors": [
          "Wizards of the Coast LLC"
        ],
        "publisher": "National Geographic Books",
        "publishedDate": "2014-06-24",
        "description": "First released in 1975 and revised throughout the 1980s and early 1990s, the Dungeon! boardgame lets you explore a multi-level dungeon in search of treasure guarded by terrible monsters. The deeper into the dungeon you go, the deadlier the monsters and the greater the treasure. The player who returns to the beginning chamber with the most treasure wins!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780786965557"
          },
          {
            "type": "ISBN_10",
            "identifier": "078696555X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=swSPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=swSPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=swSPEAAAQBAJ&dq=Dungeons&hl=&cd=29&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=swSPEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeon_Board_Game.html?hl=&id=swSPEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=swSPEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The deeper into the dungeon you go, the deadlier the monsters and the greater the treasure. The player who returns to the beginning chamber with the most treasure wins!"
      }
    },
    {
      "kind": "books#volume",
      "id": "tnx7RWeK-04C",
      "etag": "tnFYJufaKuM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tnx7RWeK-04C",
      "volumeInfo": {
        "title": "Everything I Need to Know I Learned from Dungeons & Dragons",
        "subtitle": "One Woman's Quest to Trade Self-Help for Elf-Help",
        "authors": [
          "Shelly Mazzanoble"
        ],
        "publisher": "Wizards of the Coast",
        "publishedDate": "2011-09-06",
        "description": "With tongue-in-cheek humor, the creator of the award-winning Confessions of a Part-Time Sorceress takes on the self-help section, proving that the benefits of the Dungeons & Dragons® game goes far beyond simple entertainment. From the Trade Paperback edition.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780786959365"
          },
          {
            "type": "ISBN_10",
            "identifier": "0786959363"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 192,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 3,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.1.0.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=tnx7RWeK-04C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=tnx7RWeK-04C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=tnx7RWeK-04C&pg=PT112&dq=Dungeons&hl=&cd=30&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=tnx7RWeK-04C&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=tnx7RWeK-04C"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 67.73,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 67.73,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=tnx7RWeK-04C&rdid=book-tnx7RWeK-04C&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 67730000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 67730000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Everything_I_Need_to_Know_I_Learned_from-sample-epub.acsm?id=tnx7RWeK-04C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Everything_I_Need_to_Know_I_Learned_from-sample-pdf.acsm?id=tnx7RWeK-04C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=tnx7RWeK-04C&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "“And do you even know what a \u003cb\u003eDungeon\u003c/b\u003e Master is? It might not be what you think it is.” “I know what it is! It&#39;s the leader of the nerd cult you&#39;re indoctrinated into!” You say “nerd cult.” I say, “just another day at work.” Whatever."
      }
    },
    {
      "kind": "books#volume",
      "id": "_kVYMyaNqBIC",
      "etag": "ZpaJMZFDZTg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/_kVYMyaNqBIC",
      "volumeInfo": {
        "title": "Narrative of Don Juan Van Halen's Imprisonment in the Dungeons of the Inquistion at Madrid, and His Escape in 1817 and 1818",
        "subtitle": "To which are Added, His Journey to Russia, His Campaign with the Army of the Caucasus, and His Return to Spain in 1821",
        "authors": [
          "Juan Van Halen"
        ],
        "publishedDate": "1828",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "HARVARD:32044081795247"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 394,
        "printType": "BOOK",
        "categories": [
          "Caucasus"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.7.8.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=_kVYMyaNqBIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=_kVYMyaNqBIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=_kVYMyaNqBIC&pg=PA51&dq=Dungeons&hl=&cd=31&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=_kVYMyaNqBIC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=_kVYMyaNqBIC"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=_kVYMyaNqBIC&rdid=book-_kVYMyaNqBIC&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com.br/books/download/Narrative_of_Don_Juan_Van_Halen_s_Impris.epub?id=_kVYMyaNqBIC&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com.br/books/download/Narrative_of_Don_Juan_Van_Halen_s_Impris.pdf?id=_kVYMyaNqBIC&hl=&output=pdf&sig=ACfU3U0P96Yqirg3AfborclLXliHEYnYOg&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=_kVYMyaNqBIC&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Not many minutes elapsed before the jailer returned , and I wrote the following petition to the King :Sire , &quot; Lieutenant - Colonel Don Juan Van Halen , confined in the \u003cb\u003edungeons\u003c/b\u003e of the Inquisition of this city by your Majesty&#39;s orders&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "E9FSAAAAcAAJ",
      "etag": "Dh8oub4R2Qc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/E9FSAAAAcAAJ",
      "volumeInfo": {
        "title": "Narrative of Don Juan Van Halen's Imprisonment in the Dungeons of the Inquisition at Madrid, and His Escape in 1817 and 1818; to which are Added, His Journey to Russia, His Campaign with the Army of the Caucasus, and His Return to Spain in 1821",
        "authors": [
          "Juan van Halen (conde de Peracamps.)"
        ],
        "publishedDate": "1827",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "KBNL:KBNL03000222197"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 414,
        "printType": "BOOK",
        "categories": [
          "Inquisition"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.3.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=E9FSAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=E9FSAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=E9FSAAAAcAAJ&pg=PA51&dq=Dungeons&hl=&cd=32&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=E9FSAAAAcAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=E9FSAAAAcAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=E9FSAAAAcAAJ&rdid=book-E9FSAAAAcAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com.br/books/download/Narrative_of_Don_Juan_Van_Halen_s_Impris.epub?id=E9FSAAAAcAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com.br/books/download/Narrative_of_Don_Juan_Van_Halen_s_Impris.pdf?id=E9FSAAAAcAAJ&hl=&output=pdf&sig=ACfU3U06GRRDrjixPz7bIc447Wkz1D4V5Q&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=E9FSAAAAcAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "guided me through several subterraneous pas- sages to my \u003cb\u003edungeon\u003c/b\u003e , which with four others had unfortunately survived the destruction of the principal part of the building . These \u003cb\u003edungeons\u003c/b\u003e , constructed in the primitive times of the&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "8gRPEAAAQBAJ",
      "etag": "dPxJcEEIupk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/8gRPEAAAQBAJ",
      "volumeInfo": {
        "title": "D&D DUNGEON TILES REINCARNATED: DUNGEON",
        "publisher": "Wizards of the Coast",
        "publishedDate": "2018-01-23",
        "description": "Breathe life into your tabletop Dungeons & Dragons® game with these full color dungeon tiles. Infinitely expandable and easy to set up, these dungeon tiles allow you to create the adventures you want to play. This box contains 16 durable, double-sided, fully illustrated tile sheets, featuring dungeon rooms, corridors, caverns, tunnels, and other terrain elements that Dungeon Masters can use to build exciting encounters. Use these tiles to make fantastic dungeon maps to enhance your tabletop roleplaying game experience. For use with the Dungeons & Dragons Fantasy Roleplaying Game.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780786966301"
          },
          {
            "type": "ISBN_10",
            "identifier": "0786966300"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=8gRPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=8gRPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=8gRPEAAAQBAJ&dq=Dungeons&hl=&cd=33&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=8gRPEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/D_D_DUNGEON_TILES_REINCARNATED_DUNGEON.html?hl=&id=8gRPEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8gRPEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Breathe life into your tabletop Dungeons &amp; Dragons® game with these full color dungeon tiles. Infinitely expandable and easy to set up, these dungeon tiles allow you to create the adventures you want to play."
      }
    },
    {
      "kind": "books#volume",
      "id": "kWQyzgEACAAJ",
      "etag": "0QH+NE2LiR0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/kWQyzgEACAAJ",
      "volumeInfo": {
        "title": "Dungeons and Dragons: Mini Dice Dungeon",
        "authors": [
          "Brenna Dinon"
        ],
        "publisher": "Running Press Miniature Editions",
        "publishedDate": "2021-11-02",
        "description": "Keep your dice in-line with this official Dungeons & Dragons mini Dice Dungeon! Punish or put your dice in a time-out when they roll critical fails or put your friends (and yourself) in danger with the Mini Dice Dungeon. LIGHT-UP DICE DUNGEON: Includes a 3 inch mini dungeon with LED light feature in red, green, or blue SPECIAL BRANDED D20: A translucent d20 branded with the D&D ampersand for the 20 ILLUSTRATED MINI BOOK INCLUDED: With tips, advice, and the basics of dice care, and tear-out shame cards PERFECT GIFT FOR D&D FANS: Display on a shelf, desk, or bookcase and show off your love of Dungeons & Dragons OFFICIALLY LICENSED: Authentic Dungeons & Dragons collectible Dungeons & Dragons, D&D, their respective logos, and the dragon ampersand, are registered trademarks of Wizards of the Coast LLC. ©2021 Wizards of the Coast. All rights reserved.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0762475919"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780762475919"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 48,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=kWQyzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=kWQyzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=kWQyzgEACAAJ&dq=Dungeons&hl=&cd=34&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=kWQyzgEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_and_Dragons_Mini_Dice_Dungeon.html?hl=&id=kWQyzgEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=kWQyzgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "LIGHT-UP DICE DUNGEON: Includes a 3 inch mini dungeon with LED light feature in green SPECIAL BRANDED D20: A translucent d20 branded with the D&amp;D ampersand for the 20 ILLUSTRATED MINI BOOK INCLUDED: With tips, advice, and the basics of dice ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "2zKGEAAAQBAJ",
      "etag": "Ts2IMhoTOHk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/2zKGEAAAQBAJ",
      "volumeInfo": {
        "title": "Random Tables: Dungeons and Lairs",
        "subtitle": "The Game Master's Companion for Creating Secret Entrances, Rumors, Prisons, and More",
        "authors": [
          "Timm Woods"
        ],
        "publisher": "Simon and Schuster",
        "publishedDate": "2022-09-27",
        "description": "Get ready to add even more dark and dangerous detail to your table fantasy tabletop role-playing game with hundreds of random tables designed to help you create epic storylines full of mysterious dungeons, secret entrances, and more! Take your fantasy world to the next level, all with the roll of a dice! Random Tables: Dungeons and Lairs is a utility book for fans of tabletop role-playing games like Dungeons & Dragons, allowing game masters to generate on-the-fly content for their adventures traveling through dangerous dungeons, choosing room and hall aesthetics, and discovering unique sealing techniques. Adventurers love to ask tough questions that can sometimes put game masters on the spot and put their creative skills to the test. Never fear being stumped when the party asks: What type of rumors are embedded into this dungeon? What’s this room's feature and how can I navigate it? Is this door made from magical properties or is it normal? Generate all of these answers and more by rolling on the dozens of randomized tables provided within these pages. Your party will love your fast-paced and exciting adventures, and even you will be on the edge of your seat to see what happens next!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781646043514"
          },
          {
            "type": "ISBN_10",
            "identifier": "1646043510"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 128,
        "printType": "BOOK",
        "categories": [
          "Games & Activities"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=2zKGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=2zKGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=2zKGEAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=35&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=2zKGEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Random_Tables_Dungeons_and_Lairs.html?hl=&id=2zKGEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=2zKGEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Use this book to generate an entire dungeon from scratch with dozens of randomized tables focused on: dungeon types, dungeon facades, room sizes, doors and barriers and more! --"
      }
    },
    {
      "kind": "books#volume",
      "id": "-0xjEAAAQBAJ",
      "etag": "rfQwZ5GbGo8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-0xjEAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons: Dungeon Club: Roll Call",
        "authors": [
          "Molly Knox Ostertag"
        ],
        "publisher": "HarperCollins",
        "publishedDate": "2022-11-29",
        "description": "From New York Times bestselling author Molly Knox Ostertag and critically acclaimed illustrator Xanthe Bouma comes an all-new Dungeons & Dragons graphic novel series! Middle school is a dungeon… At least, that’s how Jess sees it. Luckily, she and her best friend Olivia know how to escape into the sprawling worlds of their own imaginations. The two friends have always loved making up stories, first with little kid games of make-believe, and more recently with the fantasy roleplaying game, Dungeons & Dragons. When they play, Olivia runs the game as Dungeon Master and Jess is the solo party member, playing a take-no-prisoners, lone-wolf fighter of her own design named Sir Corius. But when Olivia wants to add new players to their group, Jess finds herself struggling to share their game—and her best friend. Will their epic campaign withstand all this change, or has their adventure—and their friendship—finally come to an end?",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780063039254"
          },
          {
            "type": "ISBN_10",
            "identifier": "0063039257"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 211,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-0xjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-0xjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=-0xjEAAAQBAJ&printsec=frontcover&dq=Dungeons&hl=&cd=36&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=-0xjEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=-0xjEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 78.4,
          "currencyCode": "BRL"
        },
        "retailPrice": {
          "amount": 78.4,
          "currencyCode": "BRL"
        },
        "buyLink": "https://play.google.com/store/books/details?id=-0xjEAAAQBAJ&rdid=book--0xjEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 78400000,
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amountInMicros": 78400000,
              "currencyCode": "BRL"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_Dragons_Dungeon_Club_Roll_Call-sample-epub.acsm?id=-0xjEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.br/books/download/Dungeons_Dragons_Dungeon_Club_Roll_Call-sample-pdf.acsm?id=-0xjEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=-0xjEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "From New York Times bestselling author Molly Knox Ostertag and critically acclaimed illustrator Xanthe Bouma comes an all-new Dungeons &amp; Dragons graphic novel series!"
      }
    },
    {
      "kind": "books#volume",
      "id": "O-kKnwEACAAJ",
      "etag": "FiBiAx9m0qY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/O-kKnwEACAAJ",
      "volumeInfo": {
        "title": "Dungeons and Dragons 4th Edition For Dummies",
        "authors": [
          "Bill Slavicsek",
          "Richard Baker"
        ],
        "publisher": "For Dummies",
        "publishedDate": "2008-07-15",
        "description": "Explore the fantasy world of D&D and delve into dungeons, slay monsters, and gain treasure! If you've been thinking of playing D&D or you've played before and you want to get up to speed on the all-new 4th Edition, this is the book for you. Here's what you need to know to join the fantasy fun. D&D terminology — understand what ability check, modifier, saving throw, AC, gp, hp, and XP mean Roll the dice — add modifiers and see if you rolled the d20 high enough to beat the challenge Minding your manners — know D&D etiquette so you'll be welcome in any adventure Character building — select your character's race and class, and choose the best powers, skills, feats, and gear Roleplaying — give your character a background and personality quirks Combat — use combat rules, a battle grid, and miniatures to play out furious battles Open the book and find: Everything a new player needs to get started playing D&D Details on four fantasy races and four iconic classes Explanations of every number and statistic on the character sheet The best magic items and equipment for characters of all classes Advice on roleplaying and teamwork A ready-to-use adventure to get you started as a Dungeon Master A ready-to-use battle grid with character and monster markers",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0470292903"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780470292907"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 464,
        "printType": "BOOK",
        "categories": [
          "Games"
        ],
        "averageRating": 3,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=O-kKnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=O-kKnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=O-kKnwEACAAJ&dq=Dungeons&hl=&cd=37&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=O-kKnwEACAAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_and_Dragons_4th_Edition_For_Dum.html?hl=&id=O-kKnwEACAAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=O-kKnwEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Explore the fantasy world of D&amp;D and delve into dungeons, slay monsters, and gain treasure! If you&#39;ve been thinking of playing D&amp;D or you&#39;ve played before and you want to get up to speed on the all-new 4th Edition, this is the book for you."
      }
    },
    {
      "kind": "books#volume",
      "id": "3ARPEAAAQBAJ",
      "etag": "WhMJ2DGdGto",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/3ARPEAAAQBAJ",
      "volumeInfo": {
        "title": "ABCs of D&D (Dungeons & Dragons Children's Book)",
        "authors": [
          "Dungeons & Dragons",
          "Ivan Van Norman"
        ],
        "publisher": "Wizards of the Coast",
        "publishedDate": "2018-11-13",
        "description": "A Dungeons & Dragons children’s book that captures the wonder and whimsy that made you fall in love with the game. “An adorable book for geeks big and little.”—Felicia Day, author of New York Times bestseller You’re Never Weird on the Internet (Almost) A is for Adventure. Our journey has begun. B is for Book, the source of all the fun! Start your little gamer on an adventure to last a lifetime with this alphabetical children’s book and introduction to the greatest roleplaying game of all time, Dungeons & Dragons. Written in the rhyming style of classic children’s books and filled with adorable owlbears and darling beholders, it’s the perfect book to share the joy of Dungeons & Dragons with a new generation as they learn the alphabet—a precursor to every new path in reading. • Perfect birthday gift or holiday gift for gamers of all ages; great thank you gift for Dungeon Masters • Must-have for all gaming parents; a great baby shower gift! • Part of a series with The 123s of D&D, a children’s counting book and companion to The ABCs of D&D.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780786966660"
          },
          {
            "type": "ISBN_10",
            "identifier": "0786966661"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=3ARPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=3ARPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=3ARPEAAAQBAJ&dq=Dungeons&hl=&cd=38&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=3ARPEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/ABCs_of_D_D_Dungeons_Dragons_Children_s.html?hl=&id=3ARPEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=3ARPEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "B is for Book, the source of all the fun! Start your little gamer on an adventure to last a lifetime with this alphabetical children’s book and introduction to the greatest roleplaying game of all time, Dungeons &amp; Dragons."
      }
    },
    {
      "kind": "books#volume",
      "id": "ly9GEAAAQBAJ",
      "etag": "er2TFkh0prg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ly9GEAAAQBAJ",
      "volumeInfo": {
        "title": "Dungeons & Dragons 100 Postcards: Archival Art from Every Edition",
        "subtitle": "100 Postcards",
        "authors": [
          "Official Dungeons & Dragons"
        ],
        "publisher": "Dungeons & Dragons",
        "publishedDate": "2021-11-02",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781984824622"
          },
          {
            "type": "ISBN_10",
            "identifier": "1984824627"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 100,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ly9GEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ly9GEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=ly9GEAAAQBAJ&dq=Dungeons&hl=&cd=39&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=ly9GEAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Dungeons_Dragons_100_Postcards_Archival.html?hl=&id=ly9GEAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ly9GEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "XjqREAAAQBAJ",
      "etag": "0UBDRX6hpxc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XjqREAAAQBAJ",
      "volumeInfo": {
        "title": "The Book of Holding",
        "subtitle": "A Journal",
        "authors": [
          "Official Dungeons & Dragons Licensed"
        ],
        "publisher": "National Geographic Books",
        "publishedDate": "2020-08-04",
        "description": "This officially licensed keepsake journal, lavishly designed with magnetic enclosure and a back pocket, is a must-have for Dungeons & Dragons fans of all levels and ages. Trust this multipurpose journal to stow all your ideas, notes, and to-dos. Highly customizable with five pieces of stunning full-color artwork, The Book of Holding is ideal for capturing character sketches, formulating campaigns, or organizing your everyday thoughts. Whether you're a die-hard dungeon master preparing for your next game session or a part-time player wanting to represent your favorite RPG, this journal is the ultimate companion to your quest.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781984824615"
          },
          {
            "type": "ISBN_10",
            "identifier": "1984824619"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XjqREAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XjqREAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.br/books?id=XjqREAAAQBAJ&dq=Dungeons&hl=&cd=40&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=XjqREAAAQBAJ&dq=Dungeons&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Book_of_Holding.html?hl=&id=XjqREAAAQBAJ"
      },
      "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "BR",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=XjqREAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Highly customizable with five pieces of stunning full-color artwork, The Book of Holding is ideal for capturing character sketches, formulating campaigns, or organizing your everyday thoughts."
      }
    }
  ]
}

let book_id = 1;
let insert_books = 'insert into books (id, title, description, published_date, page_count, language, book_id) values';
let insert_author = 'insert into book_authors (author, book_int_id, created_at) values ';
let insert_images = 'insert into book_image_links (book_int_id, small_thumbnail, thumbnail, created_at) values ';
let books = [];
let authors = [];
let images = [];

booksList.items.forEach((bookItem) => {
  const r = /'/g

  let pageCount = "null";
  if( bookItem.volumeInfo.pageCount ) {
    pageCount = bookItem.volumeInfo.pageCount
  }

  let publishedDate = "null"
  if (bookItem.volumeInfo.publishedDate) {
    publishedDate = `'${bookItem.volumeInfo.publishedDate}'`
  }

  let bookDescription = "null"
  if (bookItem.volumeInfo.description) {
    bookDescription = bookItem.volumeInfo.description.replace(r, '`')
  }

  books.push(`(${book_id}, '${bookItem.volumeInfo.title.replace(r, '`')}', '${bookDescription}',${publishedDate}, ${pageCount},'${bookItem.volumeInfo.language}','${bookItem.id}')`);

  if (bookItem.volumeInfo?.authors?.length > 0) {
    bookItem.volumeInfo.authors.forEach((author) => {
      authors.push(`('${author}',${book_id},'${(new Date()).toISOString()}')`);
    });
  }

  // Image lists
  if (bookItem.volumeInfo.imageLinks) {
    images.push(`(${book_id}, '${bookItem.volumeInfo.imageLinks?.smallThumbnail}', '${bookItem.volumeInfo.imageLinks?.thumbnail}', '${(new Date).toISOString()}')`);
  }
  book_id++;
})

console.log(`
------------------------------------------------------------------
-- Inserting books
------------------------------------------------------------------ 
`)
insert_books += books.join(`,\n`) + ';';
console.log(insert_books);

console.log(`
------------------------------------------------------------------
-- Inserting Authors
------------------------------------------------------------------ 
`)
insert_author += authors.join(`,\n`) + ';';
console.log(insert_author);

console.log(`
------------------------------------------------------------------
-- Inserting Images
------------------------------------------------------------------ 
`)
insert_images += images.join(`,\n`) + ';';
console.log(insert_images);
