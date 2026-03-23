// Make function GLOBAL
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,sv'
  }, 'google_translate_element');
};

// Load Google script
const script = document.createElement('script');
script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(script);
