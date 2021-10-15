// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCy7zxincFZNYzXolRmCqFEemZVdsLeCOY',
  authDomain: 'cord-change-trainer.firebaseapp.com',
  projectId: 'cord-change-trainer',
  storageBucket: 'cord-change-trainer.appspot.com',
  messagingSenderId: '660012955986',
  appId: '1:660012955986:web:8cd6fc7454cc99995ea28b',
  measurementId: 'G-89Q66P7E8N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
