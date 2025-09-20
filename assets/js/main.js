// Minimal JS: dark-mode toggle, simple accessible form handling, year injection
(function () {
  // Elements
  const toggle = document.getElementById('contrastToggle');
  const htmlEl = document.documentElement;
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

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

  // Simple accessible form handling (no network) — provide feedback only
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic validation (HTML required attributes handle most)
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();
      if (!name || !email || !message) {
        status.hidden = false;
        status.textContent = 'Please complete all fields.';
        status.style.color = '#e11d48'; // red-ish for error
        return;
      }

      // Simulate async send and show success (replace with real API later)
      status.hidden = false;
      status.textContent = 'Sending message…';
      status.style.color = ''; // reset
      setTimeout(() => {
        status.textContent = 'Message sent — thank you! I will reply soon.';
        status.style.color = '#10b981'; // green-ish
        form.reset();
      }, 800);
    });
  }

  // Improve keyboard accessibility: allow card activation with Enter key
  document.querySelectorAll('.card, .project-card').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click && el.click();
      }
    });
  });

})();
