const themeSelector = document.getElementById('theme-selector');
const logo = document.getElementById('logo');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; // Ensure this image exists
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
