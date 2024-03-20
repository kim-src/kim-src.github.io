document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 저장된 테마가 없으면 시스템 환경에 따른 테마 적용
    let theme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // 페이지 로드 시 현재 테마에 맞게 data-mode 속성 설정
    document.documentElement.setAttribute('data-mode', theme);
    // 토글 버튼 아이콘을 현재 테마에 맞게 설정
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="far fa-sun"></i>';
    
    // 토글 아이콘에 클릭 이벤트 리스너 추가
    themeToggle.addEventListener('click', () => {
        // 현재 적용된 테마를 기반으로 전환할 테마 결정
        let currentTheme = document.documentElement.getAttribute('data-mode');
        let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // data-mode 속성을 업데이트하여 테마 전환
        document.documentElement.setAttribute('data-mode', switchToTheme);
        // localStorage에 새 테마 저장
        localStorage.setItem('theme', switchToTheme);
        
        // 토글 아이콘 업데이트
        themeToggle.innerHTML = switchToTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';
    })
})
