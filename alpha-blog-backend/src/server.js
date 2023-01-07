import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import { db, connectToDb } from './db.js';

const credentials = JSON.parse(
  fs.readFileSync('../credentials.json')
);
admin.initializeApp({
  credential: admin.credential.cert(credentials),

});

const app = express();
app.use(express.json());

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      res.sendStatus(400);
    }
  }
  next();

});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;
  const article = await db.collection('articles').findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    article.canUpvote = uid && !upvoteIds.include(uid);
    res.json(article);
  } else {
    res.sendStatus(404)
  }
  
});

// app.post('/hello', (req, res) => {
//   console.log(req.body);
//   res.send(`Hello ${req.body.name}`);
// });

// app.get('/hello/:name', (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello ${name}!!`);
// });

app.put('/api/articles/:name/upvote', async (req,res) => {
  const { name } = req.params;
  const {uid} = req.user;

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    const canUpvote = uid && !upvoteIds.include(uid);

    if (canUpvote) {
      await db.collection('articles').updateOne({ name }, {
        $inc: {upvotes: 1},
        $push: {upvoteIds: uid}
      });
    }
  
    const updatedArticle = await db.collection('articles').findOne({ name });
    res.json(updatedArticle);
} else {
      res.send('Sorry, but that article doesn\'t exist');
    }
  });

app.post('/api/articles/:name/comments', async(req, res) => {
  const { name } = req.params;
  const { text } = req.body;
  const { email } = req.user;

  await db.collection('articles').updateOne({ name }, {
    $push: { comments: {postedBy: email, text} },
  });
  const article = await db.collection('articles').findOne({ name });

  if (article) {

    res.json(article);

  } else {
    res.send('Sorry, that article doesn\'t exist');
  }
  
} );

connectToDb(() => {
  console.log(`Database connection success! Time to start digging for gold.`);
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
})
