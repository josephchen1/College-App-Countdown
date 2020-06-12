import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDokjP1_2DxO9c-1XYoUjCy_C_Uo0IbeqI',
  authDomain: 'college-app-countdown.firebaseapp.com',
  databaseURL: 'https://college-app-countdown.firebaseio.com',
  projectId: 'college-app-countdown',
  storageBucket: 'college-app-countdown.appspot.com',
  messagingSenderId: '455316500256',
  appId: '1:455316500256:web:976b41ee9143ec078af145',
  measurementId: 'G-L9QY2TS4VZ'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebaseApp.firestore()
// firestore.settings({ timestampsInSnapshots: true })
// const firebaseAnalytics = firebase.analytics()

export default firestore

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src='https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js'></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src='https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js'></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: 'AIzaSyDokjP1_2DxO9c-1XYoUjCy_C_Uo0IbeqI',
//     authDomain: 'college-app-countdown.firebaseapp.com',
//     databaseURL: 'https://college-app-countdown.firebaseio.com',
//     projectId: 'college-app-countdown',
//     storageBucket: 'college-app-countdown.appspot.com',
//     messagingSenderId: '455316500256',
//     appId: '1:455316500256:web:976b41ee9143ec078af145',
//     measurementId: 'G-L9QY2TS4VZ'
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
