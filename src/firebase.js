import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAPoOXzYs5b3eRzU8bnk7w02EWOwfde0Qs",
  authDomain: "crown-shopping-5392d.firebaseapp.com",
  projectId: "crown-shopping-5392d",
  storageBucket: "crown-shopping-5392d.appspot.com",
  messagingSenderId: "666993202474",
  appId: "1:666993202474:web:bb36754d72843381a57a53",
  measurementId: "G-XWB42PQG9D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
