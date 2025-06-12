// fireBase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABa-z1KeXh5-6Of58x8lA6hdYtLPGk8sM",
  authDomain: "clone-1e587.firebaseapp.com",
  projectId: "clone-1e587",
  storageBucket: "clone-1e587.firebasestorage.app",
  messagingSenderId: "271552354844",
  appId: "1:271552354844:web:f65ad3a884c3f446565dd9",
  measurementId: "G-1PDYV09TH1"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export initialized services
export const auth = getAuth(); // Pass `app`
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
