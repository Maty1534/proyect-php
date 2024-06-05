// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance"; // Importa el SDK de Performance
// import "../Styles/styles.css";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCptjpK6r7eW8D_ZeesG17hvIv89dQNNYM",
  authDomain: "project-art-sell.firebaseapp.com",
  projectId: "project-art-sell",
  storageBucket: "project-art-sell.appspot.com",
  messagingSenderId: "528489876183",
  appId: "1:528489876183:web:4c8f590bd09be7b2a93e92",
  measurementId: "G-89RJ7R5XNF",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

// Información para este proyecto en firebase:

// SDK de JavaScript modular:
// https://firebase.google.com/docs/web/learn-more?hl=es&authuser=0&_gl=1*1k7j5ec*_ga*NTI3OTM5MjgxLjE3MTU4MjQ2MDI.*_ga_CW55HF8NVT*MTcxNzU0ODE3NS4zMS4xLjE3MTc1NDg3MzMuMjkuMC4w#modular-version

// Primeros Pasos:
// https://firebase.google.com/docs/web/setup?hl=es&authuser=0&_gl=1*1k7j5ec*_ga*NTI3OTM5MjgxLjE3MTU4MjQ2MDI.*_ga_CW55HF8NVT*MTcxNzU0ODE3NS4zMS4xLjE3MTc1NDg3MzMuMjkuMC4w

// Referencia de la API del SDK web:
// https://firebase.google.com/docs/reference/js/?hl=es&authuser=0&_gl=1*1k7j5ec*_ga*NTI3OTM5MjgxLjE3MTU4MjQ2MDI.*_ga_CW55HF8NVT*MTcxNzU0ODE3NS4zMS4xLjE3MTc1NDg3MzMuMjkuMC4w

// Muestras:
// https://firebase.google.com/docs/samples/?hl=es&authuser=0&_gl=1*zt1459*_ga*NTI3OTM5MjgxLjE3MTU4MjQ2MDI.*_ga_CW55HF8NVT*MTcxNzU0ODE3NS4zMS4xLjE3MTc1NDg3MzMuMjkuMC4w

// Hosting:
// https://firebase.google.com/docs/hosting/quickstart?hl=es&authuser=0&_gl=1*1rliz1j*_ga*NTI3OTM5MjgxLjE3MTU4MjQ2MDI.*_ga_CW55HF8NVT*MTcxNzU0ODE3NS4zMS4xLjE3MTc1NDg3MzMuMjkuMC4w

// No se si es necesario estas lineas.
// document.addEventListener("DOMContentLoaded", function () {
//   const loadEl = document.querySelector("#load");

//   try {
//     let app = firebase.app();
//     let features = [
//       "auth",
//       "database",
//       "firestore",
//       "functions",
//       "messaging",
//       "storage",
//       "analytics",
//       "remoteConfig",
//       "performance",
//     ].filter((feature) => typeof app[feature] === "function");
//     loadEl.textContent = `Firebase SDK loaded with ${features.join(", ")}`;
//     console.log(`Firebase SDK loaded with ${features.join(", ")}`);
//   } catch (e) {
//     console.error(e);
//     loadEl.textContent = "Error loading the Firebase SDK, check the console.";
//   }
// });

/*
 <script>
      document.addEventListener('DOMContentLoaded', function() {
        const loadEl = document.querySelector('#load');
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.firestore().doc('/foo/bar').get().then(() => { });
        // firebase.functions().httpsCallable('yourFunction')().then(() => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        // firebase.analytics(); // call to activate
        // firebase.analytics().logEvent('tutorial_completed');
        // firebase.performance(); // call to activate
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

        try {
          let app = firebase.app();
          let features = [
            'auth', 
            'database', 
            'firestore',
            'functions',
            'messaging', 
            'storage', 
            'analytics', 
            'remoteConfig',
            'performance',
          ].filter(feature => typeof app[feature] === 'function');
          loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
        }
      });
    </script>
*/

/*
 <!-- update the version number as needed -->
    <script defer src="/__/firebase/10.12.2/firebase-app-compat.js"></script>
    <!-- include only the Firebase features as you need -->
    <script defer src="/__/firebase/10.12.2/firebase-auth-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-database-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-firestore-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-functions-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-messaging-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-storage-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-analytics-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-remote-config-compat.js"></script>
    <script
      defer
      src="/__/firebase/10.12.2/firebase-performance-compat.js"></script>
    <!-- 
      initialize the SDK after all desired features are loaded, set useEmulator to false
      to avoid connecting the SDK to running emulators.
    -->
    <script defer src="/__/firebase/init.js?useEmulator=true"></script>
*/
