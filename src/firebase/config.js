// src/firebase/config.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQJyLLwYBkgLUXe8f4whG5NPrz7xKoHDo",
    authDomain: "evogym-1b999.firebaseapp.com",
    projectId: "evogym-1b999",
    storageBucket: "evogym-1b999.appspot.com",
    messagingSenderId: "892507152500",
    appId: "1:892507152500:web:b30082f118f0465d2f3121",
    measurementId: "G-5VXZSSFPW5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();