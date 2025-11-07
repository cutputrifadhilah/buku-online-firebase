import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', () => {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Registrasi berhasil! Silahkan login.");
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        })
        .catch((error) => alert(error.message));
});

// Switch forms
document.getElementById('switch-to-login').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('switch-to-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});
