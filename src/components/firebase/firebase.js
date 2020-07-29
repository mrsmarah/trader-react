import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyBP-GR2F2esV8Y-0yT21WgjrtuRLucBvlA',
  authDomain: 'trader401.firebaseapp.com',
  databaseURL: 'https://trader401.firebaseio.com',
  projectId: 'trader401',
  storageBucket: 'trader401.appspot.com',
  messagingSenderId: '314168147728',
  appId: '1:314168147728:web:9b1cd1149b6edc1c8f2f95',
  measurementId: 'G-8KQY4H9PEK',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
// firebase.analytics();
const storage = firebase.storage();

export  {
  storage, firebase as default
}