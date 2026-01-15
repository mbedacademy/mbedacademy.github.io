/* ===== Mbed Academy — Shared Script ===== */

// Mobile nav toggle
function toggleMenu(){
  const nav = document.getElementById('nav');
  if (!nav) return;
  const shown = getComputedStyle(nav).display !== 'none';
  nav.style.display = shown ? 'none' : 'flex';
}

// Set current year in footer and active nav state (for static hosting)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});
