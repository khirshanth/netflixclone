import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBYeD_eYdJ2TlD0zxBMEZzAnxfCCYYPKFA",
    authDomain: "netflix-clone-3b88e.firebaseapp.com",
    databaseURL: "https://netflix-clone-3b88e.firebaseio.com",
    projectId: "netflix-clone-3b88e",
    storageBucket: "netflix-clone-3b88e.appspot.com",
    messagingSenderId: "695577069308",
    appId: "1:695577069308:web:2d3a6fd5a6875a9f5bb979",
    measurementId: "G-CKK37M7HE0"
  };

  const fire =firebase.initializeApp(firebaseConfig)

  export  default fire