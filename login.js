import { auth } from './firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-pass').value;

    if (!email || !password) return alert("Isi email dan password!");

    console.log("Login attempt:", email, password); // debug

    signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login berhasil!"))
        .catch((error) => alert(error.message));
});

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => alert("Logout berhasil"));
});

// Auto detect login
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
    } else {
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
    }
});
