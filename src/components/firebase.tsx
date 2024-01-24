import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJqJczg5UttJcUSLJy7bUGnHHW_lm7DEQ",
  authDomain: "aryvo-a93d9.firebaseapp.com",
  projectId: "aryvo-a93d9",
  storageBucket: "aryvo-a93d9.appspot.com",
  messagingSenderId: "208033784857",
  appId: "1:208033784857:web:16d752bfcce334f639f688",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
