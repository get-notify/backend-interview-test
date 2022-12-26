# The Backend Interview Test - NETZSCH

- What we will see?
  - Clean code
  - Use of https://grpc.io/
  - Use of https://go-chi.io/#/
  - Use of https://gorm.io/docs/
  - Database Integration
  - Unit Tests

- Not a requirement, but will be good to see if possible:
  - Use of https://github.com/swaggo/swag and a public swagger documentation
  - The Docker file with the `PostgresSQl`, `service`, and `APIs`

# Details

One of our customers bought a TVBox display, which can call APIs and display some books, a random book need to be displayed at the TVBox with the last book displayed (except at the first API request), and the TVBox will send this in an interval of `1m`, the customer wants every next book not to be among the last `10` books displayed.

- The customer will send a request to our public service, and we need to provide some books about "_Dungeon&Dragons_" to be displayed on a TVBox at the company reception
  - He sent to us a list of the books he needs (see [create_database.sql](./_sql_scripts/create_database.sql))
- The customer will need one public API with a `hash` authentication at the request header, just for authentication

# Architecture

```text
//                       All endpoint at public
//                       api need a header: "api-Key: string"
// 
//                           +-------------+               +---------------+       
// +-------------+           |             |               |               |       
// |             |           |             |               |               |       +---------------+
// |    User     |           |             |               |    Private    |       |               |
// |             |<----------|   Public    |<--------------|      API      |------>|    Database   |
// |             +---------->|             +-------------->|               |<------|               |
// |             |           |    Api      |      GRPC     |     GRPC      |       +---------------+
// |             |           |             |               |     only      |       
// |             |           |             |               |               |       
// +-------------+           |             |               |               |       
//                           +-------------+               +---------------+       
```

- Create a user hash to use at the `body` header
  - Key: `Api-Key` - Type: `string`

### Public API

- Each endpoint will need to be validated with the Authentication Key given in the request header

#### GET - Create a simple endpoint to return the random book and the latest book displayed
  - The first book displayed doesn’t need to have a latest_book
  - The public-api will call the Private API GRPC service

#### GET - Create a simple endpoint to return the details from a book by the id
  - The public-api will call the Private API GRPC service

### Service API
You can generate the service with the [private-service.proto](proto_files/private-service.proto) file

#### GRPC - Create a simple endpoint to return the random book and the latest book displayed

- Get the next random book
  - Update the flag `actual_book` to `true` for the selected book
  - Update the flag `actual_book` to `false` for all other books
  - Make sure the book are not in the latest 10 books.
- If is the first call, the `latest_book` can be empty

#### GRPC - Create a simple endpoint to return the details from a book by the id

- Get one book by `book_id` from the database the book details and return it.

# API Requests

- Request:

```shell
  curl -X GET 'https://localhost:9191/api/v1/books/random-one' -H "Auth-Key: HUAKAs123ASdk123lDIOQ"
```

- Return (example):

```json
{
  "random_book": {...},
  "last_book": {...}
}        
```

## The book details:
When the user select (touch) at the TVBox display to expand the book details, we will need more details about the book
- Request
```shell
    curl -X GET 'https://localhost:9191/api/v1/books/{book_id}'  -H "Auth-Key: HUAKAs123ASdk123lDIOQ"
```
