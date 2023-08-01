import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA6qXc22i7XxDmRad4vT6mcPRakOjpsyLM",
  authDomain: "tube-you-clone.firebaseapp.com",
  projectId: "tube-you-clone",
  storageBucket: "tube-you-clone.appspot.com",
  messagingSenderId: "815894958989",
  appId: "1:815894958989:web:593efc70657666588d63c4"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();
  