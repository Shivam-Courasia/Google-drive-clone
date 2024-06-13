import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {


    apiKey: "AIzaSyBI8YO-aT06oRCAI97SU2PdhkIasnyneBA",
  authDomain: "drive-clone-42071.firebaseapp.com",
  projectId: "drive-clone-42071",
  storageBucket: "drive-clone-42071.appspot.com",
  messagingSenderId: "431118655408",
  appId: "1:431118655408:web:8fe06825c7a90627c40075",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
