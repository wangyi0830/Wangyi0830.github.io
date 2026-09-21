(() => {
  const PROJECTS = [
    {
      img: 'assets/images/cup-cover.jpg',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tagsKey: 'projects.item1.tags',
      link: 'pages/projects/project1.html',
    },
    {
      img: 'assets/images/miniprogram-cover.jpg',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tagsKey: 'projects.item2.tags',
      link: 'pages/projects/project2.html',
    },
    {
      img: 'assets/images/heilan-cover.jpg',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tagsKey: 'projects.item3.tags',
      link: 'pages/projects/project3.html',
    },
    {
      img: 'assets/images/hok-cover.jpg',
      titleKey: 'projects.item4.title',
      descKey: 'projects.item4.desc',
      tagsKey: 'projects.item4.tags',
      link: 'pages/projects/project4.html',
    },
    {
      img: 'assets/images/portfolio-cover.jpg',
      titleKey: 'projects.item5.title',
      descKey: 'projects.item5.desc',
      tagsKey: 'projects.item5.tags',
      link: 'pages/portfolio/portfolio.html',
    },
  ];

  const EXPERIENCE_ITEMS = [
    { key: 'experience.item1' },
    { key: 'experience.item2' },
    { key: 'experience.item3' },
    { key: 'experience.item4' },
  ];

  const CAMPUS_ITEMS = [
    { key: 'campus.item1' },
    { key: 'campus.item2' },
    { key: 'campus.item3' },
  ];

  const TIMELINE_EVENTS = [
    'timeline.event1',
    'timeline.event2',
    'timeline.event3',
    'timeline.event4',
    'timeline.event5',
    'timeline.event6',
    'timeline.event7',
    'timeline.event8',
    'timeline.event9',
    'timeline.event10',
  ];

  const TECH_STACK = [
    {
      category: 'skills.Content Creation',
      items: [
        { name: '摄影', icon: 'fas fa-camera' },
        { name: '摄像', icon: 'fas fa-video' },
        { name: '文案', icon: 'fas fa-feather' },
        { name: '策划', icon: 'fas fa-lightbulb' },
        { name: 'Photoshop/Canva', icon: 'fas fa-palette' },
        { name: '广告营销 & 推广', icon: 'fas fa-bullhorn' },
      ],
    },
    {
      category: 'skills.Data Analysis',
      items: [
        { name: 'Excel 数据透视表与函数', icon: 'fas fa-table' },
        { name: 'Python', icon: 'fas fa-code' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'SPSS', icon: 'fas fa-chart-line' },
        { name: 'Stata', icon: 'fas fa-chart-pie' },
        { name: 'Gephi', icon: 'fas fa-project-diagram' },
        { name: 'R', icon: 'fas fa-chart-bar' },
      ],
    },
    {
      category: 'skills.Post-Production',
      items: [
        { name: 'Premiere Pro', icon: 'fas fa-film' },
        { name: '剪映专业版', icon: 'fas fa-scissors' },
        { name: 'After Effects', icon: 'fas fa-magic' },
        { name: 'Final Cut Pro', icon: 'fas fa-cut' },
      ],
    },
    {
      category: 'skills.AI Applications',
      items: [
        { name: 'Vibe Coding', icon: 'fas fa-layer-group' },
        { name: '即梦', icon: 'fas fa-wand-magic-sparkles' },
        { name: '可灵', icon: 'fas fa-clapperboard' },
        { name: '海螺', icon: 'fas fa-water' },
        { name: 'Max', icon: 'fas fa-cubes' },
        { name: 'Runway Gen', icon: 'fas fa-robot' },
      ],
    },
    {
      category: 'skills.E-commerce & Platform Ops',
      items: [
        { name: 'GMV / 转化率 / ROI 分析', icon: 'fas fa-chart-simple' },
        { name: '公众号 / 视频号运营', icon: 'fas fa-hashtag' },
        { name: 'Instagram 运营', icon: 'fab fa-instagram' },
        { name: '美团 / 大众点评平台规则', icon: 'fas fa-store' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fas fa-envelope', key: 'contact.email', link: 'mailto:yolowyi@163.com' },
    { icon: 'fab fa-github', key: 'contact.github', link: 'https://github.com/wangyi0830' },
    { icon: 'fab fa-tiktok', key: 'contact.tiktok', link: 'https://v.douyin.com/_R3UOL4Qckg/' },
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function t(key) {
    return window.i18n?.get ? window.i18n.get(key) : key;
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      const next = current === 'en' ? 'zh' : 'en';
      window.i18n.changeLang(next);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tags = t(project.tagsKey) || [];
      const tagsHtml = renderProjectTags(tags);

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${tagsHtml}
          <a href="${project.link}" class="project-link">${t('projects.viewDetail')}</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initExperience() {
    const grid = qs('.opensource-grid');
    if (!grid) return;
    clear(grid);

    EXPERIENCE_ITEMS.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];

      const card = document.createElement('div');
      card.className = 'os-card';
      card.innerHTML = `
        <div class="os-header">
          <div class="os-title">${t(`${item.key}.title`)}</div>
          <span class="os-meta">${t(`${item.key}.meta`)}</span>
        </div>
        <p class="os-desc">${t(`${item.key}.desc`)}</p>
        <div class="os-tags">${renderSpanTags(tags, 'os-tag')}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initCampus() {
    const grid = qs('.campus-grid');
    if (!grid) return;
    clear(grid);

    CAMPUS_ITEMS.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];

      const card = document.createElement('div');
      card.className = 'campus-card';
      card.innerHTML = `
        <div class="campus-header">
          <div class="campus-title">${t(`${item.key}.title`)}</div>
        </div>
        <div class="campus-meta">${t(`${item.key}.meta`)}</div>
        <p class="campus-desc">${t(`${item.key}.desc`)}</p>
        <div class="campus-tags">${renderSpanTags(tags, 'campus-tag')}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${t(`${key}.date`)}</span>
        <div class="timeline-content">
          <h3>${t(`${key}.title`)}</h3>
          <p>${t(`${key}.desc`)}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${s.name}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const label = t(contact.key);
      const item = document.createElement('a');
      item.className = 'intro-contact-link';
      item.href = contact.link;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.title = label;
      item.setAttribute('aria-label', label);
      item.innerHTML = `<i class="${contact.icon}"></i>`;
      container.appendChild(item);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        let target;
        try {
          target = qs(href);
        } catch {
          return;
        }

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.project-detail-card'),
      ...qsa('.projects-grid .card'),
      ...qsa('.opensource-grid .os-card'),
      ...qsa('.campus-grid .campus-card'),
      ...qsa('.timeline-container .timeline-item'),
      ...qsa('.skills-wrapper .skill-category'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
  });

  window.addEventListener('i18nLoaded', () => {
    initProjects();
    initExperience();
    initCampus();
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
