const toggleSwitch = document.getElementById('theme-toggle');

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
    }
}

// Load saved theme from local storage
function loadTheme() {
    const isDark = JSON.parse(localStorage.getItem('darkTheme'));
    toggleSwitch.checked = isDark;
    setTheme(isDark);
}

// Switch theme on toggle
toggleSwitch.addEventListener('change', () => {
    const isDark = toggleSwitch.checked;
    localStorage.setItem('darkTheme', JSON.stringify(isDark));
    setTheme(isDark);
});

// Initialize theme on load
loadTheme();
