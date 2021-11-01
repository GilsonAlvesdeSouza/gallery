import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINSENDID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const firebaseAPP = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseAPP);


// apiKey: "AIzaSyDlv2Ixk_0LxvoKfjYKog226wj1kkpRYi8",
// authDomain: "d5reactgallery-6ce97.firebaseapp.com",
// projectId: "d5reactgallery-6ce97",
// storageBucket: "d5reactgallery-6ce97.appspot.com",
// messagingSenderId: "781248421700",
// appId: "1:781248421700:web:8aea3af0068cd88ea84111"
