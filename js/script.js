const footerYear = document.getElementById('footer-year');

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

const navCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.site-nav .nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bootstrapCollapse = window.bootstrap?.Collapse.getInstance(navCollapse);
      bootstrapCollapse?.hide();
    }
  });
});

const sections = Array.from(document.querySelectorAll('main section[id]'));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));