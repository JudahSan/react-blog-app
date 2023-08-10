## Backend Setup

Setting up the backend for your project involves several steps to ensure a smooth development experience. Follow the instructions below to configure your environment and integrate necessary dependencies.

### Initializing the Project

First, create and initialize your project by running the following commands:

```bash
npm init -y
npm install express
```

### Server Configuration

In your source folder, create a file named `server.js` to define your server logic. Additionally, ensure you have `"type": "module",` added to your `package.json` to support ES6 modules:

```json
{
  "name": "alpha-blog-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^x.x.x"  // Specify the version of nodemon
  }
}
```

### Running the Server

To automatically restart your server during development, install `nodemon` as a development dependency and create a shortcut in your `package.json`:

```bash
npm install nodemon --save-dev
```

Then, start your server using the following command:

```bash
npm run dev
```

### MongoDB Setup

For database management, follow the steps outlined in the [Mongodb setup guide](https://www.cherryservers.com/blog/how-to-install-and-start-using-mongodb-on-ubuntu-20-04). Once MongoDB is installed, you can run the following commands to set up and interact with your database:

```bash
mongod --dbpath ./mongo-db-data
mongo
```

Within the MongoDB shell, create a new database and insert JSON documents:

```mongodb
use react-blog-db
db.articles.insertMany([
  {
    name: 'learn-redux',
    upvotes: 0,
    comments: []
  }
])
```

### MongoDB Driver and Other Dependencies

Install the MongoDB driver and other necessary dependencies using the following commands:

```bash
npm install mongodb
npm install axios
npm install firebase-admin
npm install dotenv
```
