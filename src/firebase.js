// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBS2YFCSUESLW6DmDOSPmZidCKD5nF55c",
  authDomain: "atgworld-abhishree.firebaseapp.com",
  projectId: "atgworld-abhishree",
  storageBucket: "atgworld-abhishree.appspot.com",
  messagingSenderId: "321747434932",
  appId: "1:321747434932:web:72aab50c61ad514c6646e1",
  measurementId: "G-QZFTXRK9TS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
