// Create starfield programmatically
(function makeStars(){
  const container = document.querySelector('.stars');
  if(!container) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COUNT = prefersReduced ? 40 : 100;

  for(let i=0;i<COUNT;i++){
    const s = document.createElement('div');
    s.className = 'star';
    s.style.top = Math.random()*100 + '%';
    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (1 + Math.random()*3) + 's';
    container.appendChild(s);
  }
})();
