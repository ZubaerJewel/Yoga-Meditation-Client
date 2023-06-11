// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };
const firebaseConfig = {

  apiKey: "AIzaSyCIzLJ98M6ZVrJHjftU_9v7_5FhLth1_FA",

  authDomain: "yoga-meditation-f2f5a.firebaseapp.com",

  projectId: "yoga-meditation-f2f5a",

  storageBucket: "yoga-meditation-f2f5a.appspot.com",

  messagingSenderId: "742895130262",

  appId: "1:742895130262:web:28063ddd8119b2e94994b7"

};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);