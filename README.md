# Scrapbook Digital Premium untuk Najla

Website scrapbook interaktif dengan gaya Pinterest Masonry, efek Glassmorphism ala Apple iOS, dan transisi animasi 60 FPS. Proyek ini sepenuhnya statis (HTML/CSS/JS murni) tanpa *dependency* library eksternal, sehingga sangat ringan dan optimal.

## Struktur Folder yang Diperlukan

Pastikan Anda memiliki struktur folder berikut sebelum di-upload:

project/
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
└── assets/
├── foto1.jpg  <-- (WAJIB RASIO 3:4 PORTRAIT)
├── foto2.jpg
├── foto3.jpg
├── foto4.jpg
├── foto5.jpg
├── foto6.jpg
├── foto7.jpg
├── foto8.jpg
└── lagu.mp3   <-- (Background Music)


## Cara Mengganti Foto & Lagu

Sistem ini didesain agar Anda tidak perlu mengedit satu baris kode pun.

1. **Foto**: Siapkan 8 buah foto Anda dengan rasio **3:4** (Portrait/Berdiri). 
2. Rename foto-foto tersebut menjadi `foto1.jpg` sampai `foto8.jpg` dan masukkan ke dalam folder `assets/`.
3. **Lagu**: Siapkan lagu romantis pilihan Anda berformat `.mp3`.
4. Rename lagu tersebut menjadi `lagu.mp3` dan masukkan ke dalam folder `assets/`.

*(Catatan: Sistem secara otomatis akan memotong (crop) foto agar sesuai (fit) dengan gaya polaroid Pinterest tanpa merusak rasio.)*

## Fitur Utama

- **Teka-Teki Pembuka:** Keamanan manis dengan matematika dasar.
- **Galeri Pinterest Masonry:** Grid otomatis untuk 8 foto berurutan dengan *scroll reveal*.
- **Interactive Lightbox:** Zoom foto layar penuh yang mulus (*hardware-accelerated*).
- **Flip Cards & Love Letter:** Kartu 3D dan amplop surat ketik otomatis dengan 50+ kalimat romantis acak.
- **Harapan (Wishes):** Fitur menulis harapan yang terbang menjadi bintang dan tersimpan di memori perangkat (LocalStorage).
- **Music Player Floating:** Pemutar musik glassmorphism dengan visualizer dinamis.

## Cara Upload ke GitHub Pages

1. Buat repository baru di GitHub (misal: `scrapbook-najla`).
2. Upload seluruh file dan folder (termasuk folder `assets/`) ke repository tersebut.
3. Masuk ke **Settings** repository Anda.
4. Pilih menu **Pages** di sebelah kiri.
5. Pada bagian **Source**, pilih branch `main` (atau `master`), lalu klik **Save**.
6. Tunggu beberapa menit, link website premium Anda akan muncul (contoh: `https://username.github.io/scrapbook-najla`).

## Menjalankan Secara Lokal

Cukup buka file `index.html` menggunakan browser modern apa pun (Chrome, Safari, Firefox). Untuk pengalaman terbaik yang menghindari blokir Autoplay Audio dari browser, Anda bisa menggunakan ekstensi VS Code bernama **Live Server**.