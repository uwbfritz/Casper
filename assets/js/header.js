(function () {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function updateHeader() {
        const scrolled = window.scrollY > 60;
        header.setAttribute('data-scrolled', scrolled ? 'true' : 'false');
        if (header.dataset.theme === 'transparent') {
            header.dataset.themeState = scrolled ? 'solid' : 'transparent';
        }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, {passive: true});

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (header.dataset.theme !== 'transparent') return;
            header.dataset.themeState = entry.isIntersecting ? 'transparent' : 'solid';
        });
    });

    const hero = document.querySelector('.hero');
    if (hero) {
        observer.observe(hero);
    }
})();
