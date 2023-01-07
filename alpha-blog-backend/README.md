Backend setup
-

```
npm init -y
```

```
npm install express
```

- source folder

- `server.js`

- add `"type": "module",` to `package.json`

  ```json
  {
  "name": "alpha-blog-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
- `nodemon`

  ```
  npm install nodemon --save-dev
  ```

  - run server

  ```
  npx nodemon <server location>
  ```

- Add `nodemon` shortcut in `package.json`

  ```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/server.js"
  }
  ```

- [Mongodb setup](https://www.cherryservers.com/blog/how-to-install-and-start-using-mongodb-on-ubuntu-20-04)

  ```
  mongod --dpath ./mongo-db-data/mongo-db-data
  ```
- Run on a diff terminal

  ```
  mongo
  ```

  - Create a new database
  
  ```
  use react-blog-db
  ```

  - Insert json docs

  ```
  db.articles.insertMany

  - Mongodb driver package

  ```
  npm install mongodb
  ```

- Axios

  ```
  npm install axios
  ```

- firebase

```
npm install firebase-admin
```