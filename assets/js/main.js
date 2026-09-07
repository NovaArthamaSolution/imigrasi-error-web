/**
 * Layanan Imigrasi Digital - Universal Error Engine
 * Handles Bilingual Support (ID / ENG), Error Mode Switching (403, 404, 500),
 * Page Reload on Retry Actions, and Domain-Agnostic Navigation (href="/")
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Bilingual Dictionary for 403, 404, and 500
  const translations = {
    id: {
      pageTitle403: "403 - Akses Ditolak / Dilarang | Direktorat Jenderal Imigrasi Republik Indonesia",
      pageTitle404: "404 - Halaman Tidak Ditemukan | Direktorat Jenderal Imigrasi Republik Indonesia",
      pageTitle500: "500 - Kendala Server / Pemeliharaan Sistem | Direktorat Jenderal Imigrasi Republik Indonesia",
      brandTitle: "IMIGRASI",
      brandSubtitle: "Direktorat Jenderal Imigrasi Republik Indonesia",
      headerMotto: "Layanan Resmi Keimigrasian Republik Indonesia",

      // 403 Text
      pill403: "403 • AKSES DITOLAK",
      codeHeader403: "403",
      codeSub403: "Akses Ditolak",
      title403: "Akses Dibatasi atau Izin Ditolak",
      desc403: "Maaf, Anda tidak memiliki izin atau otorisasi yang cukup untuk mengakses halaman atau dokumen ini. Pastikan Anda telah masuk dengan akun resmi yang berwenang.",
      note403: "Area ini dilindungi oleh otentikasi keamanan keimigrasian tingkat lanjut. Silakan periksa kembali kredensial akun Anda.",
      btnAuth403: "Masuk / Otentikasi Ulang",
      btnHome403: "Ke Beranda Layanan",
      badge403: "Zona Terbatas",

      // 404 Text
      pill404: "404 • TIDAK DITEMUKAN",
      codeHeader404: "404",
      codeSub404: "Halaman Tidak Ditemukan",
      title404: "Halaman atau Tautan Tidak Ditemukan",
      desc404: "Sepertinya tautan atau halaman layanan yang Anda tuju telah dipindahkan, dinonaktifkan, atau alamat URL yang dimasukkan kurang tepat.",
      note404: "Periksa kembali ejaan tautan pada bilah peramban Anda atau gunakan menu navigasi untuk mencari layanan yang sesuai.",
      btnReload404: "Coba Ulang",
      btnHome404: "Ke Beranda Layanan",
      badge404: "Tautan Tidak Terdaftar",

      // 500 Text
      pill500: "500 • KENDALA SERVER",
      codeHeader500: "500",
      codeSub500: "Gangguan Sistem",
      title500: "Maaf, Terjadi Kendala di Sisi Kami",
      desc500: "Sistem keimigrasian sedang mengalami kendala teknis sementara atau sedang dalam jadwal pemeliharaan berkala untuk peningkatan performa.",
      note500: "Tim teknis kami sedang menangani masalah ini secepat mungkin. Permohonan Anda tetap aman dalam basis data.",
      btnReload500: "Coba Lagi",
      btnHome500: "Ke Beranda Layanan",
      badge500: "Pemeliharaan Sistem",

      // Shared Bottom Support Card & Footer
      card1Title: "Tenang, data Anda tetap aman!",
      card1Desc: "Seluruh data permohonan dan dokumen keimigrasian Anda terlindungi enkripsi standar internasional.",
      card2Title: "Butuh Bantuan Layanan?",
      card2Desc: "Petugas Helpdesk kami siap melayani dan mendampingi kendala Anda.",
      helpdeskLink: "Hubungi Helpdesk Imigrasi 24 Jam",
      footerCopyright: "© 2026 Direktorat Jenderal Imigrasi • Kementerian Imigrasi dan Pemasyarakatan RI",
      footerSecurityTitle: "Sistem Informasi Manajemen Keimigrasian (SIMKIM / MOLINA)"
    },
    en: {
      pageTitle403: "403 - Access Forbidden / Denied | Directorate General of Immigration Republic of Indonesia",
      pageTitle404: "404 - Page Not Found | Directorate General of Immigration Republic of Indonesia",
      pageTitle500: "500 - Internal Server Error / Maintenance | Directorate General of Immigration Republic of Indonesia",
      brandTitle: "IMMIGRATION",
      brandSubtitle: "Directorate General of Immigration Republic of Indonesia",
      headerMotto: "Official Immigration Portal Republic of Indonesia",

      // 403 Text
      pill403: "403 • ACCESS FORBIDDEN",
      codeHeader403: "403",
      codeSub403: "Access Forbidden",
      title403: "Access Restricted or Permission Denied",
      desc403: "Sorry, you do not have permission or necessary authorization to access this page or document. Please verify your credentials and sign in with an authorized account.",
      note403: "This zone is protected by high-level immigration security authentication. Please check your account authorization.",
      btnAuth403: "Sign In / Authenticate",
      btnHome403: "Back to Home Portal",
      badge403: "Restricted Zone",

      // 404 Text
      pill404: "404 • PAGE NOT FOUND",
      codeHeader404: "404",
      codeSub404: "Page Not Found",
      title404: "Page or Resource Not Found",
      desc404: "It seems the service link or page you are looking for has been relocated, removed, or the entered URL address contains an error.",
      note404: "Please double check the URL address in your browser bar or use the main menu to navigate to available immigration services.",
      btnReload404: "Try Again",
      btnHome404: "Back to Home Portal",
      badge404: "Unregistered Route",

      // 500 Text
      pill500: "500 • SERVER ERROR",
      codeHeader500: "500",
      codeSub500: "System Error",
      title500: "Sorry, An Issue Occurred on Our Side",
      desc500: "Our immigration service servers are currently encountering a temporary technical issue or undergoing scheduled routine system maintenance.",
      note500: "Our technical team is actively resolving this issue. All your applications and submitted documents remain secure.",
      btnReload500: "Try Again",
      btnHome500: "Back to Home Portal",
      badge500: "System Maintenance",

      // Shared Bottom Support Card & Footer
      card1Title: "Relax, your data is secure!",
      card1Desc: "All your applications and immigration records are protected with international encryption standards.",
      card2Title: "Need Assistance?",
      card2Desc: "Our 24/7 immigration support helpdesk team is ready to assist you anytime.",
      helpdeskLink: "Contact 24/7 Immigration Helpdesk",
      footerCopyright: "© 2026 Directorate General of Immigration • Republic of Indonesia",
      footerSecurityTitle: "Immigration Management Information System (MOLINA / SIMKIM)"
    }
  };

  // State initialization
  let currentLang = localStorage.getItem('imigrasi_lang') || 'id';
  if (currentLang !== 'id' && currentLang !== 'en') currentLang = 'id';

  // DOM Elements
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdownWrapper = document.querySelector('.lang-dropdown-wrapper');
  const langCurrentCode = document.getElementById('langCurrentCode');
  const langOptions = document.querySelectorAll('.lang-option');

  const view403 = document.getElementById('view-403');
  const view404 = document.getElementById('view-404');
  const view500 = document.getElementById('view-500');

  // Check if current page is multi-view hub (index.html with multiple error views)
  const isMultiViewHub = Boolean(view403 && view404 && view500);

  // Determine current code:
  // 1. From URL parameter (if multi-view hub)
  // 2. From standalone active view element on the page
  // 3. From URL pathname
  let currentCode = '404';
  const urlParams = new URLSearchParams(window.location.search);
  const path = window.location.pathname.toLowerCase();

  if (isMultiViewHub) {
    let requestedCode = urlParams.get('code');
    if (requestedCode === '400') requestedCode = '404';
    currentCode = ['403', '404', '500'].includes(requestedCode) ? requestedCode : '404';
  } else {
    if (view403) currentCode = '403';
    else if (view500) currentCode = '500';
    else if (view404) currentCode = '404';
    else if (path.includes('403')) currentCode = '403';
    else if (path.includes('500')) currentCode = '500';
    else currentCode = '404';
  }

  /**
   * Switch between 403, 404, and 500 error views (only on multi-view hub)
   */
  function switchErrorCode(code) {
    if (!['403', '404', '500'].includes(code)) code = '404';
    currentCode = code;

    if (isMultiViewHub) {
      // Hide all views first
      if (view403) view403.classList.remove('is-active');
      if (view404) view404.classList.remove('is-active');
      if (view500) view500.classList.remove('is-active');

      // Activate selected view
      if (code === '403') {
        if (view403) view403.classList.add('is-active');
        document.title = translations[currentLang].pageTitle403;
      } else if (code === '500') {
        if (view500) view500.classList.add('is-active');
        document.title = translations[currentLang].pageTitle500;
      } else {
        if (view404) view404.classList.add('is-active');
        document.title = translations[currentLang].pageTitle404;
      }
    } else {
      // Standalone page: ensure document title matches page code
      if (currentCode === '403') {
        document.title = translations[currentLang].pageTitle403;
      } else if (currentCode === '500') {
        document.title = translations[currentLang].pageTitle500;
      } else {
        document.title = translations[currentLang].pageTitle404;
      }
    }
  }

  /**
   * Apply translations to the DOM
   */
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('imigrasi_lang', lang);

    document.documentElement.lang = lang;

    // Set page title according to current error code
    if (currentCode === '403') {
      document.title = translations[lang].pageTitle403;
    } else if (currentCode === '500') {
      document.title = translations[lang].pageTitle500;
    } else {
      document.title = translations[lang].pageTitle404;
    }

    // Update all elements with data-i18n
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Language Dropdown Button Text
    if (langCurrentCode) {
      langCurrentCode.textContent = lang === 'en' ? 'ENG' : 'ID';
    }

    // Update Dropdown Options Active State
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('is-active');
      } else {
        opt.classList.remove('is-active');
      }
    });
  }

  // Language Dropdown Events
  if (langToggleBtn && langDropdownWrapper) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdownWrapper.classList.toggle('is-open');
      langToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = opt.getAttribute('data-lang');
        if (selectedLang !== currentLang) {
          setLanguage(selectedLang);
        }
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langDropdownWrapper.contains(e.target)) {
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdownWrapper.classList.contains('is-open')) {
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
        langToggleBtn.focus();
      }
    });
  }

  // Action: Try Again / Reload Buttons -> Trigger Page Reload
  const btnAuth403 = document.getElementById('btnAuth403');
  if (btnAuth403) {
    btnAuth403.addEventListener('click', () => {
      window.location.reload();
    });
  }

  const btnReload404 = document.getElementById('btnReload404');
  if (btnReload404) {
    btnReload404.addEventListener('click', () => {
      window.location.reload();
    });
  }

  const btnReload500 = document.getElementById('btnReload500');
  if (btnReload500) {
    btnReload500.addEventListener('click', () => {
      window.location.reload();
    });
  }

  // Initialize Language and Mode
  setLanguage(currentLang);
  switchErrorCode(currentCode);
});
