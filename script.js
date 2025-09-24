  // Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // waktu fade-out
  }, 2500); // durasi loading screen (2.5 detik)
});

  // Smooth scroll on internal anchors
  document.documentElement.style.scrollBehavior = 'smooth';

  // IntersectionObserver for fade-in reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if(ent.isIntersecting){
        ent.target.classList.add('show');
      }
    });
  },{threshold:0.18});

  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  // Timeline interactive center logic
  const cards = Array.from(document.querySelectorAll('.timeline-card'));
  function setActive(index){
    cards.forEach(c=>c.classList.remove('active'));
    const target = cards[index];
    if(target) target.classList.add('active');
  }
  // initial center
  setActive(1);

  cards.forEach((c, i)=>{
    c.addEventListener('mouseenter', ()=>setActive(i));
    c.addEventListener('click', ()=>{
      // open modal or navigate - placeholder
      alert('Open Act: ' + (i+1));
    })
  });

  // subtle parallax on hero media
  const heroMedia = document.getElementById('hero-media');
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth/2)/40;
    const y = (e.clientY - window.innerHeight/2)/40;
    heroMedia.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  });

  // mobile timeline: allow scroll snap center
  const timeline = document.getElementById('timeline');
  if(window.matchMedia('(max-width:760px)').matches){
    timeline.style.scrollSnapType = 'x mandatory';
    cards.forEach(c=>{c.style.scrollSnapAlign='center'});
  }

  // Lazy load background images (progressive feel)
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.mock-media, .char-thumb, .mini-card div:first-child, .timeline-card img').forEach(el=>{
      // already using remote unsplash urls - they load naturally; placeholder logic could be added here
    });
  });

  // Accessibility: keyboard timeline navigation
  document.addEventListener('keydown', (e)=>{
    if(['ArrowLeft','ArrowRight'].includes(e.key)){
      const idx = cards.findIndex(c=>c.classList.contains('active'));
      if(e.key==='ArrowLeft') setActive(Math.max(0, idx-1));
      if(e.key==='ArrowRight') setActive(Math.min(cards.length-1, idx+1));
    }
  });
