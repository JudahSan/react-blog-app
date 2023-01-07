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