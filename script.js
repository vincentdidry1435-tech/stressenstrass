const cursor = document.getElementById('cursorLight');
window.addEventListener('pointermove', (e) => {
  if (!cursor) return;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const revealItems = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const cards = document.querySelectorAll('.artist-card.live');
cards.forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
