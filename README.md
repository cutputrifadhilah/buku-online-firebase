# buku-online-firebase
Sistem login aman menggunakan firebase authentication dan firestore dengan hosting cloud

# 📚 Buku Online – Sistem Login Aman dengan Firebase  
**Repository:** [cutputrifadhilah/buku-online-firebase](https://github.com/cutputrifadhilah/buku-online-firebase)  
**Deskripsi:** Sistem login aman menggunakan Firebase Authentication dan Firestore dengan hosting cloud.

---

## 🧾 Daftar Isi  
1. [Latar Belakang](#latar-belakang)  
2. [Tujuan & Ruang Lingkup](#tujuan-–-ruang-lingkup)  
3. [Arsitektur Sistem](#arsitektur-sistem)  
4. [Teknologi & Layanan Cloud](#teknologi-–-layanan-cloud)  
5. [Struktur Folder Proyek](#struktur-folder-proyek)  
6. [Instalasi & Deployment](#instalasi-–-deployment)  
7. [Konfigurasi Keamanan](#konfigurasi-keamanan)  
8. [Pengujian & Validasi](#pengujian-–-validasi)  
9. [Tantangan & Solusi](#tantangan-–-solusi)  
10. [Kesimpulan](#kesimpulan)  
11. [Kontributor](#kontributor)  
12. [License](#license)

---

## 🔍 Latar Belakang  
Di era digital sekarang, pengelolaan buku atau koleksi secara daring semakin populer. Namun, keamanan akses (login, hak akses) sering menjadi celah. Proyek ini hadir untuk menyediakan solusi **sistem buku online** yang memiliki mekanisme autentikasi aman melalui Firebase Authentication dan penyimpanan data dinamis melalui Cloud Firestore, lalu di-hosting di lingkungan cloud agar mudah diakses.

## 🎯 Tujuan & Ruang Lingkup  
**Tujuan:**  
- Membangun sistem login yang aman dan sederhana untuk pengguna (user)  
- Menyediakan backend minimal tanpa server manual (server-less) menggunakan layanan cloud  
- Menyediakan antarmuka web yang responsif untuk mengakses koleksi buku  

**Ruang Lingkup:**  
- Modul login/register menggunakan email/password  
- Penyimpanan data pengguna dan buku di Firestore  
- Hosting frontend di cloud (misalnya Firebase Hosting)  
- Dokumentasi lengkap untuk repositori (kode, konfigurasi, panduan)  
- Tidak mencakup modul mobile, pembayaran, atau multi-tenant kompleks  

---

## 🏗 Arsitektur Sistem  
> Tambahkan **diagram arsitektur** jika ada (contoh: `docs/DiagramArsitektur.png`).  
Secara garis besar:  
- Frontend → Web (HTML/CSS/JavaScript)  
- Autentikasi → Firebase Authentication  
- Database → Cloud Firestore  
- Hosting → Firebase Hosting  
- Keamanan → Aturan Firestore + Validasi frontend  

---

## 🛠 Teknologi & Layanan Cloud  
- **Frontend:** HTML, CSS, JavaScript (bisa ditambahkan framework bila digunakan)  
- **Firebase Authentication:** Pengelolaan login/register user  
- **Cloud Firestore:** Basis data realtime/NoSQL untuk pengguna & buku  
- **Firebase Hosting:** Hosting statis aplikasi web  
- **Git & GitHub:** Versi kontrol kode dan dokumentasi proyek  

---

## 📁 Struktur Folder Proyek


buku-online-firebase/
├── index.html            # Halaman utama / login
├── tambah-buku.html      # Form tambah buku
├── main.js               # Logika aplikasi (CRUD)
├── firebaseConfig.js     # Konfigurasi koneksi Firebase
├── style.css             # Tampilan halaman
├── firebase.json         # Konfigurasi hosting Firebase
└── README.md             # Dokumentasi proyek
