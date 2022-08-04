const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

class Anime {
  constructor(
    id,
    image,
    title,
    status,
    type,
    episodes,
    year,
    season,
    progress,
    score,
    producer,
    plan,
    isAdded
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.status = status;
    this.type = type;
    this.episodes = episodes;
    this.year = year;
    this.season = season;
    this.progress = progress;
    this.score = score;
    this.producer = producer;
    this.plan = plan;
    this.isAdded = isAdded;
  }
}

async function createUserIfNotExisted(email) {
  const userDocRef = db.collection("users").doc(email);
  userDocRef.get().then(async (doc) => {
    if (!doc.exists) {
      await userDocRef.set({
        animes: [],
        manga: [],
      });
    }
  });
}

async function createAnimeIfNotExisted(anime) {
  const animeDocRef = db.collection("animes").doc(anime.title);
  animeDocRef.get().then(async (doc) => {
    if (!doc.exists) {
      await animeDocRef.set(anime);
    }
  });
}

async function checkIfAnimeIsInCollection(animeTitle, email) {
  const userDocRef = db.collection("users").doc(email);
  const snapshot = await userDocRef.get();
  const user = snapshot.data();
  if (user !== undefined) {
    const animeList = user.animes;
    if (animeList.length === 0) {
      return false;
    } else {
      for (let anime of animeList) {
        if (anime == animeTitle) {
          return true;
        }
      }
      return false;
    }
  } else {
    return false;
  }
}

async function getAnimeFromCollection(animeTitle) {
  const animeDocRef = db.collection("animes").doc(animeTitle);
  const snapshot = await animeDocRef.get();
  return snapshot.data();
}

const serviceAccount = require("./permission.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));

app.get("/hello", (req, res) => {
  return res.status(200).send("hello world route");
});

// Create - POST
app.post("/api/user/", async (req, res) => {
  try {
    await createUserIfNotExisted(req.body.email);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.post("/api/anime", async (req, res) => {
  try {
    await db
      .collection("animes")
      .doc("/" + req.body.id + "/")
      .create({});
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Read - GET

// Update - PUT

// Delete - DELETE

// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
