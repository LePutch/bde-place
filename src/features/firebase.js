// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZQd2uMSnyDBnI__k7_TAGLks2RwW801A",
  authDomain: "bdeplace-c4edd.firebaseapp.com",
  databaseURL: "https://bdeplace-c4edd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bdeplace-c4edd",
  storageBucket: "bdeplace-c4edd.appspot.com",
  messagingSenderId: "923337573641",
  appId: "1:923337573641:web:55e34db3dca33f37867fd8",
  measurementId: "G-Z1TXJ0C6Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);