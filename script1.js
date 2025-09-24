// Animasi smooth scroll saat klik tombol navigasi
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const href = btn.getAttribute('href');
    if (href.includes('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animasi fade-in pas load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".content section").forEach((sec, i) => {
    setTimeout(() => {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, i * 400);
  });
});
