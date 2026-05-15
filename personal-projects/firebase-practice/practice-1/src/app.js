import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9VAI09vQZPE_YGE_bMcXIIXvx91ISy8g",
  authDomain: "practice-1-e42a5.firebaseapp.com",
  projectId: "practice-1-e42a5",
  storageBucket: "practice-1-e42a5.firebasestorage.app",
  messagingSenderId: "538605962502",
  appId: "1:538605962502:web:4147d8e702345ee9950a87",
  measurementId: "G-30Z95J9GQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

console.log(firebase);