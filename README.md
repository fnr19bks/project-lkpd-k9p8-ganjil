# 🎮 Petualangan E-Portofolio Digital

**LKPD Interaktif — E-Portofolio & Showcase Digital**
SMP Negeri 19 Kota Bekasi · Informatika Kelas IX / Fase D · Pertemuan 8

![Screenshot](./assets/screenshot.png)

---

## 📚 Deskripsi

Game edukasi interaktif berbasis web yang menjadi LKPD digital untuk materi **E-Portofolio dan Showcase Digital**. Terdiri dari 6 level permainan yang mengajarkan konsep E-Portofolio, CMS (Content Management System), Canva, Cloud, dan Etika Keamanan Digital.

Dibangun dengan **HTML5 + CSS3 + Vanilla JavaScript** — tanpa framework berat. Dapat dimainkan offline dan di-deploy gratis ke **GitHub Pages**.

---

## ✨ Fitur

- 🎯 **6 Level Permainan** — Quiz, Drag & Drop, Matching, Simulasi, Sorting, Mixed Quiz
- 🌐 **Dwibahasa (ID/EN)** — Semua istilah Inggris disertai arti Indonesia
- 💾 **Auto-save Progres** — LocalStorage, aman jika halaman di-refresh
- 🔊 **Efek Suara** — Web Audio API (tanpa file audio eksternal)
- 📜 **Sertifikat Digital** — Unduh PNG setelah selesai
- 🎉 **Animasi Konfeti** — Perayaan saat jawaban benar
- 📱 **Responsif** — Desktop, tablet, smartphone
- ♿ **Aksesibel** — Navigasi keyboard, kontras warna WCAG AA
- 🎓 **Mode Guru** — Tekan `Ctrl+Shift+T` untuk melihat jawaban murid
- 📤 **Bagikan Hasil** — Salin ringkasan ke clipboard untuk WhatsApp/Classroom

---

## 🚀 Cara Menjalankan (Lokal)

1. Unduh/ekstrak semua file ke satu folder.
2. Double-click `index.html` — game langsung terbuka di browser.
3. Tidak perlu server lokal atau instalasi apa pun.

---

## ☁️ Deploy ke GitHub Pages (GRATIS)

### 📌 LANGKAH 0 — Persiapan
1. Buat akun **GitHub** gratis di https://github.com/signup
2. Siapkan file `logo.png` (logo SMPN 19 Bekasi) di komputer Anda.

### 📌 LANGKAH 1 — Buat Repository
1. Login ke GitHub.
2. Klik **+** di kanan atas → **New repository**.
3. Isi:
   - **Repository name**: `petualangan-e-portofolio`
   - **Description**: `LKPD Interaktif - E-Portofolio dan Showcase Digital`
   - Pilih **Public** (wajib, agar GitHub Pages gratis).
   - Centang **Add a README file**.
4. Klik **Create repository**.

### 📌 LANGKAH 2 — Unggah File
**Cara A — Via Web (paling mudah, tanpa install):**
1. Di halaman repository, klik **Add file** → **Upload files**.
2. Seret semua file: `index.html`, `style.css`, `script.js`, `favicon.svg`, `README.md`.
3. Klik **Commit changes**.
4. Buat folder `assets`: klik **Add file** → **Create new file** → ketik `assets/.gitkeep` → **Commit**.
5. Masuk folder `assets` → **Add file** → **Upload files** → unggah `logo.png` → **Commit**.

**Cara B — Via GitHub Desktop:**
1. Clone repository ke komputer.
2. Copy semua file ke folder hasil clone.
3. Commit + Push.

### 📌 LANGKAH 3 — Aktifkan GitHub Pages
1. Di repository, klik tab **Settings**.
2. Scroll ke kiri, klik **Pages**.
3. Di bagian **Source**:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Klik **Save**.
5. Tunggu 1–2 menit. Refresh halaman. Link akan muncul: