const cursor = document.querySelector('.cursor-dot');
if (cursor && window.matchMedia('(pointer:fine)').matches) {
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  const loop = () => { x += (tx - x) * .18; y += (ty - y) * .18; cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`; requestAnimationFrame(loop); };
  loop();
}
const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }), {threshold:.12});
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
