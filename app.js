// 1️⃣ Firebase config
const firebaseConfig = {
  apiKey : "AIzaSyBQb-Pt4Wcwaco9J4Y_PtK8bllpucuRQkI" , 
  authDomain : "stock-buku-online.firebaseapp.com" , 
  projectId : "stok-buku-online" , 
  storageBucket : "stock-buku-online.firebasestorage.app" , 
  messageSenderId : "295061751750" , 
  appId : "1:295061751750:web:5e4fdbe68068f4603d54c7" , 

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 2️⃣ Toggle form login/register
document.addEventListener('DOMContentLoaded', () => {
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToRegister = document.getElementById('switch-to-register');

    if(switchToLogin) switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });

    if(switchToRegister) switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    });

    // 3️⃣ Register
    const regBtn = document.getElementById('register-btn');
    if(regBtn) regBtn.addEventListener('click', () => {
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-pass').value;

        if(email && password){
            auth.createUserWithEmailAndPassword(email, password)
            .then(() => alert("Register berhasil!"))
            .catch(err => alert(err.message));
        } else {
            alert("Isi email dan password!");
        }
    });

    // 4️⃣ Login
    const loginBtn = document.getElementById('login-btn');
    if(loginBtn) loginBtn.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value;

        if(email && password){
            auth.signInWithEmailAndPassword(email, password)
            .catch(err => alert(err.message));
        } else {
            alert("Isi email dan password!");
        }
    });

    // 5️⃣ Logout
    const logoutBtn = document.getElementById('logout-btn');
    if(logoutBtn) logoutBtn.addEventListener('click', () => auth.signOut());

    // 6️⃣ Tambah Buku
    const addBookBtn = document.getElementById('add-book-btn');
    if(addBookBtn) addBookBtn.addEventListener('click', () => {
        const title = document.getElementById('book-title').value.trim();
        const author = document.getElementById('book-author').value.trim();
        const stock = parseInt(document.getElementById('book-stock').value);

        if(title && author && !isNaN(stock)){
            db.collection("books").add({
                title,
                author,
                stock,
                user: auth.currentUser.email
            })
            .then(() => {
                document.getElementById('book-title').value = '';
                document.getElementById('book-author').value = '';
                document.getElementById('book-stock').value = '';
                loadBooks();
            })
            .catch(err => alert(err.message));
        } else {
            alert("Isi semua field dengan benar!");
        }
    });
});

// 7️⃣ Auth state & dashboard
auth.onAuthStateChanged(user => {
    if(user){
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
        loadBooks();
    } else {
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
    }
});

// 8️⃣ Load buku dari Firestore
function loadBooks(){
    const tbody = document.querySelector('#books-table tbody');
    tbody.innerHTML = '';

    db.collection("books")
      .where("user", "==", auth.currentUser.email)
      .get()
      .then(snapshot => {
          snapshot.forEach(doc => {
              const data = doc.data();
              const tr = document.createElement('tr');
              tr.innerHTML = `
                <td>${data.title}</td>
                <td>${data.author}</td>
                <td>${data.stock}</td>
                <td>
                  <button onclick="editBook('${doc.id}','${data.title}','${data.author}','${data.stock}')">Edit</button>
                  <button onclick="deleteBook('${doc.id}')">Hapus</button>
                </td>`;
              tbody.appendChild(tr);
          });
      });
}

// 9️⃣ Edit buku
function editBook(id, oldTitle, oldAuthor, oldStock){
    const newTitle = prompt("Judul baru:", oldTitle);
    const newAuthor = prompt("Pengarang baru:", oldAuthor);
    const newStock = prompt("Stok baru:", oldStock);

    if(newTitle && newAuthor && !isNaN(parseInt(newStock))){
        db.collection("books").doc(id).update({
            title: newTitle,
            author: newAuthor,
            stock: parseInt(newStock)
        }).then(loadBooks());
    } else {
        alert("Data tidak valid!");
    }
}

// 10️⃣ Hapus buku
function deleteBook(id){
    if(confirm("Yakin ingin hapus buku ini?")){
        db.collection("books").doc(id).delete().then(loadBooks());
    }
}
