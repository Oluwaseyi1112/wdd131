document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const viewerTemplate = (src, alt) => `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;

    const handleResize = () => {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove('hide');
        } else {
            navLinks.classList.add('hide');
        }
    };

    const viewHandler = (event) => {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src.split('-')[0] + '-full.jpeg';
            const alt = event.target.alt;
            document.body.insertAdjacentHTML('afterbegin', viewerTemplate(src, alt));
            document.querySelector('.close-viewer').addEventListener('click', closeViewer);
        }
    };

    const closeViewer = () => {
        document.querySelector('.viewer').remove();
    };

    // Toggle navigation menu visibility
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Handle gallery image clicks
    document.querySelector('.gallery').addEventListener('click', viewHandler);
});
