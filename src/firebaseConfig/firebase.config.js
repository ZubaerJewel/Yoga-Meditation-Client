// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyCIzLJ98M6ZVrJHjftU_9v7_5FhLth1_FA",

  authDomain: "yoga-meditation-f2f5a.firebaseapp.com",

  projectId: "yoga-meditation-f2f5a",

  storageBucket: "yoga-meditation-f2f5a.appspot.com",

  messagingSenderId: "742895130262",

  appId: "1:742895130262:web:28063ddd8119b2e94994b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;