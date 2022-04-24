import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFACAHYMUNOMg05TlDPlYY4mtQAuBtbyk",
    authDomain: "clone-5f4bd.firebaseapp.com",
    projectId: "clone-5f4bd",
    storageBucket: "clone-5f4bd.appspot.com",
    messagingSenderId: "139428381957",
    appId: "1:139428381957:web:459a85b33761261f98e36c",
    measurementId: "G-ZBCZKEK5GP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };