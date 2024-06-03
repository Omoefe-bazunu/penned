
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAe-u8YgYNF8ZMf9zkS5hO5X_x_hAyd3xQ",
  authDomain: "penned-f74c9.firebaseapp.com",
  projectId: "penned-f74c9",
  storageBucket: "gs://penned-f74c9.appspot.com",
  messagingSenderId: "301507151490",
  appId: "1:301507151490:web:c3f3c87ad92d29ffb8d69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

onAuthStateChanged(auth, (user) => {
  const loginBtn = document.querySelectorAll(".Login");
  const logoutBtn = document.querySelectorAll('.Logout')
  if (user) {
    console.log('LOGGED IN' )
    console.log(user)
    loginBtn.forEach(item => item.style.display = 'none')
    logoutBtn.forEach(item => item.style.display = 'block')
  } else {
    console.log('NO USER INFO - SIGNUP or LOGIN');
    loginBtn.forEach(item => item.style.display = 'block')
    logoutBtn.forEach(item => item.style.display = 'none')
  }
});


export { dbase, storage, auth, app as default };