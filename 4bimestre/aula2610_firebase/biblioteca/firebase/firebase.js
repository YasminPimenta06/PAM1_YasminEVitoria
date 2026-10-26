
import { initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAs5kUDM98gPxb7SpnCYQhQ60XNBnRvbf0",
  authDomain: "teste-ee212.firebaseapp.com",
  projectId: "teste-ee212",
  storageBucket: "teste-ee212.firebasestorage.app",
  messagingSenderId: "613990669714",
  appId: "1:613990669714:web:9bd353fffac4a30caeb54b"
};

const app = initializeApp (firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);