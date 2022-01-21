import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAnC5c6Jc_A0vKGMLVnNi90nqWVWB-p5zs",
    authDomain: "ecomm-34e12.firebaseapp.com",
    projectId: "ecomm-34e12",
    storageBucket: "ecomm-34e12.appspot.com",
    messagingSenderId: "348359719715",
    appId: "1:348359719715:web:b92bbb54a4419f3f312a96"
  };

const firebaseApp = firebase.initialize(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.authg();

export {db, auth};