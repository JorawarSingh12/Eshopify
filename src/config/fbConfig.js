import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
export const firebaseConfig = {
    apiKey: "AIzaSyAMJDfRz0ENi8zXEXWpvOPMHC5Qzxt81wI",
    authDomain: "eshopify-9a78b.firebaseapp.com",
    databaseURL: "https://eshopify-9a78b.firebaseio.com",
    projectId: "eshopify-9a78b",
    storageBucket: "eshopify-9a78b.appspot.com",
    messagingSenderId: "401660446117",
    appId: "1:401660446117:web:1b52adaa5a50b1d87a944c",
    measurementId: "G-74QTTR2TGW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export  const storage=firebase.storage();
export default  firebase