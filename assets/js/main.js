// Minimal JS: dark-mode toggle, year injection
(function () {
  // Elements
  const toggle = document.getElementById('contrastToggle');
  const htmlEl = document.documentElement;
  const yearEl = document.getElementById('year');

  // Current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize theme from saved preference or system
  const saved = localStorage.getItem('theme'); // "dark" / "light" / null
  if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
    toggle.setAttribute('aria-pressed', 'true');
  }

  // Toggle handler
  toggle.addEventListener('click', function () {
    const isDark = htmlEl.classList.toggle('dark');
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Improve keyboard accessibility: allow card activation with Enter key
  document.querySelectorAll('.card, .project-card').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click && el.click();
      }
    });
  });

  // Improve keyboard accessibility: allow message textarea to paste
  document.querySelectorAll('textarea[name="message"]').forEach(el => {
    el.addEventListener('paste', (e) => {
      const raw = (e.clipboardData || window.clipboardData).getData('text');
      const cleaned = raw.replace(/\u00A0/g, ' ');
      e.preventDefault();
      const start = el.selectionStart;
      const end = el.selectionEnd;
      el.value = el.value.slice(0, start) + cleaned + el.value.slice(end);
      el.selectionStart = el.selectionEnd = start + cleaned.length;
    });
  });

})();


