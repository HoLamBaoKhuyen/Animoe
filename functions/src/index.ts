import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
import { initializeApp } from "firebase/app";

export type Anime = {
  id: number;
  image?: string;
  title: string;
  status?: string;
  type: string;
  episodes?: number;
  year?: number;
  season?: string;
  progress?: number;
  score?: number;
  producer: string[];
  plan?: string; // currently watching, on hold....
  isAdded?: boolean;
};

const firebaseConfig = {
  apiKey: "AIzaSyBXCKDkeue63zSzMK7Crq8QOmXC4hRVNis",
  authDomain: "animoe-7b89b.firebaseapp.com",
  projectId: "animoe-7b89b",
  storageBucket: "animoe-7b89b.appspot.com",
  messagingSenderId: "736444211597",
  appId: "1:736444211597:web:71fe5b8008417b55d41dc4",
  measurementId: "G-60H06NQW8M",
};

export const firebaseApp = initializeApp(firebaseConfig);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert("./permissions.json"),
  });
}

export const db = admin.firestore();
export const adminFirestore = admin.firestore;
export const adminAuth = admin.auth();

export async function createUserIfNotExisted(email: string) {
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

export async function createAnimeIfNotExisted(anime: Anime) {
  const animeDocRef = db.collection("animes").doc(anime.title);
  animeDocRef.get().then(async (doc) => {
    if (!doc.exists) {
      await animeDocRef.set(anime);
    }
  });
}

export async function checkIfAnimeIsInCollection(
  animeTitle: string,
  email: string
) {
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

export async function getAnimeFromCollection(animeTitle: string) {
  const animeDocRef = db.collection("animes").doc(animeTitle);
  const snapshot = await animeDocRef.get();
  return snapshot.data();
}

export const app = express();
app.use(cors({ origin: true }));

// Routes
app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

// Create - POST
app.get("/api/anime-list/add", (req, res) => {
  (async () => {
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
  })();
});

// Read - GET

// Update - PUT

// Delete - DELETE

// Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
