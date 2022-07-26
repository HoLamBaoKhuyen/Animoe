import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const db  = admin.firestore();
app.use(cors({ origin: true}));

// Routes
app.get('/', (req, res) => {
  return res.status(200).send("Hello World!");
});

// Create - POST
app.get('/api/anime-list/add', (req, res) => {
  (async () => {
    try {
      await db.collection('animes').doc('/' + req.body.id + '/')
          .create({

          })
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Read - GET

// Update - PUT

// Delete - DELETE

// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);