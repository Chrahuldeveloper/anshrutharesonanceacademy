import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBccy6DX3yWCyfYZSP_avIsjp6pTSSnCaI",
  authDomain: "anshrutha-academy.firebaseapp.com",
  projectId: "anshrutha-academy",
  storageBucket: "anshrutha-academy.firebasestorage.app",
  messagingSenderId: "229272759710",
  appId: "1:229272759710:web:357c933e966fbea9a7ba8f",
  measurementId: "G-JEH94P18PS",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
