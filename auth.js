import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const btn = document.getElementById('login-register-btn');
const logoutBtn = document.getElementById('logout-btn');

btn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passInput.value;

    if (!email || !password) return alert("Isi email dan password!");

    // Coba login dulu
    signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log("Login berhasil"))
    .catch((error) => {
        if (error.code === 'auth/user-not-found') {
            // Jika user belum ada → register
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => alert("Registrasi berhasil, langsung login!"))
            .catch((err) => alert(err.message));
        } else {
            alert(error.message);
        }
    });
});

// Logout
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
