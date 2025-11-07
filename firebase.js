import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = { 
  apiKey : "AIzaSyBQb-Pt4Wcwaco9J4Y_PtK8bllpucuRQkI" , 
  authDomain : "stock-buku-online.firebaseapp.com" , 
  projectId : "stok-buku-online" , 
  storageBucket : "stock-buku-online.firebasestorage.app" , 
  messageSenderId : "295061751750" , 
  appId : "1:295061751750:web:5e4fdbe68068f4603d54c7" , 

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
