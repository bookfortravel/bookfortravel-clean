import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuEYvLps0iswoW8AC5OxDYAgFW3OwKGRs",
  authDomain: "bookfortravel-84dbf.firebaseapp.com",
  projectId: "bookfortravel-84dbf",
  storageBucket: "bookfortravel-84dbf.firebasestorage.app",
  messagingSenderId: "273863642609",
  appId: "1:273863642609:web:62437ca29c66b7600f8850",
  measurementId: "G-FG7M7C4ZXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
