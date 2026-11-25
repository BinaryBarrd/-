// Mobile menu: toggles the full-screen nav overlay on small screens.
(() => {
    const nav = document.querySelector('nav');
    const btn = nav && nav.querySelector('.nav-toggle');
    if (!btn) return;

    const setOpen = open => {
        nav.classList.toggle('open', open);
        document.body.classList.toggle('nav-open', open);
        btn.textContent = open ? 'Close' : 'Menu';
        btn.setAttribute('aria-expanded', open);
    };

    btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) setOpen(false); });
})();
