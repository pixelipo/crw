import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC6Z9gz49iXfnoEtmoe4H61w5SQX9DqFe0",
    authDomain: "crwn-pixelipo.firebaseapp.com",
    projectId: "crwn-pixelipo",
    storageBucket: "crwn-pixelipo.appspot.com",
    messagingSenderId: "473312438679",
    appId: "1:473312438679:web:4375e1b747fdee72c4bcd2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
