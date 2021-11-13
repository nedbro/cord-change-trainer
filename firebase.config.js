// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAELgoVepkpU8iKMMa7R5-T60hssGf3BIs',
  authDomain: 'chord-change-trainer.firebaseapp.com',
  projectId: 'chord-change-trainer',
  storageBucket: 'chord-change-trainer.appspot.com',
  messagingSenderId: '824300373293',
  appId: '1:824300373293:web:b84a7f9a1e953cdc38bfa4',
  measurementId: 'G-5C7TS2KFF4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
