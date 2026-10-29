const projectInfo = {
  sinikukiss: {
    eyebrow: 'WEB DEVELOPMENT · SOURCE REVIEWED', title: 'SiNiKukiss — Cookies E-Commerce Website',
    description: 'A cookies storefront built with plain HTML, CSS, and JavaScript. Source code and the included README were reviewed for this portfolio update.',
    features: ['Product catalog with six cookie variants and product imagery.', 'Cart quantities, item totals, and saved cart state using localStorage.', 'WhatsApp order message assembled from cart items and customer details.', 'A mood-based flavor recommendation flow is present in the JavaScript source.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'WhatsApp link'],
    note: 'A live demo or public repository URL was not included in the supplied files, so no external project button is shown.'
  },
  'toko-craft': {
    eyebrow: 'WEB DEVELOPMENT · SOURCE REVIEWED', title: 'Toko Craft — Handmade Product Store',
    description: 'A static handmade-product store built with HTML, CSS, and JavaScript. The project includes product data and separate scripts for store behavior and craft illustrations.',
    features: ['Product data organized into bead, crochet, pipe-cleaner, and combined-craft categories.', 'Product filtering and category controls are described in the project source.', 'Craft idea/customization interactions are separated into application scripts.', 'Ordering flow supports WhatsApp when configured, with clipboard fallback described in the README.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SVG illustrations'],
    note: 'Some listed product prices are explicitly described in the README as examples. No live demo or repository URL was provided.'
  },
  estimate: {
    eyebrow: 'WEB APPLICATION · SOURCE REVIEWED', title: 'EstiMate — Budget & Material Planning App',
    description: 'A Next.js application for planning budgets and material requirements. The included source uses React, TypeScript, Supabase client libraries, and app routes for authentication and project management.',
    features: ['Budget planning templates and generated material lists.', 'Project creation, project search, and material records in dashboard source.', 'Login, registration, password recovery, and auth callback routes are present.', 'Supabase calls are present for authentication and project/material persistence.'],
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    note: 'The source includes Supabase integration, but no environment file or live backend configuration was provided. Production readiness and live authentication/database behavior have not been verified.'
  },
  'docker-api': {
    eyebrow: 'APPLICATION · DETAILS TO CONFIRM', title: 'Docker API & PostgreSQL',
    description: 'This project is retained as requested, based on its supplied project title.',
    features: ['The relevant project source and documentation were not included in PROJECT.zip.', 'API endpoints, container configuration, database schema, and runtime behavior could not be reviewed.'],
    tech: ['Docker', 'API', 'PostgreSQL'],
    note: 'Technical details and a repository/demo link should be added after the project source is provided or its existing documentation is confirmed.'
  },
  'computational-biology': {
    eyebrow: 'ACADEMIC PROJECT · DETAILS TO CONFIRM', title: 'Computational Biology',
    description: 'This academic project is retained as requested, based on its supplied project title.',
    features: ['The relevant project source, notebook, and documentation were not included in PROJECT.zip.', 'Methods, data sources, analysis steps, and results could not be verified from the provided archive.'],
    tech: ['Computational biology'],
    note: 'Add a verified project summary, technologies, and an appropriate repository or notebook link once the source files are available.'
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));

const filterButtons = [...document.querySelectorAll('.filter-button')];
const projectCards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projectCards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

const dialog = document.querySelector('#project-dialog');
const closeDialog = () => dialog.close();
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const item = projectInfo[button.dataset.open];
  if (!item) return;
  document.querySelector('#dialog-eyebrow').textContent = item.eyebrow;
  document.querySelector('#dialog-title').textContent = item.title;
  document.querySelector('#dialog-description').textContent = item.description;
  const featureList = document.querySelector('#dialog-features');
  featureList.replaceChildren(...item.features.map(feature => { const li = document.createElement('li'); li.textContent = feature; return li; }));
  const techList = document.querySelector('#dialog-tech');
  techList.replaceChildren(...item.tech.map(tech => { const span = document.createElement('span'); span.textContent = tech; return span; }));
  document.querySelector('#dialog-note').textContent = item.note;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });

const sections = [...document.querySelectorAll('main section[id]')];
const navItems = [...document.querySelectorAll('.nav-link')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500), { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
document.querySelector('#year').textContent = new Date().getFullYear();
