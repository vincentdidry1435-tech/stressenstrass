const root = document.documentElement;
window.addEventListener('pointermove', (e) => {
  root.style.setProperty('--mx', `${e.clientX}px`);
  root.style.setProperty('--my', `${e.clientY}px`);
});

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');}
  });
},{threshold:.12});
reveals.forEach(el=>io.observe(el));
