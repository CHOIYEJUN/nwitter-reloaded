// Project: Nwitter
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyD7lqJz3o8yGCb7YkE52J2Z1CiLMKfNZgg",
    authDomain: "nwitterclone-913be.firebaseapp.com",
    projectId: "nwitterclone-913be",
    storageBucket: "nwitterclone-913be.appspot.com",
    messagingSenderId: "78669749300",
    appId: "1:78669749300:web:e8fca987252abf05f33e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const DBservice = getFirestore();
export const storageService = getStorage();

