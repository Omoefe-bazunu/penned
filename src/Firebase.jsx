
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { SetUpUI } from "./components/SetUpUI";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAe-u8YgYNF8ZMf9zkS5hO5X_x_hAyd3xQ",
  authDomain: "penned-f74c9.firebaseapp.com",
  projectId: "penned-f74c9",
  storageBucket: "gs://penned-f74c9.appspot.com",
  messagingSenderId: "301507151490",
  appId: "1:301507151490:web:c3f3c87ad92d29ffb8d69b",
  measurementId: "G-BD4CD4V843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('LOGGED IN' )
    console.log(user)
    SetUpUI(user)
  } else {
    console.log('NO USER INFO - SIGNUP or LOGIN');
  }
});


export { dbase, storage, auth, analytics, app as default };