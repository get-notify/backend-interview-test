# The Backend Netzsch Interview Test

- What we will see?
  - Clean code and consise logic
  
  
# Details

- We need a book listing api, the initial database was made available DBA into `_sql_scripts` folder, the user need to get:
  - A list of all books, paginated
    - ```
        curl -X GET 'https://localhost:9191/api/v1/books?limit=10&page=1&order=asc&sort=name'
      ```
  - A book detail
