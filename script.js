// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
  const label = document.querySelector('.theme-label');
  if (label) {
    label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeLabel();
  });
}

// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.textContent = `${cfg.role} at ${cfg.university}`;
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });

  if (cfg.name) {
    document.title = `${cfg.name} | Academic Homepage`;
    const metaTitle = document.querySelector('meta[property="og:title"]');
    const footer = document.getElementById('cfg-footer');
    if (metaTitle) metaTitle.setAttribute('content', `${cfg.name} | Academic Homepage`);
    if (footer) footer.textContent = `© 2026 ${cfg.name}.`;
  }

  if (cfg.bio) {
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (metaDesc) metaDesc.setAttribute('content', cfg.bio);
    if (ogDesc) ogDesc.setAttribute('content', cfg.bio);
  }

  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) {
      av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name || 'Profile photo'}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
    }
  }
}

function renderAuthors(authors, highlightedName, authorMarks = {}) {
  if (!authors) return '';
  return authors.split(',').map(rawName => {
    const name = rawName.trim();
    const displayName = name === highlightedName ? `<strong>${name}</strong>` : name;
    const mark = authorMarks[name];
    return mark ? `${displayName}<sup class="pub-author-mark">${mark}</sup>` : displayName;
  }).join(', ');
}

function renderLinks(links) {
  return Object.entries(links || {})
    .filter(([, value]) => value)
    .map(([key, value]) => `<a href="${value}" class="pub-link" target="_blank" rel="noopener noreferrer">${key.toUpperCase()}</a>`)
    .join('');
}

function primaryLink(links) {
  if (!links) return '#';
  return links.project || links.page || links.pdf || links.code || Object.values(links).find(Boolean) || '#';
}

function renderContact(cfg) {
  const contact = document.getElementById('cfg-contact');
  if (!contact) return;

  const linkItems = [];
  if (cfg.email) {
    linkItems.push(`<a class="contact-item" href="mailto:${cfg.email}">Email</a>`);
  }
  if (cfg.links?.scholar) {
    linkItems.push(`<a class="contact-item" href="${cfg.links.scholar}" target="_blank" rel="noopener noreferrer">Google Scholar</a>`);
  }
  if (cfg.links?.github) {
    linkItems.push(`<a class="contact-item" href="${cfg.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  }
  if (cfg.links?.cv) {
    linkItems.push(`<a class="contact-item" href="${cfg.links.cv}" target="_blank" rel="noopener noreferrer">CV</a>`);
  }

  contact.innerHTML = `
    <p class="contact-intro">
    Feel free to contact me if you are interested in my work or potential research collaboration.
    <br>
    Email: <a href="mailto:${USER_CONFIG.email}">${USER_CONFIG.email}</a></p>
    <div class="contact-links">${linkItems.join('')}</div>
  `;
}

function populateLists(cfg) {
  const pubList = document.getElementById('cfg-publications');
  if (pubList && cfg.publications?.length) {
    pubList.innerHTML = cfg.publications.map(p => {
      const link = primaryLink(p.links);
      const imageBlock = p.image
        ? `<a href="${link}" class="pub-image" target="_blank" rel="noopener noreferrer"><img src="${p.image}" alt="${p.title} thumbnail"></a>`
        : `<div class="pub-image pub-image-placeholder">Image</div>`;

      return `
        <article class="pub-card" data-year="${p.year}">
          <div class="pub-year">${p.year}</div>
          <div class="pub-main">
            ${imageBlock}
            <div class="pub-content">
              <div class="pub-header">
                <h3 class="pub-title">${p.title}</h3>
                <div class="pub-links">${renderLinks(p.links)}</div>
              </div>
              <p class="pub-authors">${renderAuthors(p.authors, cfg.name, p.authorMarks)}</p>
              ${p.authorNote ? `<p class="pub-author-note">${p.authorNote}</p>` : ''}
              <p class="pub-venue">${p.venue}</p>
              ${p.abstract ? `<p class="pub-abstract">${p.abstract}</p>` : ''}
            </div>
          </div>
        </article>`;
    }).join('');
  }

  const interestGrid = document.getElementById('cfg-research-interests') || document.getElementById('cfg-projects');
  const interests = cfg.researchInterests || cfg.projects || [];
  if (interestGrid && interests.length) {
    interestGrid.innerHTML = interests.map(item => `
      <article class="project-card">
        <h3 class="project-title">${item.name}</h3>
        <p class="project-desc">${item.desc}</p>
        <div class="project-tags">${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </article>`).join('');
  }

  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }

  const eduGrid = document.getElementById('cfg-education');
  if (eduGrid && cfg.education?.length) {
    eduGrid.innerHTML = cfg.education.map(e => `
      <div class="education-item">
        <div class="education-period">${e.period}</div>
        <h3 class="education-degree">${e.degree}</h3>
        <p class="education-institution">${e.institution}</p>
      </div>`).join('');
  }

  renderContact(cfg);
}
