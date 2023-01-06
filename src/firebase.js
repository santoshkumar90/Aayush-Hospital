// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuIK8s6NZC16jB42DP011w0hi3QM2BesU",
  authDomain: "crud-application-9d73f.firebaseapp.com",
  databaseURL: "https://crud-application-9d73f-default-rtdb.firebaseio.com",
  projectId: "crud-application-9d73f",
  storageBucket: "crud-application-9d73f.appspot.com",
  messagingSenderId: "812193572997",
  appId: "1:812193572997:web:04748af4ef109017df21ec",
  measurementId: "G-29W44WKT2E"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);