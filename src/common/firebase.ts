import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvaVpp63pkk3Q_nbYddC3DQkWXUBgNqvs',
  authDomain: 'bounce-5c8eb.firebaseapp.com',
  projectId: 'bounce-5c8eb',
  storageBucket: 'bounce-5c8eb.appspot.com',
  messagingSenderId: '381288365715',
  appId: '1:381288365715:web:5845ebe542985cc4575766',
};

const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
