/* ════════════════════════════════════════
   main.js — Nico Tillmann Portfolio
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cur = document.getElementById('cur');
  if (cur && matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top  = my + 'px';
    });
    document.querySelectorAll('a, button, .sk, .tools-list span, .station-table tr').forEach(el => {
      el.addEventListener('mouseenter', () => cur.classList.add('hover'));
      el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
    });
  }


  /* ── NAV: scroll class ── */
  const nav = document.getElementById('site-nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ── BURGER MENU ── */
  const burger    = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
    mobileNav.setAttribute('aria-hidden', String(isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobile);
  });

  function closeMobile() {
    burger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  window.closeMobile = closeMobile;


  /* ── SCROLL REVEAL ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));


  /* ── SMOOTH ANCHOR SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeMobile();
      const top = target.getBoundingClientRect().top + scrollY
                - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ── MODALS ── */
  window.openModal = function (id) {
    const m = document.getElementById('modal-' + id);
    if (!m) return;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    m.querySelector('.modal-close')?.focus();
  };

  window.closeModal = function (id) {
    const m = document.getElementById('modal-' + id);
    if (!m) return;
    m.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) {
        m.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
      closeMobile();
    }
  });


  /* ── MARQUEE: pause on hover ── */
  const marquee = document.querySelector('.marquee-track');
  if (marquee) {
    const parent = marquee.closest('.marquee');
    parent?.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
    parent?.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
  }

});
