import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBkSH3M-FVJruc6_Vt0fR38DJ6KEJe1kdw",
    authDomain: "to-do-app-c5de8.firebaseapp.com",
    projectId: "to-do-app-c5de8",
    storageBucket: "to-do-app-c5de8.appspot.com",
    messagingSenderId: "624511843546",
    appId: "1:624511843546:web:fe511878a80d89afb4b9e3",
    measurementId: "G-2XNN1QDWN0"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };

