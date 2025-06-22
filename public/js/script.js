// Bootstrap needs validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false);
  });
})();

// Language toggle
function setLanguage(lang) {
  document.querySelectorAll('.translatable').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  // Update dropdown label if present
  const label = document.getElementById('current-lang-label');
  if (label) label.textContent = lang === 'en' ? 'English' : '日本語';
}
document.querySelectorAll('.lang-option').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    setLanguage(this.getAttribute('data-lang'));
  });
});