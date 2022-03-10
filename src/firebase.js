import  { initializeApp } from 'firebase/app';
import 'firebase/auth';

const initializeAuthentication = initializeApp({
  apiKey: "AIzaSyBGpo_ct2jOq-sg5_nytpMIrp78NbEDpzs",
  authDomain: "lsexchange-25610.firebaseapp.com",
  databaseURL: "https://lsexchange-25610-default-rtdb.firebaseio.com",
  projectId: "lsexchange-25610",
  storageBucket: "lsexchange-25610.appspot.com",
  messagingSenderId: "77268061464",
  appId: "1:77268061464:web:1a54d57c21d3d027c2626d",
  measurementId: "G-YHH9D9GG44"
})


export default initializeAuthentication;
