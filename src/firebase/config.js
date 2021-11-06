import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const {FIREBASE_API_KEY,APP_ID} = process.env;
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "firegram-f0c20.firebaseapp.com",
  projectId: "firegram-f0c20",
  storageBucket: "firegram-f0c20.appspot.com",
  messagingSenderId: "130605062589",
  appId: APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };