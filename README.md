# The Backend Netzsch Interview Test

- What we will see?
  - Clean code
  - Use of https://grpc.io/
  - Use of https://go-chi.io/#/
  - Unit Tests

# Details

- A client send a request, we need provide some books about "_Dungeon&Dragons_" to be displayed at a TVBox at the company reception
- The client will only need a public api with a single `hash` authentication at the request header
- We choose to user Google Books API
  - https://developers.google.com/books/docs/v1/using
    - Using the API key way
  - https://developers.google.com/books/docs/v1/libraries
  - https://github.com/googleapis/google-api-go-client/tree/main/books/v1
  - Google api request example:
    - ````shell
      curl -X GET https://www.googleapis.com/books/v1/volumes?q=Dungeons&key=YOUR_KEY
      ````

# Architecture

```text
//                       All endpoint at public
//                       api need a header: "api-Key: string"
// 
//                           +-------------+               +---------------+
// +-------------+           |             |               |               |
// |             |           |             |               |               |
// |    User     |           |             |               |    Private    |
// |             |<----------|   Publi     |<--------------|      API      |
// |             +---------->|             +-------------->|               |
// |             |           |    Api      |      GRPC     |     GRPC      |
// |             |           |             |               |     only      |
// |             |           |             |               |               |
// +-------------+           |             |               |               |
//                           +-------------+               +---------------+
```

- Create a user hash to use at `body` header
  - Key: `Api-Key` - Type: `string`

### Public Api

#### GET - Create a simple endpoint to return the random book and the latest book displayed
  - The first book displayed don't need to have a `latest_book`
    - Need the Api-Key at header to be called
  - The public-api will call Private Api GRPC service
    - Need the Api-Key at header to be called
#### GET - Create a simple endpoint to return the details from a book by the id
  - The public-api will call Private Api GRPC service
      - Need the Api-Key at header to be called
  
### Service API
You can generate the service with the [private-service.proto](proto_files/private-service.proto) file  

#### GRPC - Create a simple endpoint to return the random book and the latest book displayed

- Call the Google Book Api to get books about "_Dungeon&Dragons_". 
- If is the first call, the `latest_book` can be empty
- Make sure the last book are not the next book.

#### GRPC - Create a simple endpoint to return the details from a book by the id

- Call the Google Book Api to return the book details

# Api Requests

### We need a book listing api, the user need to get:

A random book need to be displayed at the TVBox, and the last book displayed (except at the first request), the TVBox 
will send this in a interval of `1m`, each time we need to store the latest book get, and make sure the at least the 
next 10 books can't be duplicated.

- Request:

```shell
  curl -X GET 'https://localhost:9191/api/v1/books/random-one' -H "Auth-Key: HUAKAs123ASdk123lDIOQ"
```

- Return (example):

```json
{
  "random_book": {
    "id": "J_xMHJSIvL0C",
    "title": "From Tinkering to Torquing",
    "subtitle": "A Beginner's Guide to Tractors and Tools",
    "authors": [
      "Roger Welsch"
    ],
    "publishedDate": "2005",
    "pageCount": 238,
    "printType": "BOOK",
    "categories": [
      "Farm equipment"
    ],
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=J_xMHJSIvL0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=J_xMHJSIvL0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en"
  },
  "last_book": {
    "id": "J_xMHJSIvL0C",
    "title": "Tractor Mechanics",
    "authors": [
      "Roger Welsch"
    ],
    "subtitle": "A Catalog Performance Objectives, Criterion-referenced Measures, and Performance Guides for Tractor Mechanics",
    "publishedDate": "1976",
    "pageCount": 240,
    "printType": "BOOK",
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=ohlJn7ehfvMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=ohlJn7ehfvMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en"
  }
}        
```

- See: 
  - https://github.com/googleapis/google-api-go-client/blob/main/books/v1/books-gen.go#L4255  
  - https://developers.google.com/books/docs/v1/using#WorkingVolumes

## The book details:
When the user touch at the TVBox display to expand the book details, we will need more details about the book
- Request
```shell
    curl -X GET 'https://localhost:9191/api/v1/books/{book_id}'  -H "Auth-Key: HUAKAs123ASdk123lDIOQ"
```
- Response
```json
{
  "id": "J_xMHJSIvL0C",
  "title": "Tractor Mechanics",
  "authors": [
    "Roger Welsch"
  ],
  "subtitle": "A Catalog Performance Objectives, Criterion-referenced Measures, and Performance Guides for Tractor Mechanics",
  "publishedDate": "1976",
  "pageCount": 240,
  "printType": "BOOK",
  "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=ohlJn7ehfvMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=ohlJn7ehfvMC&printsec=frontcover&img=1&zoom=10&source=gbs_api"
  },
  "language": "en"
}
```
