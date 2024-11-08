import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATU8cnE6dSLXD-0ttC3B6xeNTba-pLPa0",
  authDomain: "fb-desafio-03.firebaseapp.com",
  projectId: "fb-desafio-03",
  storageBucket: "fb-desafio-03.firebasestorage.app",
  messagingSenderId: "229094194818",
  appId: "1:229094194818:web:f531b92762a5e61c7dfe9b"
};

const app = initializeApp(firebaseConfig);

export default app;