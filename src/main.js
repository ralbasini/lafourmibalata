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

// ── Parallax on banner photos: the image drifts slower than the page (skipped for reduced motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const frames = Array.from(document.querySelectorAll('.parallax'))
  const SPEED = 0.08 // fraction of the frame's offset from viewport centre
  let ticking = false

  function updateParallax () {
    const vh = window.innerHeight
    frames.forEach((frame) => {
      const rect = frame.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > vh) return
      const offset = rect.top + rect.height / 2 - vh / 2
      frame.firstElementChild.style.transform = `translate3d(0, ${(-offset * SPEED).toFixed(1)}px, 0)`
    })
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateParallax) }
  }, { passive: true })
  window.addEventListener('resize', updateParallax)
  updateParallax()
}
