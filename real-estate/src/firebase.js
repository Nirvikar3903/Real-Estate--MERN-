// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY , // api secured in env
  authDomain: "raghav-estate-fe346.firebaseapp.com",
  projectId: "raghav-estate-fe346",
  storageBucket: "raghav-estate-fe346.appspot.com",
  messagingSenderId: "726549890248",
  appId: "1:726549890248:web:3d0a9ee6c189635fd4d1fd",
  measurementId: "G-WMVQ9ZNJ0Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);