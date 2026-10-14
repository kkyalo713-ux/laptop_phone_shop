// js/firebase.js — connects the site to your Firebase project

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// PASTE YOUR CONFIG FROM FIREBASE BELOW ↓
const firebaseConfig = {
  apiKey: "AIzaSyBqc_N9QdCUF8w4zuFFzNxTmeaBY84g8e4",
  authDomain: "laptop-phone-website.firebaseapp.com",
  projectId: "laptop-phone-website",
  storageBucket: "laptop-phone-website.firebasestorage.app",
  messagingSenderId: "680099528964",
  appId: "1:680099528964:web:adba972ca1e11643f0d051"
};
// PASTE YOUR CONFIG FROM FIREBASE ABOVE ↑

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, getDoc, addDoc, serverTimestamp };