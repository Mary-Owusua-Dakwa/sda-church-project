// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBC03H2iiJOxExEz0oQslKMYhEDfnvfTo0",
  authDomain: "sda-church-585d2.firebaseapp.com",
  databaseURL: "https://sda-church-585d2-default-rtdb.firebaseio.com",
  projectId: "sda-church-585d2",
  storageBucket: "sda-church-585d2.firebasestorage.app",
  messagingSenderId: "270851299871",
  appId: "1:270851299871:web:2dce8b6ebdbb402e72932a",
  measurementId: "G-5MSDZ4J40H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
