(() => {
  const assetBase = new URL('.', document.currentScript.src);
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stories = [...document.querySelectorAll('[data-bp-story]')];
  const sketch = document.querySelector('[data-bp-sketch]');
  let motion;
  let libraries;

  function loadScript(name) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL('vendor/' + name, assetBase);
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }

  function animateFrame(frame, gsap) {
    const written = new Map();
    const scene = gsap.context(() => {
      const tl = gsap.timeline();
      frame.querySelectorAll('[data-bp-draw]').forEach((line, i) => {
        if (typeof line.getTotalLength !== 'function') return;
        const length = line.getTotalLength();
        if (!length) return;
        tl.fromTo(line, {strokeDasharray: `${length} ${length}`, strokeDashoffset: length}, {strokeDashoffset: 0, duration: 0.58, ease: 'power1.inOut'}, i * 0.05);
      });
      frame.querySelectorAll('[data-bp-enter]').forEach((item, i) => {
        tl.fromTo(item, {opacity: 0}, {opacity: 1, duration: 0.34}, Math.min(i * 0.07, 0.48));
      });
      frame.querySelectorAll('[data-bp-type]').forEach((line, i) => {
        const value = line.textContent;
        written.set(line, value);
        const characters = Array.from(value);
        const cursor = {count: 0};
        tl.set(line, {opacity: 0}, 0);
        tl.set(line, {opacity: 1}, 0.15 + i * 0.16);
        tl.to(cursor, {count: characters.length, duration: 0.48, ease: 'none', onUpdate() {
          line.textContent = characters.slice(0, Math.floor(cursor.count)).join('');
        }}, 0.15 + i * 0.16);
      });
      const fail = frame.querySelector('[data-bp-fail]');
      if (fail) tl.fromTo(fail, {opacity: 0.35}, {opacity: 1, duration: 0.48}, 0.32);

      const installation = [...frame.querySelectorAll('[data-bp-install], [data-bp-remove]')];
      for (const item of installation) {
        const beat = Number(item.dataset.bpInstall);
        if (beat) tl.fromTo(item, {autoAlpha: 0}, {autoAlpha: 1, duration: 0.32}, (beat - 1) * 0.48);
        const remove = Number(item.dataset.bpRemove);
        if (remove) tl.to(item, {autoAlpha: 0, duration: 0.32}, (remove - 1) * 0.48);
      }
    }, frame);
    return () => {
      scene.revert();
      for (const [line, value] of written) line.textContent = value;
    };
  }

  function enhance(story, gsap, ScrollTrigger) {
    const frames = [...story.querySelectorAll('[data-bp-frame]')];
    const steps = [...story.querySelectorAll('[data-bp-step]')];
    const display = story.querySelector('[data-bp-display]');
    if (!display || !frames.length || frames.length !== steps.length) return;

    const controls = document.createElement('div');
    controls.className = 'bp-story-controls';
    controls.innerHTML = '<button type="button" aria-label="Previous stage">← Previous</button><span></span><button type="button" aria-label="Next stage">Next →</button>';
    const [previous, count, next] = controls.children;
    display.append(controls);
    story.classList.add('is-enhanced');

    let current = -1;
    let clearScene;
    function show(index) {
      if (index === current || index < 0 || index >= frames.length) return;
      clearScene?.();
      frames.forEach((frame, i) => { frame.hidden = i !== index; });
      steps.forEach((step, i) => {
        if (i === index) step.setAttribute('aria-current', 'step');
        else step.removeAttribute('aria-current');
      });
      current = index;
      count.textContent = `Stage ${index + 1} / ${frames.length}`;
      previous.disabled = index === 0;
      next.disabled = index === frames.length - 1;
      clearScene = animateFrame(frames[index], gsap);
    }

    const triggers = steps.map((step, i) => ScrollTrigger.create({
      trigger: step,
      start: 'top 76%',
      end: 'bottom 76%',
      onEnter: () => show(i),
      onEnterBack: () => show(i),
    }));
    function jump(index) {
      if (!triggers[index]) return;
      show(index);
      window.scrollTo({top: triggers[index].start + 2, behavior: 'instant'});
    }
    previous.addEventListener('click', () => jump(current - 1));
    next.addEventListener('click', () => jump(current + 1));
    const initial = triggers.findLastIndex(trigger => window.scrollY >= trigger.start);
    show(Math.max(0, initial));

    return () => {
      clearScene?.();
      triggers.forEach(trigger => trigger.kill());
      frames.forEach((frame, i) => { frame.hidden = i !== frames.length - 1; });
      steps.forEach(step => step.removeAttribute('aria-current'));
      controls.remove();
      story.classList.remove('is-enhanced');
    };
  }

  async function start() {
    if (preference.matches || motion) return;
    try {
      libraries ??= loadScript('gsap.min.js').then(() => loadScript('ScrollTrigger.min.js'));
      await libraries;
      if (preference.matches || motion) return;
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);
      motion = gsap.matchMedia();
      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const cleanups = stories.map(story => enhance(story, gsap, ScrollTrigger));
        const cad = sketch?.querySelector('[data-bp-cad]');
        if (cad) gsap.fromTo(cad, {clipPath: 'inset(0 100% 0 0)'}, {
          clipPath: 'inset(0 0% 0 0)', ease: 'none',
          scrollTrigger: {trigger: sketch, start: 'top 84%', end: 'center 48%', scrub: true},
        });
        ScrollTrigger.refresh();
        return () => cleanups.forEach(cleanup => cleanup?.());
      });
    } catch {
      // The static final frames and captions remain available without motion.
      motion?.revert();
      motion = undefined;
    }
  }

  const observed = [sketch, ...stories].filter(Boolean);
  if (!observed.length) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      start();
    }, {rootMargin: '600px'});
    observed.forEach(element => observer.observe(element));
  } else start();
  preference.addEventListener('change', () => { if (!preference.matches) start(); });
})();
