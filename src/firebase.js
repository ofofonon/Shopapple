import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCHLPeH_fuOMUK0W3mMcmxwp3J68xOh9FY",
  authDomain: "shopapple-e90e0.firebaseapp.com",
  projectId: "shopapple-e90e0",
  storageBucket: "shopapple-e90e0.firebasestorage.app",
  messagingSenderId: "416243558199",
  appId: "1:416243558199:web:461945c4925fe7b2d1dcb2",
  
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)