import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK8_7Y1FSLcrgovlQB9_Jdv9SP-7daieo",
  authDomain: "disney-clone-ffa25.firebaseapp.com",
  projectId: "disney-clone-ffa25",
  storageBucket: "disney-clone-ffa25.appspot.com",
  messagingSenderId: "747623530125",
  appId: "1:747623530125:web:10d013678173f574a86cc4",
  measurementId: "G-N0C8SJZV2N",
});


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, storage, provider};
 export default db;