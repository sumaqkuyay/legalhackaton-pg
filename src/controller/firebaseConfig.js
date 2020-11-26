import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// definir el nombre y poder llenar estos campos
const firebaseConfig = {
  apiKey: 'AIzaSyAZO1QFQiE9A0JBSPFctH49CXDdhwbAqh8',
  authDomain: 'legalhackathonpg-83b1a.firebaseapp.com',
  databaseURL: 'https://legalhackathonpg-83b1a.firebaseio.com',
  projectId: 'legalhackathonpg-83b1a',
  storageBucket: 'legalhackathonpg-83b1a.appspot.com',
  messagingSenderId: '84364898527',
  appId: '1:84364898527:web:8f9693e7162cd37dbbf96a',
  measurementId: 'G-8QKTBDH83K',

};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
