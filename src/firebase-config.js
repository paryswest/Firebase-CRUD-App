import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAaWg7g3uusGTwseZ73QJZ29A8fKKO3igw',
  authDomain: 'react-firebasev2-b0278.firebaseapp.com',
  projectId: 'react-firebasev2-b0278',
  storageBucket: 'react-firebasev2-b0278.appspot.com',
  messagingSenderId: '86001241933',
  appId: '1:86001241933:web:d25b1c02244a1601867104',
  measurementId: 'G-0MFN38G037',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
