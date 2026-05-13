const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('.artist-card, .btn, .link-grid a').forEach((el) => {
  el.addEventListener('mouseenter', () => el.style.transform = 'translateY(-3px)');
  el.addEventListener('mouseleave', () => el.style.transform = '');
});
