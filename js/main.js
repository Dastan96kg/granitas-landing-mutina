// GRANITAS KG — Mutina-style minimal JS
// Burger menu + scroll reveal + accordion (native <details>) + smooth scroll (CSS).

(() => {
  'use strict';

  // ---------- BURGER MENU ----------
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('navMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- NAV SCROLLED STATE ----------
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Reveal animation is now CSS-only — no JS needed for visibility.

  // ---------- ACCORDION single-open behavior ----------
  const items = document.querySelectorAll('.faq__item');
  items.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        items.forEach(other => { if (other !== d) other.open = false; });
      }
    });
  });

  // ---------- MASONRY CELL → LIGHTBOX (simple) ----------
  document.querySelectorAll('.masonry__cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      e.preventDefault();
      const href = cell.getAttribute('href');
      if (!href) return;
      const lightbox = document.createElement('div');
      lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(18,18,18,0.92);z-index:200;display:grid;place-items:center;cursor:zoom-out;padding:32px;';
      const img = document.createElement('img');
      img.src = href;
      img.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;border-radius:3px;';
      lightbox.appendChild(img);
      lightbox.addEventListener('click', () => lightbox.remove());
      document.body.appendChild(lightbox);
    });
  });
})();
