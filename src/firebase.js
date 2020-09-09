import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDNFMF7mLysNZYPqqBb_r3bbv9q0nOsoIw",
    authDomain: "clone-5153f.firebaseapp.com",
    databaseURL: "https://clone-5153f.firebaseio.com",
    projectId: "clone-5153f",
    storageBucket: "clone-5153f.appspot.com",
    messagingSenderId: "145116727028",
    appId: "1:145116727028:web:84c7b96b14e88cf4e5c0a1",
    measurementId: "G-HM2LZ8GBLY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };