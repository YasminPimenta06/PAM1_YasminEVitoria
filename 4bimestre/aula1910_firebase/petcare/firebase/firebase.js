import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsWPj9cbyNcal4bIxUCa4tF-GfeBIx5h8",
  authDomain: "petcare-81ce6.firebaseapp.com",
  projectId: "petcare-81ce6",
  storageBucket: "petcare-81ce6.firebasestorage.app",
  messagingSenderId: "28595915800",
  appId: "1:28595915800:web:9f3b121cb580951d49476d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);