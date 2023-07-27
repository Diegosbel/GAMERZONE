
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbURBbHCg6BGhiL6uXMBf2DOuDgsbjzMA",
  authDomain: "gamerzone-34e26.firebaseapp.com",
  projectId: "gamerzone-34e26",
  storageBucket: "gamerzone-34e26.appspot.com",
  messagingSenderId: "757198854462",
  appId: "1:757198854462:web:e3dfb579df6da2c7bdf46f",
  measurementId: "G-56P3TDWDMK"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)