# Layanan Imigrasi Digital - Universal Error Page Hub (403, 404, & 500)

Sistem halaman kesalahan web terpadu (Universal & Standalone Error Web) untuk **Direktorat Jenderal Imigrasi Republik Indonesia**, dirancang untuk penggunaan multi-domain (domain-agnostic) dengan standar visual dan desain resmi dari portal eVisa Indonesia.

---

## ✨ Fitur & Pembaruan Sistem

1. **Universal Multi-Domain Navigation (`href="/"`)**:
   - Seluruh tautan beranda (*Back to Home / Ke Beranda Layanan*) dan logo instansi menggunakan rute relatif akar `href="/"`, sehingga siap digunakan secara universal di berbagai subdomain maupun domain layanan keimigrasian tanpa ketergantungan tautan eksternal kaku.

2. **Aksi Muat Ulang Halaman (*Native Page Reload*)**:
   - Menekan tombol **Coba Ulang / Try Again / Coba Lagi / Otentikasi** langsung mengeksekusi `window.location.reload()` secara bersih tanpa memunculkan popup atau toast mengambang.

3. **Bebas Popup Interaktif (*No Popups on Click*)**:
   - Seluruh event listener popup/toast pada klik gambar ilustrasi, kartu, atau elemen visual telah dihilangkan sehingga halaman berfungsi sebagai halaman status error resmi yang tenang, bersih, dan profesional.

4. **eVisa Design System & Theme**:
   - Skema warna resmi: *Official Deep Navy (`#11375C`), Brand Accent Orange (`#F17425`), Light Slate/Blue (`#EBF3FB`), Border Light (`#D1E3F5`), dan Status Red (`#E15B64`)*.
   - Tipografi standar: **Inter** (Google Fonts).
   - Favicon resmi: Logo Direktorat Jenderal Imigrasi.

5. **Aset Ilustrasi Seamless**:
   - **Error 403 (Akses Ditolak / Forbidden)**: `assets/illustration/403.png`
   - **Error 404 (Halaman Tidak Ditemukan / Page Not Found)**: `assets/illustration/404.png`
   - **Error 500 (Kendala Server / Server Error)**: `assets/illustration/500.png`

6. **Multi-Error Switcher (403, 404, 500) & Bilingual (ENG/ID)**:
   - Akses instan 3 status error dalam 1 halaman terpadu (`index.html`) via switcher dan URL query parameter:
     - `index.html?code=403` $\rightarrow$ Error 403 (Akses Dibatasi)
     - `index.html?code=404` $\rightarrow$ Error 404 (Tidak Ditemukan)
     - `index.html?code=500` $\rightarrow$ Error 500 (Kendala Server)
   - Switcher dwibahasa (**Bahasa Indonesia / English**) dengan penyimpanan lokal otomatis.

---

## 📁 Struktur Proyek

```
imigrasi-error-web/
├── index.html                   # Halaman terpadu (Unified Error Portal 403, 404, 500)
├── 403.html                     # Halaman mandiri Error 403
├── 404.html                     # Halaman mandiri Error 404
├── 500.html                     # Halaman mandiri Error 500
├── assets/
│   ├── css/
│   │   ├── styles.css           # Design system, Inter font, #11375C & #F17425, responsive rules
│   │   └── animations.css       # Keyframe animations (mesh orbs, float, glow, spinner)
│   ├── js/
│   │   └── main.js              # Engine dwibahasa (ENG/ID), page reload & clean navigation
│   ├── icons/logo-imigrasi.png  # Logo & Favicon resmi Imigrasi
│   └── illustration/            # Asset 403.png, 404.png, 500.png
├── 403/index.html               # Direktori mandiri 403
├── 404/index.html               # Direktori mandiri 404
└── 500/index.html               # Direktori mandiri 500
```
