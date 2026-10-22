// Smart City Infra Developers — interaction layer.
// Everything here is progressive: with JS off the page still reads and the
// carousel is a horizontal scroller you can swipe.

(() => {
  // Only hide-then-reveal when this script is actually running. If it throws,
  // or never loads, the page stays fully visible.
  document.documentElement.classList.add('js');
  const calm = matchMedia('(prefers-reduced-motion: reduce)');

  /* ── Reading tape ─────────────────────────────────────────────────── */
  const tape = document.createElement('div');
  tape.className = 'tape';
  document.body.appendChild(tape);

  const head = document.querySelector('.site-head');
  let ticking = false;

  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    tape.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    head.classList.toggle('is-stuck', scrollY > 24);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── Scroll reveal ────────────────────────────────────────────────── */
  const reveal = document.querySelectorAll('.sec-head, .project, .more, .works li, .plates, .band div, .track li, .contact__grid > *');
  reveal.forEach(el => el.classList.add('r'));

  if (calm.matches) {
    reveal.forEach(el => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const group = [...entry.target.parentElement.children].filter(c => c.classList.contains('r'));
        const i = Math.max(0, group.indexOf(entry.target));
        entry.target.style.setProperty('--d', `${Math.min(i, 5) * 70}ms`);
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    reveal.forEach(el => io.observe(el));
    // Failsafe: nothing stays hidden, whatever the observer does.
    setTimeout(() => reveal.forEach(el => el.classList.add('is-in')), 4000);
  }

  /* ── Carousel ─────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-carousel]').forEach(root => {
    const track  = root.querySelector('[data-track]');
    const slides = [...root.querySelectorAll('[data-slide]')];
    const dots   = root.querySelector('[data-dots]');
    const wait   = Number(root.dataset.interval || 5000);
    if (!slides.length) return;

    root.style.setProperty('--dur', `${wait}ms`);

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Photograph ${i + 1} of ${slides.length}`);
      b.addEventListener('click', () => { stop(); go(i); });
      dots.appendChild(b);
    });
    const buttons = [...dots.children];

    let at = 0, timer = null;

    const at_out = root.querySelector('[data-at]');
    const of_out = root.querySelector('[data-of]');
    if (of_out) of_out.textContent = String(slides.length);

    const paint = () => {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === at));
      if (at_out) at_out.textContent = String(at + 1);
      buttons.forEach((b, i) => {
        const on = i === at;
        b.setAttribute('aria-current', String(on));
        // restart the tick animation on the active dot
        if (on) { b.style.animation = 'none'; void b.offsetWidth; b.style.animation = ''; }
      });
    };

    const go = (i, smooth = true) => {
      at = (i + slides.length) % slides.length;
      track.scrollTo({ left: slides[at].offsetLeft - track.offsetLeft, behavior: smooth && !calm.matches ? 'smooth' : 'auto' });
      paint();
    };

    const play = () => {
      if (calm.matches || timer) return;
      root.classList.remove('is-paused');
      timer = setInterval(() => go(at + 1), wait);
    };
    const stop = () => {
      clearInterval(timer); timer = null;
      root.classList.add('is-paused');
    };

    root.querySelector('[data-next]').addEventListener('click', () => { stop(); go(at + 1); });
    root.querySelector('[data-prev]').addEventListener('click', () => { stop(); go(at - 1); });

    // Pause when a person is clearly engaged, resume when they leave.
    root.addEventListener('pointerenter', stop);
    root.addEventListener('pointerleave', play);
    root.addEventListener('focusin', stop);
    track.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); stop(); go(at + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); stop(); go(at - 1); }
    });

    // A swipe or scroll wins over the timer, and sets the index from reality.
    let settle;
    track.addEventListener('scroll', () => {
      clearTimeout(settle);
      settle = setTimeout(() => {
        const mid = track.scrollLeft + track.clientWidth / 2;
        let best = 0, dist = Infinity;
        slides.forEach((s, i) => {
          const c = s.offsetLeft - track.offsetLeft + s.clientWidth / 2;
          if (Math.abs(c - mid) < dist) { dist = Math.abs(c - mid); best = i; }
        });
        if (best !== at) { at = best; paint(); }
      }, 120);
    }, { passive: true });

    // Only run while it is on screen.
    new IntersectionObserver(entries => {
      entries[0].isIntersecting ? play() : stop();
    }, { threshold: 0.4 }).observe(root);

    document.addEventListener('visibilitychange', () => document.hidden ? stop() : play());

    paint();
  });

  /* ── Lightbox for carousel photographs ────────────────────────────── */
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Photograph');
  lb.innerHTML = `
    <button class="lb__close" type="button" aria-label="Close photograph">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      Close
    </button>
    <img alt=""><p class="lb__cap"></p>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb__cap');
  let lastFocus = null;

  const openLb = (src, alt, cap) => {
    lastFocus = document.activeElement;
    lbImg.src = src; lbImg.alt = alt;
    lbCap.textContent = cap ? `${cap} — press Esc or click anywhere to close` : 'Press Esc or click anywhere to close';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb__close').focus();
  };
  const closeLb = () => {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('[data-slide]').forEach(fig => {
    const img = fig.querySelector('img');
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openLb(img.src, img.alt, fig.querySelector('figcaption')?.textContent);
    });
  });

  lb.addEventListener('click', () => closeLb());
  addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb(); });

})();
