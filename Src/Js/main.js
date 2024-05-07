// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Actualiza la versión según sea necesario
const firebaseVersion = "13.8.0";

// Carga dinámica de scripts de Firebase
firebaseScripts.forEach((script) => {
  const scriptTag = document.createElement("script");
  scriptTag.defer = true;
  scriptTag.src = `/__/firebase/${firebaseVersion}/${script}`;
  document.head.appendChild(scriptTag);
});

// Inicialización de Firebase
const initScript = document.createElement("script");
initScript.defer = true;
initScript.src = `/__/firebase/init.js?useEmulator=true`;
document.head.appendChild(initScript);

// Scripts de Firebase
const firebaseScripts = [
  "firebase-app-compat.js",
  "firebase-auth-compat.js",
  "firebase-database-compat.js",
  "firebase-firestore-compat.js",
  "firebase-functions-compat.js",
  "firebase-messaging-compat.js",
  "firebase-storage-compat.js",
  "firebase-analytics-compat.js",
  "firebase-remote-config-compat.js",
  "firebase-performance-compat.js",
];

document.addEventListener("DOMContentLoaded", function () {
  const loadEl = document.querySelector("#load");
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
  firebase.performance(); // call to activate
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = [
      "auth",
      "database",
      "firestore",
      "functions",
      "messaging",
      "storage",
      "analytics",
      "remoteConfig",
      "performance",
    ].filter((feature) => typeof app[feature] === "function");
    loadEl.textContent = `Firebase SDK loaded with ${features.join(", ")}`;
    console.log(`Firebase SDK loaded with ${features.join(", ")}`);
  } catch (e) {
    console.error(e);
    loadEl.textContent = "Error loading the Firebase SDK, check the console.";
  }
});
