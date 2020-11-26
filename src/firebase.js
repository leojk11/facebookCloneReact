import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDL3NnOg_KenD5Ukzbj02qY5qQdLHZjvXM",
  authDomain: "facebook-clone-deb6b.firebaseapp.com",
  databaseURL: "https://facebook-clone-deb6b.firebaseio.com",
  projectId: "facebook-clone-deb6b",
  storageBucket: "facebook-clone-deb6b.appspot.com",
  messagingSenderId: "386787745031",
  appId: "1:386787745031:web:30903b6c1cd81d74ef79a2",
  measurementId: "G-R33XCFFNLK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;