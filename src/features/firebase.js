import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

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

initializeApp(firebaseConfig);

const db = getDatabase();
const pixelsRef = ref(db, 'pixels');

export const listenForNewSnapshot = (updateSnapshot) => {
  onValue(pixelsRef, (snapshot) => {
    const data = snapshot.val();
    updateSnapshot(data);
  });
}

export const writePixel = (pixelId, color) => {
  set(ref(db, 'pixels/' + pixelId), {
    color
  });
}