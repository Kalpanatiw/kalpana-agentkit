const toast = document.getElementById('toast');

function createToast() {
  toast.classList.remove('hidden');
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
    toast.classList.add('hidden');
  }, 2200);
}

window.addEventListener('scroll', () => {
  const topbar = document.getElementById('topbar');
  if (window.scrollY > 32) {
    topbar.style.boxShadow = '0 10px 19px rgba(11, 30, 63, 0.35)';
    topbar.style.transform = 'translateY(0)';
  } else {
    topbar.style.boxShadow = 'none';
  }
});

// Entrance animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.section, .hero').forEach((section) => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Auto play small animation in stats
setTimeout(() => {
  document.querySelectorAll('.stats div').forEach((item, index) => {
    item.style.transitionDelay = `${index * 150}ms`;
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  });
}, 140);
