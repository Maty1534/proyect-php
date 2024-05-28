// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance"; // Importa el SDK de Performance

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqvD_lzBYnrr1Ge5qWd-cWUYM03nYbVh4",
  authDomain: "proyect-php-1534.firebaseapp.com",
  databaseURL: "https://proyect-php-1534-default-rtdb.firebaseio.com",
  projectId: "proyect-php-1534",
  storageBucket: "proyect-php-1534.appspot.com",
  messagingSenderId: "637090428583",
  appId: "1:637090428583:web:6466d87dd1c601525ecd82",
  measurementId: "G-DMM2LLTEBD",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

document.addEventListener("DOMContentLoaded", function () {
  const loadEl = document.querySelector("#load");

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
