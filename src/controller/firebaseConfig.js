import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// definir el nombre y poder llenar estos campos
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
