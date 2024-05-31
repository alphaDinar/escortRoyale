import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDei6IRjoP0GF-G96doDSx_UmOEIb359vY",
  authDomain: "escortroyale-d9dbf.firebaseapp.com",
  projectId: "escortroyale-d9dbf",
  storageBucket: "escortroyale-d9dbf.appspot.com",
  messagingSenderId: "539542614129",
  appId: "1:539542614129:web:4c1dc7e6e5b3457cbc6bd0",
  measurementId: "G-EQNJN7F780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const fireStoreDB = getFirestore(app);
export const storageDB = getStorage(app);
// const analytics = getAnalytics(app);