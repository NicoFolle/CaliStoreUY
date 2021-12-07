// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgPCs09Zje1-iOwSShu1wzimqL3Rg4b0Y",
  authDomain: "calistoreuy-0812.firebaseapp.com",
  projectId: "calistoreuy-0812",
  storageBucket: "calistoreuy-0812.appspot.com",
  messagingSenderId: "536343788339",
  appId: "1:536343788339:web:f436ebab43738868455c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)