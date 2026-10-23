// ── Booking link (single source of truth) ─────────────────────
// Every "Book an Appointment" button on every page uses this URL.
// Set to null to fall back to the on-page consultation form.
const BOOKING_URL = "https://fklyz.myaestheticrecord.com/online-booking/h/M18zMzIzNV9jbGluaWNz";

if (BOOKING_URL) {
  document.querySelectorAll('[data-book-link]').forEach(el => {
    el.href = BOOKING_URL;
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
