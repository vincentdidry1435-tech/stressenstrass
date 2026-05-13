(function(){
  const cursor=document.getElementById('diamondCursor');
  if(cursor && window.matchMedia('(pointer:fine)').matches){
    document.body.classList.add('cursor-on');
    let x=window.innerWidth/2,y=window.innerHeight/2,tx=x,ty=y;
    const move=e=>{tx=e.clientX;ty=e.clientY;};
    const loop=()=>{x+=(tx-x)*0.25;y+=(ty-y)*0.25;cursor.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;requestAnimationFrame(loop)};
    window.addEventListener('pointermove',move,{passive:true});
    loop();
  }
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  document.querySelectorAll('a,button,.artist-card').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'));});
})();
