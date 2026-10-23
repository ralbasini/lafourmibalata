// ── Scroll-reveal animations via Intersection Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
)
document.querySelectorAll('.fade-in').forEach((el) => revealObserver.observe(el))
