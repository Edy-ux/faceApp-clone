import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB0ZRTP7I9bucOmKSXxnULa-Cv-0Rikm74",
  authDomain: "facebook-clone-sim.firebaseapp.com",
  projectId: "facebook-clone-sim",
  storageBucket: "facebook-clone-sim.appspot.com",
  messagingSenderId: "862179884361",
  appId: "1:862179884361:web:404da0bdf51eaeff98ae98"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();
const auth = app.auth();

export {db, storage };
