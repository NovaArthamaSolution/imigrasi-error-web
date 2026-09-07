/**
 * Main Interactive Logic & Multi-Language (i18n) Engine
 * Layanan Imigrasi Digital - Error 500 Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    id: {
      pageTitle: "Maaf, Terjadi masalah disisi kami (Error 500) - Direktorat Teknologi Informasi Keimigrasian",
      brandTitle: "IMIGRASI",
      brandSubtitle: "Direktorat Teknologi Informasi Keimigrasian",
      headerMotto: "Imigrasi Untuk Rakyat",
      headlineOops: "Maaf,",
      headlineGangguan: "Terjadi masalah disisi kami",
      errorDescription: "Sistem sedang mengalami kendala sementara.<br>kami sedang memperbaikinya",
      errorStatus: "Internal Server Error",
      btnRetry: "Coba Lagi",
      btnRetryConnecting: "Menghubungkan...",
      btnHome: "Kembali ke Beranda",
      footerHelpdeskText: "Jika masalah terus berlanjut, silakan hubungi",
      footerHelpdeskLink: "Helpdesk Imigrasi 24 Jam",
      footerCopyright: "© 2026 Direktorat Jenderal Imigrasi",
      footerSecurityTitle: "Sistem Informasi Keimigrasian",
      footerSecurityDesc: "Dilengkapi keamanan berlapis",
      toastChecking: "Mengecek ketersediaan server Imigrasi...",
      toastMaintenance: "Server sedang dalam pemeliharaan berkala. Coba sesaat lagi.",
      toastHelpdesk: "Layanan Helpdesk 24 Jam: Call Center 1500-116 / WhatsApp: 0811-1030-333",
      toastLangChanged: "Bahasa diubah ke Bahasa Indonesia"
    },
    en: {
      pageTitle: "Sorry, An Issue Occurred on Our Side (Error 500) - Directorate of Immigration Information Technology",
      brandTitle: "IMMIGRATION",
      brandSubtitle: "DIRECTORATE OF IMMIGRATION INFORMATION TECHNOLOGY",
      headerMotto: "Immigration for the People",
      headlineOops: "Sorry,",
      headlineGangguan: "An issue occurred on our side",
      errorDescription: "The system is currently experiencing temporary issues.<br>We are working on fixing it.",
      errorStatus: "Internal Server Error",
      btnRetry: "Try Again",
      btnRetryConnecting: "Connecting...",
      btnHome: "Back to Home",
      footerHelpdeskText: "If the problem persists, please contact",
      footerHelpdeskLink: "24/7 Immigration Helpdesk",
      footerCopyright: "© 2026 Directorate General of Immigration",
      footerSecurityTitle: "Immigration Information System",
      footerSecurityDesc: "Protected with multi-layer security",
      toastChecking: "Checking Immigration server availability...",
      toastMaintenance: "Server is currently undergoing scheduled maintenance. Please try again soon.",
      toastHelpdesk: "24/7 Helpdesk Support: Call Center 1500-116 / WhatsApp: +62 811-1030-333",
      toastLangChanged: "Language switched to English"
    }
  };

  let currentLang = localStorage.getItem('imigrasi_lang') || 'id';

  // DOM Elements
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdownWrapper = document.querySelector('.lang-dropdown-wrapper');
  const langCurrentCode = document.getElementById('langCurrentCode');
  const langOptions = document.querySelectorAll('.lang-option');
  const btnRetry = document.getElementById('btnRetry');
  const btnRetryText = document.getElementById('btnRetryText');
  const linkHelpdesk = document.getElementById('linkHelpdesk');
  const toastContainer = document.getElementById('toastContainer');

  /**
   * Display dynamic accessible toast notifications
   * @param {string} message - Notification text
   * @param {boolean} isSpinner - Whether to show loading indicator
   * @param {number} duration - Auto dismiss timeout in ms
   */
  function showToast(message, isSpinner = true, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    const iconHtml = isSpinner 
      ? '<div class="toast-spinner" aria-hidden="true"></div>' 
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    toast.innerHTML = `${iconHtml} <span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const timer = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);

    toast.addEventListener('click', () => {
      clearTimeout(timer);
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    });
  }

  /**
   * Switch Active Language
   * @param {string} lang - 'id' or 'en'
   * @param {boolean} notify - Whether to show toast alert
   */
  function setLanguage(lang, notify = false) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('imigrasi_lang', lang);

    document.documentElement.lang = lang;
    document.title = translations[lang].pageTitle;

    // Update all elements with data-i18n
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Language Button Label
    if (langCurrentCode) {
      langCurrentCode.textContent = lang.toUpperCase();
    }

    // Update Dropdown Options Active State
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('is-active');
      } else {
        opt.classList.remove('is-active');
      }
    });

    if (notify) {
      showToast(translations[lang].toastLangChanged, false, 2500);
    }
  }

  // Language Dropdown Interactivity
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
          setLanguage(selectedLang, true);
        }
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close Dropdown on Click Outside
    document.addEventListener('click', (e) => {
      if (!langDropdownWrapper.contains(e.target)) {
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdownWrapper.classList.contains('is-open')) {
        langDropdownWrapper.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
        langToggleBtn.focus();
      }
    });
  }

  // Handle Retry Simulation
  if (btnRetry) {
    let isRetrying = false;

    btnRetry.addEventListener('click', (e) => {
      e.preventDefault();
      if (isRetrying) return;

      isRetrying = true;
      const dict = translations[currentLang];
      if (btnRetryText) btnRetryText.textContent = dict.btnRetryConnecting;
      btnRetry.style.opacity = '0.85';
      btnRetry.style.pointerEvents = 'none';

      showToast(dict.toastChecking, true, 2200);

      setTimeout(() => {
        showToast(dict.toastMaintenance, false, 4000);
        if (btnRetryText) btnRetryText.textContent = dict.btnRetry;
        btnRetry.style.opacity = '1';
        btnRetry.style.pointerEvents = 'auto';
        isRetrying = false;
      }, 2400);
    });
  }

  // Handle Helpdesk Link
  if (linkHelpdesk) {
    linkHelpdesk.addEventListener('click', (e) => {
      e.preventDefault();
      const dict = translations[currentLang];
      showToast(dict.toastHelpdesk, false, 5000);
    });
  }

  // Initialize Language
  setLanguage(currentLang, false);
});
