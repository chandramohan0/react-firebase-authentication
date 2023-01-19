import {getAuth} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBNlB1BwD0vmo52hWD1Ic5KF92n8nLspqQ",
    authDomain: "react-firebase-auth-learning.firebaseapp.com",
    projectId: "react-firebase-auth-learning",
    storageBucket: "react-firebase-auth-learning.appspot.com",
    messagingSenderId: "917251126082",
    appId: "1:917251126082:web:0491526b60718966168edb",
    measurementId: "G-B23T0KJHFF"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
