// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Dropdowns (click to open, works on touch and keyboard)
document.querySelectorAll('.has-dropdown > button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const li = btn.parentElement;
    const open = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.has-dropdown.open').forEach((li) => {
    li.classList.remove('open');
    li.querySelector('button').setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.body.click();
});

// Reveal on scroll
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 })
  : null;
document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
