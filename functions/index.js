const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const serviceAccount = require("./permission.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const adminFirestore = admin.firestore;
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
    await addAnimeToCollection(req.body.anime, req.body.email);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Read - GET
app.get("/api/anime/:title/:email", async (req, res) => {
  try {
    const isAdded = await checkIfAnimeIsInCollection(
      req.params.title,
      req.params.email
    );
    return res.status(200).send({
      isAdded: isAdded,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/list/anime/:email", async (req, res) => {
  try {
    const animeList = await getAnimeCollection(req.params.email);
    return res.status(200).send({
      animes: animeList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Update - PUT
app.put("/api/anime", async (req, res) => {
  try {
    await updateAnimeInCollection(
      req.body.oldAnime,
      req.body.newAnime,
      req.body.email
    );
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Delete - DELETE
app.delete("/api/anime", async (req, res) => {
  try {
    await deleteAnimeFromCollection(req.body.anime, req.body.email);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Export the api to Firebase Cloud Functions
exports.app = functions.region("asia-southeast1").https.onRequest(app);

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
    producers,
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
    this.producer = producers;
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
        mangas: [],
      });
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
      for (let userAnime of animeList) {
        if (userAnime.title === animeTitle) {
          return true;
        }
      }
      return false;
    }
  } else {
    return false;
  }
}

async function getAnimeCollection(email) {
  const userDocRef = db.collection("users").doc(email);
  const snapshot = await userDocRef.get();
  const user = snapshot.data();
  const data = [];
  if (user !== undefined) {
    const animeList = user.animes;
    if (animeList.length === 0) {
      return animeList;
    } else {
      for (let anime of animeList) {
        data.push(anime);
      }
    }
  }
  return data;
}

async function addAnimeToCollection(anime, email) {
  const userDocRef = db.collection("users").doc(email);
  await userDocRef.get().then(async (doc) => {
    if (doc.exists) {
      await userDocRef.update({
        animes: adminFirestore.FieldValue.arrayUnion(anime),
      });
    }
  });
}

async function deleteAnimeFromCollection(anime, email) {
  const userDocRef = db.collection("users").doc(email);
  await userDocRef.get().then(async (doc) => {
    if (doc.exists) {
      await userDocRef.update({
        animes: adminFirestore.FieldValue.arrayRemove(anime),
      });
    }
  });
}

async function updateAnimeInCollection(oldAnime, newAnime, email) {
  const userDocRef = db.collection("users").doc(email);
  await userDocRef.get().then(async (doc) => {
    if (doc.exists) {
      await userDocRef.update({
        animes: adminFirestore.FieldValue.arrayRemove(oldAnime),
      });
      await userDocRef.update({
        animes: adminFirestore.FieldValue.arrayUnion(newAnime),
      });
    }
  });
}
