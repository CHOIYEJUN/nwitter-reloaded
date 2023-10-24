// Project: Nwitter
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAxL0AiGTnM1e_M3P60-7BVAwewpqLGvuY",
    authDomain: "nwitter-d91ae.firebaseapp.com",
    projectId: "nwitter-d91ae",
    storageBucket: "nwitter-d91ae.appspot.com",
    messagingSenderId: "112349353378",
    appId: "1:112349353378:web:a0c72e36efdd7548234efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const DBservice = getFirestore();
export const storageService = getStorage();

