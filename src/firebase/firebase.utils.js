import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const CONFIG = {
  apiKey: "AIzaSyBtpbUWrcc8D9j9jk6GBwqRUmVGafiQRu4",
  authDomain: "e-commerce-db-46c1a.firebaseapp.com",
  projectId: "e-commerce-db-46c1a",
  storageBucket: "e-commerce-db-46c1a.appspot.com",
  messagingSenderId: "222166117870",
  appId: "1:222166117870:web:fd662c376e72a58af5b2ff",
  measurementId: "G-2Z79HVDM7V",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (exception) {
      console.log("error creating user", exception.message);
    }
  }

  return userRef;
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
