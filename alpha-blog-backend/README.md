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