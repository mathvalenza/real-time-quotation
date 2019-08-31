import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDeLhKxIzmfYwWVeCvSac2P7Y_SbmCyOPE',
  authDomain: 'real-time-quotation.firebaseapp.com',
  databaseURL: 'https://real-time-quotation.firebaseio.com',
  projectId: 'real-time-quotation',
  storageBucket: 'real-time-quotation.appspot.com',
  messagingSenderId: '384991889616',
  appId: '1:384991889616:web:7801a7a00b4c81d7',
};

firebase.initializeApp(firebaseConfig);
