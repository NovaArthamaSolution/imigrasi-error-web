/**
 * Direktorat Teknologi Informasi Keimigrasian - 400 Error Page
 * Interactive Logic & Translations
 */

document.addEventListener('DOMContentLoaded', () => {
  // Bilingual dictionary for ID & EN
  const translations = {
    id: {
      brandSub: "Direktorat Teknologi Informasi Keimigrasian",
      motto: "Imigrasi Untuk Rakyat",
      langCode: "ID",
      oops: "Oops! Wrong Turn",
      title: "Permintaan Anda Tersesat",
      desc: "Sepertinya perjalanan Anda melalui pintu yang salah, periksa kembali tujuan Anda, atau silahkan hubungi link bantuan kami",
      btnReload: "Coba Ulang",
      btnHome: "Ke Halaman Utama",
      card1Title: "Tenang, ini hanya sementara!",
      card1Desc: "Kami sedang memastikan dokumen Anda sampai ke tujuan yang tepat.",
      card2Title: "Butuh bantuan?",
      card2Desc: "Tim kami siap membantu Anda 24 jam setiap hari.",
      helpdeskLink: "Hubungi Helpdesk Imigrasi 24 Jam",
      toastReload: "Memuat ulang permintaan dokumen Anda...",
      toastHome: "Mengarahkan kembali ke beranda...",
      toastHelp: "Membuka pusat bantuan Imigrasi 24 jam...",
      officerMsg: 'Petugas: "Sebentar ya, saya carikan jalur yang tepat untuk dokumen Anda..."',
      passportMsg: 'Paspor: "Aduh gawat, saya harus ke loket yang mana nih?!"',
      boothMsg: 'Petugas Loket: "Halo! Silakan menuju konter untuk pengecekan dokumen!"',
      emojiMsg: 'Emoji: "Waduh, muter-muter sampai pusing!"',
      signpostMsg: 'Rambu: "Izin Tinggal ke kanan, Visa ke kiri, Paspor ke kanan!"'
    },
    en: {
      brandSub: "Directorate of Immigration Information Technology",
      motto: "Immigration for the People",
      langCode: "EN",
      oops: "Oops! Wrong Turn",
      title: "Your Request Got Lost",
      desc: "It seems your journey went through the wrong door. Please re-check your destination, or feel free to contact our help link below.",
      btnReload: "Try Again",
      btnHome: "Back to Home",
      card1Title: "Relax, this is only temporary!",
      card1Desc: "We are making sure your documents reach the correct destination.",
      card2Title: "Need assistance?",
      card2Desc: "Our team is ready to help you 24 hours every day.",
      helpdeskLink: "Contact 24/7 Immigration Helpdesk",
      toastReload: "Reloading your document request...",
      toastHome: "Redirecting back to homepage...",
      toastHelp: "Opening 24/7 Immigration Helpdesk Center...",
      officerMsg: 'Officer: "Hold on, let me guide your documents to the correct lane..."',
      passportMsg: 'Passport: "Oh no, which counter should I run to?!"',
      boothMsg: 'Counter Officer: "Hello! Please come over to the counter for inspection!"',
      emojiMsg: 'Emoji: "Whoops, dizzy from turning around!"',
      signpostMsg: 'Signpost: "Residence Permit right, Visa left, Passport right!"'
    }
  };

  let currentLang = 'id';

  // DOM Elements
  const txtBrandSub = document.getElementById('txt-brand-sub');
  const txtMotto = document.getElementById('txt-motto');
  const txtLangCode = document.getElementById('txt-lang-code');
  const txtOops = document.getElementById('txt-oops');
  const txtTitle = document.getElementById('txt-title');
  const txtDesc = document.getElementById('txt-desc');
  const txtBtnReload = document.getElementById('txt-btn-reload');
  const txtBtnHome = document.getElementById('txt-btn-home');
  const txtCard1Title = document.getElementById('txt-card1-title');
  const txtCard1Desc = document.getElementById('txt-card1-desc');
  const txtCard2Title = document.getElementById('txt-card2-title');
  const txtCard2Desc = document.getElementById('txt-card2-desc');
  const txtHelpdeskLink = document.getElementById('txt-helpdesk-link');

  const btnLang = document.getElementById('btn-lang');
  const btnReload = document.getElementById('btn-reload');
  const btnHome = document.getElementById('btn-home');
  const linkHelpdesk = document.getElementById('link-helpdesk');

  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (txtBrandSub) txtBrandSub.textContent = t.brandSub;
    if (txtMotto) txtMotto.querySelector('span').textContent = t.motto;
    if (txtLangCode) txtLangCode.textContent = t.langCode;
    if (txtOops) txtOops.textContent = t.oops;
    if (txtTitle) txtTitle.textContent = t.title;
    if (txtDesc) txtDesc.textContent = t.desc;
    if (txtBtnReload) txtBtnReload.textContent = t.btnReload;
    if (txtBtnHome) txtBtnHome.textContent = t.btnHome;
    if (txtCard1Title) txtCard1Title.textContent = t.card1Title;
    if (txtCard1Desc) txtCard1Desc.textContent = t.card1Desc;
    if (txtCard2Title) txtCard2Title.textContent = t.card2Title;
    if (txtCard2Desc) txtCard2Desc.textContent = t.card2Desc;
    if (txtHelpdeskLink) txtHelpdeskLink.textContent = t.helpdeskLink;
  }

  // Language switch trigger
  if (btnLang) {
    btnLang.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      updateLanguage(nextLang);
      showToast(nextLang === 'id' ? "Bahasa diubah ke Bahasa Indonesia" : "Language switched to English");
    });
  }

  // Reload Button Action
  if (btnReload) {
    btnReload.addEventListener('click', () => {
      const icon = btnReload.querySelector('.icon-reload');
      if (icon) {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.6s ease';
        setTimeout(() => {
          icon.style.transform = '';
        }, 600);
      }
      showToast(translations[currentLang].toastReload);
    });
  }

  // Home Button Action
  if (btnHome) {
    btnHome.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(translations[currentLang].toastHome);
    });
  }

  // Helpdesk Link
  if (linkHelpdesk) {
    linkHelpdesk.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(translations[currentLang].toastHelp);
    });
  }

  // Character Click Easter Eggs
  const officerLayer = document.querySelector('.layer-officer');
  if (officerLayer) {
    officerLayer.addEventListener('click', () => {
      showToast(translations[currentLang].officerMsg);
    });
  }

  const passportLayer = document.querySelector('.layer-passport');
  if (passportLayer) {
    passportLayer.addEventListener('click', () => {
      showToast(translations[currentLang].passportMsg);
    });
  }

  const boothLayer = document.querySelector('.layer-booth');
  if (boothLayer) {
    boothLayer.addEventListener('click', () => {
      showToast(translations[currentLang].boothMsg);
    });
  }

  const emojiWrap = document.querySelector('.emoji-asset-wrap');
  if (emojiWrap) {
    emojiWrap.addEventListener('click', () => {
      showToast(translations[currentLang].emojiMsg);
    });
  }

  const signpostLayer = document.querySelector('.layer-signpost');
  if (signpostLayer) {
    signpostLayer.style.cursor = 'pointer';
    signpostLayer.addEventListener('click', () => {
      showToast(translations[currentLang].signpostMsg);
    });
  }

  const globeLayer = document.querySelector('.layer-globe');
  if (globeLayer) {
    globeLayer.addEventListener('click', () => {
      showToast(currentLang === 'id' ? "🌐 Layanan Visa & Imigrasi Global Republik Indonesia" : "🌐 Global Visa & Immigration Services of Republic of Indonesia");
    });
  }
});
