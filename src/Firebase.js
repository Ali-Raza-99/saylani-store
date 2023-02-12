import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBbN6FRiVasa2DNNIS4zUCO7JNZAGZ0Ldo",
  authDomain: "saylani-store-999.firebaseapp.com",
  projectId: "saylani-store-999",
  storageBucket: "saylani-store-999.appspot.com",
  messagingSenderId: "236382141948",
  appId: "1:236382141948:web:2d37791b2625c7536c4679",
  measurementId: "G-8KP2D4ZFSG",
  databaseURL :"https://saylani-store-999-default-rtdb.firebaseio.com",

};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {app};