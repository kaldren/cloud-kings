import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvSwmAaw_MdkSsyo4O2sWckvUD_X1mm64",
    authDomain: "cloud-kings.firebaseapp.com",
    projectId: "cloud-kings",
    storageBucket: "cloud-kings.appspot.com",
    messagingSenderId: "576397948404",
    appId: "1:576397948404:web:f0f4d60baa28e41862b5a1",
    measurementId: "G-YFLLTW65M8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { db, auth };