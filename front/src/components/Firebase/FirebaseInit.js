// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAztBoqi4K2157vcork8Ev9MH9foM9wcyo",
  authDomain: "hillclimbracing2-8c3d6.firebaseapp.com",
  projectId: "hillclimbracing2-8c3d6",
  storageBucket: "hillclimbracing2-8c3d6.appspot.com",
  messagingSenderId: "567871798253",
  appId: "1:567871798253:web:b354e274972448932a85e4",
  measurementId: "G-GSVQGR8H1G",
  databaseURL: 'https://hillclimbracing2-8c3d6-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app)
export default app
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }