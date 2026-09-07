# Layanan Imigrasi Digital - Error Page Hub (403, 404, & 500)

Sistem halaman kesalahan web terpadu (Unified & Standalone Error Web) untuk **Direktorat Jenderal Imigrasi • Layanan eVisa Indonesia**, mengusung standar visual dan desain resmi dari portal [https://evisa.imigrasi.go.id/](https://evisa.imigrasi.go.id/).

---

## ✨ Fitur & Pembaruan Sistem

1. **eVisa Design System & Theme**:
   - Skema warna resmi eVisa: *Official Deep Navy (`#11375C`), Brand Accent Orange (`#F17425`), Light Slate/Blue (`#EBF3FB`), Border Light (`#D1E3F5`), dan Status Red (`#E15B64`)*.
   - Tipografi resmi standar: **Inter** (Google Fonts).
   - Top Header Bar resmi eVisa dengan logo Imigrasi Indonesia, badge `eVisa`, dan panel navigasi modern.

2. **Aset Ilustrasi PNG Berkualitas Tinggi**:
   - **Error 403 (Akses Ditolak / Forbidden)**: Menggunakan aset `403.png` bertema keamanan & pemeriksaan otorisasi akses.
   - **Error 404 (Halaman Tidak Ditemukan / Page Not Found)**: Menggunakan aset `404.png` bertema paspor & petugas pemandu arah.
   - **Error 500 (Kendala Server / Server Error)**: Menggunakan aset `500.png` bertema autogate & pemeliharaan teknis sistem.

3. **Multi-Error Switcher (403, 404, 500)**:
   - Akses instan 3 status error dalam 1 halaman terpadu (`index.html`) melalui navigation switcher ataupun parameter URL:
     - `index.html?code=403` → Error 403 (Akses Dibatasi / Forbidden)
     - `index.html` atau `index.html?code=404` → Error 404 (Halaman Tidak Ditemukan / Not Found)
     - `index.html?code=500` → Error 500 (Kendala Server / Maintenance)

4. **Dukungan Dua Bahasa Penuh (Bilingual Engine: ENG & ID)**:
   - Dukungan penuh Bahasa Indonesia (**ID**) & English (**ENG**).
   - Switcher bahasa interaktif di bilah navigasi atas dengan penyimpanan preferensi otomatis ke `localStorage`.

5. **Halaman Mandiri (Standalone Pages)**:
   - Halaman root: `403.html`, `404.html`, `500.html`
   - Direktori mandiri: `/403/`, `/404/`, `/500/`

6. **Interaktivitas & Easter Eggs**:
   - Klik pada kartu ilustrasi (403, 404, 500) untuk memunculkan pesan kontekstual ceria dari petugas imigrasi, keamanan, atau teknisi server.
   - Tombol **Coba Ulang / Otentikasi** dengan animasi loading dan simulasi pengecekan koneksi server.

---

## 📁 Struktur Proyek

```
imigrasi-error-web/
├── index.html                   # Halaman terpadu (Unified Error Portal 403, 404, 500)
├── 403.html                     # Halaman mandiri Error 403
├── 404.html                     # Halaman mandiri Error 404
├── 500.html                     # Halaman mandiri Error 500
├── 403.png                      # Asset Ilustrasi 403 (Forbidden)
├── 404.png                      # Asset Ilustrasi 404 (Not Found)
├── 500.png                      # Asset Ilustrasi 500 (Server Error)
├── css/
│   ├── styles.css               # eVisa Design System, Typography Inter, Palette #11375C & #F17425
│   └── animations.css           # Keyframe animations (float, pulse, spinner, glow)
├── js/
│   └── main.js                  # Engine dwibahasa (ENG/ID), switcher 403/404/500, toast feedback
├── assets/
│   ├── icons/                   # Logo resmi Imigrasi & icon pendukung
│   └── illustration/            # Salinan aset gambar & ilustrasi
├── 403/                         # Direktori mandiri 403
├── 404/                         # Direktori mandiri 404
└── 500/                         # Direktori mandiri 500
```

---

## 🚀 Cara Menjalankan & Menguji

Buka langsung file HTML di peramban (browser) atau jalankan server lokal:

```bash
# Menggunakan python built-in server
python3 -m http.server 8080
```

Lalu buka di browser:
- `http://localhost:8080/index.html?code=403` (Error 403)
- `http://localhost:8080/index.html?code=404` (Error 404)
- `http://localhost:8080/index.html?code=500` (Error 500)
- `http://localhost:8080/403/` atau `http://localhost:8080/403.html`
- `http://localhost:8080/404/` atau `http://localhost:8080/404.html`
- `http://localhost:8080/500/` atau `http://localhost:8080/500.html`
