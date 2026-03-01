
(function () {
  'use strict';

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (!form) return;

  // ── Simple field validator ──
  function validate(field) {
    const value = field.value.trim();
    field.style.borderColor = '';

    if (!value) {
      field.style.borderColor = '#ef4444';
      return false;
    }

    if (field.type === 'email') {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(value)) {
        field.style.borderColor = '#ef4444';
        return false;
      }
    }

    field.style.borderColor = '#22c55e';
    return true;
  }

  // Live validation feedback
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      if (field.style.borderColor === 'rgb(239, 68, 68)') validate(field);
    });
  });

  // ── Form submission ──
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameField    = form.querySelector('#name');
    const emailField   = form.querySelector('#email');
    const messageField = form.querySelector('#message');

    const valid = [
      validate(nameField),
      validate(emailField),
      validate(messageField)
    ].every(Boolean);

    if (!valid) {
      // Shake the invalid fields
      form.querySelectorAll('input, textarea').forEach(f => {
        if (f.style.borderColor === 'rgb(239, 68, 68)') {
          f.animate([
            { transform: 'translateX(-4px)' },
            { transform: 'translateX(4px)' },
            { transform: 'translateX(-4px)' },
            { transform: 'translateX(0)' }
          ], { duration: 300 });
        }
      });
      return;
    }

    // ── Simulate submission (replace with your endpoint / EmailJS / Formspree) ──
    const submitBtn = form.querySelector('[type="submit"]');
    const original  = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled    = true;

    // TODO: Replace this setTimeout with your actual API call:
    
    fetch('https://formspree.io/f/meeldyvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name:    nameField.value.trim(),
        email:   emailField.value.trim(),
        message: messageField.value.trim()
      })
    })
    .then(r => r.ok ? showSuccess() : showError())
    .catch(() => showError())
    .finally(() => { submitBtn.textContent = original; submitBtn.disabled = false; });

    setTimeout(() => {
      submitBtn.textContent = original;
      submitBtn.disabled    = false;
      form.reset();
      form.querySelectorAll('input, textarea').forEach(f => f.style.borderColor = '');
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 6000);
    }, 1200);
  });
})();
