import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:  "AIzaSyA8_KzWwBh-cYWriYxyZKc8Tj88IDSEUP8",
  authDomain: "myproj-5fd1b.firebaseapp.com",
  projectId: "myproj-5fd1b",
  storageBucket:  "myproj-5fd1b.appspot.com",
  messagingSenderId: "147658735771",
  appId: "1:147658735771:web:fed3c95c99ef22d731063e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
