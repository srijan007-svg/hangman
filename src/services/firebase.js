// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBEk1spTABtbjJCkjqyiyK1gtvPg6qIGWw",
  authDomain: "hangmangamessss.firebaseapp.com",
  projectId: "hangmangamessss",
  storageBucket: "hangmangamessss.appspot.com",
  messagingSenderId: "491962113083",
  appId: "1:491962113083:web:3eb5ca4bc492dab462d01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const logoutUser = () => signOut(auth);

const addData = (tableName, data) => addDoc(collection(db, tableName), data);

const getDataWhere = (tableName, column, operator, value) =>getDocs(query(collection(db, tableName), where(column, operator, value)));

export { registerUser, loginUser, logoutUser, addData ,getDataWhere};
export default app;
