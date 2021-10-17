import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_gy28tt-ptYxwJPGTjaGK6HWPbfUQ_bw",
  authDomain: "mychatroon-fa300.firebaseapp.com",
  projectId: "mychatroon-fa300",
  storageBucket: "mychatroon-fa300.appspot.com",
  messagingSenderId: "546001621547",
  appId: "1:546001621547:web:efed40dc5fac0bccb9d06e",
  databaseURL: "https://mychatroon-fa300-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export default app;