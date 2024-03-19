document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // 저장된 테마가 없으면 시스템 환경에 따른 테마 적용
    if (!currentTheme) {
        if(prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
        }
    // 저장된 테마가 있으면 해당 테마 적용
    } else {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let switchToTheme = theme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', switchToTheme);
        localStorage.setItem('theme', switchToTheme);

        themeToggle.innerHTML = switchToTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';
    })
})