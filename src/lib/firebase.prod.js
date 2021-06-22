import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import {seedDatabase} from "../seed";

const config = {
  apiKey: "AIzaSyBuVW2UAffq7eVCVS9XIxhM9qvTxbvsetw",
  authDomain: "netflix-clone-1f2e8.firebaseapp.com",
  projectId: "netflix-clone-1f2e8",
  storageBucket: "netflix-clone-1f2e8.appspot.com",
  messagingSenderId: "715211067071",
  appId: "1:715211067071:web:89def70d8368175ffdc00a"
};

const firebase = Firebase.initializeApp(config);


export {firebase};