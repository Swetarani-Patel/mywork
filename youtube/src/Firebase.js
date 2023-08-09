import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBXBzgfRz6Vr-kxjf53xCwbZWDYhhWhiNg",
  authDomain: "ytube2-8f89d.firebaseapp.com",
  projectId: "ytube2-8f89d",
  storageBucket: "ytube2-8f89d.appspot.com",
  messagingSenderId: "588468728313",
  appId: "1:588468728313:web:fea81cf87d89e165660d28"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();