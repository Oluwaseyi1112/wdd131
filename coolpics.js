document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'none' || navLinks.style.display === '' ? 'block' : 'none';
    });
});
