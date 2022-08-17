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

app.get("/api/list/:plan/anime/:email", async (req, res) => {
  try {
    const plan = req.params.plan;
    const email = req.params.email;
    let animeList = [];
    if (plan === "All") {
      animeList = await getAnimeCollection(email);
    } else {
      animeList = await getAnimeCollectionBasedOnPlan(plan, email);
    }
    return res.status(200).send({
      animes: animeList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/types/anime", async (req, res) => {
  try {
    const animeTypeList = await getAnimeTypeCollection();
    return res.status(200).send({
      types: animeTypeList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/seasons/anime", async (req, res) => {
  try {
    const animeSeasonList = await getAnimeSeasonCollection();
    return res.status(200).send({
      seasons: animeSeasonList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/statuses/anime", async (req, res) => {
  try {
    const animeStatusList = await getAnimeStatusCollection();
    return res.status(200).send({
      statuses: animeStatusList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/years/anime/:email", async (req, res) => {
  try {
    const animeYearList = await getAnimeYearCollection(req.params.email);
    return res.status(200).send({
      years: animeYearList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/producers/anime/:email", async (req, res) => {
  try {
    const animeProducerList = await getAnimeProducerCollection(
      req.params.email
    );
    return res.status(200).send({
      producers: animeProducerList,
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
        animeProducers: [],
        animeYears: [],
        mangaAuthors: [],
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

async function getAnimeCollectionBasedOnPlan(plan, email) {
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
        if (anime.plan === plan) {
          data.push(anime);
        }
      }
    }
  }
  return data;
}

async function getAnimeTypeCollection() {
  const filterDocRef = db.collection("filters").doc("animeTypes");
  const snapshot = await filterDocRef.get();
  const filter = snapshot.data();
  const data = [];
  if (filter !== undefined) {
    const typeAnimeList = filter.types;
    if (typeAnimeList.length === 0) {
      return typeAnimeList;
    } else {
      for (let type of typeAnimeList) {
        data.push(type);
      }
    }
  }
  return data;
}

async function getAnimeSeasonCollection() {
  const filterDocRef = db.collection("filters").doc("allSeasons");
  const snapshot = await filterDocRef.get();
  const filter = snapshot.data();
  const data = [];
  if (filter !== undefined) {
    const seasonAnimeList = filter.seasons;
    if (seasonAnimeList.length === 0) {
      return seasonAnimeList;
    } else {
      for (let season of seasonAnimeList) {
        data.push(season);
      }
    }
  }
  return data;
}

async function getAnimeStatusCollection() {
  const filterDocRef = db.collection("filters").doc("animeStatuses");
  const snapshot = await filterDocRef.get();
  const filter = snapshot.data();
  const data = [];
  if (filter !== undefined) {
    const statusAnimeList = filter.statuses;
    if (statusAnimeList.length === 0) {
      return statusAnimeList;
    } else {
      for (let status of statusAnimeList) {
        data.push(status);
      }
    }
  }
  return data;
}

async function getAnimeYearCollection(email) {
  const userDocRef = db.collection("users").doc(email);
  const snapshot = await userDocRef.get();
  const user = snapshot.data();
  const data = [];
  if (user !== undefined) {
    const yearAnimeList = user.animeYears;
    if (yearAnimeList.length === 0) {
      return yearAnimeList;
    } else {
      for (let year of yearAnimeList) {
        data.push(year);
      }
    }
  }
  return data;
}

async function getAnimeProducerCollection(email) {
  const userDocRef = db.collection("users").doc(email);
  const snapshot = await userDocRef.get();
  const user = snapshot.data();
  const data = [];
  if (user !== undefined) {
    const producerAnimeList = user.animeProducers;
    if (producerAnimeList.length === 0) {
      return producerAnimeList;
    } else {
      for (let producer of producerAnimeList) {
        data.push(producer);
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
        animeYears: adminFirestore.FieldValue.arrayUnion(anime.year.toString()),
      });
      for (let producer of anime.producers) {
        await userDocRef.update({
          animeProducers: adminFirestore.FieldValue.arrayUnion(producer.name),
        });
      }
    }
  });
}

async function deleteAnimeFromCollection(anime, email) {
  const userDocRef = db.collection("users").doc(email);
  await userDocRef.get().then(async (doc) => {
    if (doc.exists) {
      await userDocRef.update({
        animes: adminFirestore.FieldValue.arrayRemove(anime),
        animeYears: adminFirestore.FieldValue.arrayRemove(
          anime.year.toString()
        ),
      });
      for (let producer of anime.producers) {
        await userDocRef.update({
          animeProducers: adminFirestore.FieldValue.arrayRemove(producer.name),
        });
      }
    }
  });
}

async function updateAnimeInCollection(oldAnime, newAnime, email) {
  const userDocRef = db.collection("users").doc(email);
  const snapshot = await userDocRef.get();
  const user = snapshot.data();
  let animeList = [];
  if (user !== undefined) {
    animeList = user.animes;
    if (animeList.length === 0) {
      return animeList;
    } else {
      for (let i = 0; i < animeList.length; i++) {
        if (animeList[i].id === oldAnime.id) {
          animeList[i] = newAnime;
        }
      }
    }
  }
  await userDocRef.update({
    animes: animeList,
  });
}
