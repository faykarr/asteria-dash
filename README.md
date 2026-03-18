# Asteria Dash

Asteria Dash adalah template dashboard admin modern yang dibangun menggunakan Vite, Tailwind CSS, Alpine.js, dan Handlebars. Template ini dirancang untuk memberikan antarmuka yang bersih, responsif, dan mudah disesuaikan untuk berbagai kebutuhan aplikasi web.

## Fitur Utama

- **Vite**: Build tool yang sangat cepat untuk pengembangan web modern.
- **Tailwind CSS (v4)**: Framework CSS utility-first untuk styling yang cepat dan fleksibel.
- **Alpine.js**: Framework JavaScript yang ringan untuk interaktivitas komponen.
- **Handlebars**: Templating engine untuk memisahkan struktur HTML menjadi komponen yang dapat digunakan kembali.
- **DaisyUI**: Plugin komponen untuk Tailwind CSS guna mempercepat pembuatan UI.
- **Iconoir**: Ikon open-source yang elegan.
- **Perfect Scrollbar**: Scrollbar kustom yang indah untuk mempercantik tampilan.

## Prasyarat

Pastikan Anda telah menginstal Node.js di sistem Anda sebelum memulai.

## Memulai

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

1. **Clone Repositori**
   ```bash
   git clone <url-repositori>
   cd asteria-dash
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   ```
   Server Vite akan berjalan dan dapat diakses melalui browser Anda, biasanya di `http://localhost:5173`.

## Struktur Proyek

```text
asteria-dash/
├── src/
│   ├── assets/       # File CSS, gambar, dan aset statis lainnya
│   ├── data/         # Data JSON atau file pengaturan
│   ├── layouts/      # Layout utama Handlebars (misal: layout.hbs)
│   ├── pages/        # Halaman-halaman spesifik
│   └── partials/     # Komponen Handlebars yang dapat digunakan ulang
├── package.json      # Konfigurasi dependensi dan skrip proyek
└── vite.config.js    # Konfigurasi spesifik untuk Vite
```

## Membangun untuk Produksi

Untuk menghasilkan file statis yang siap di-deploy, jalankan perintah berikut:

```bash
npm run build
```

Hasil build akan berada di dalam folder `dist`.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Hak Cipta (c) 2026 Nasyath Faykar.

## Berkontribusi

Silakan lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan mengenai cara berkontribusi pada proyek ini. Kami sangat menghargai setiap bentuk kontribusi! Jangan lupa untuk mematuhi [Kode Etik](CODE_OF_CONDUCT.md) kami.
