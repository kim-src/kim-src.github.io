document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // 로컬 스토리지에 테마 상태를 저장하여 사용자가 사이트를 재방문할 때 기억하게 함
        if(document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });
  
      // 페이지 로드 시 로컬 스토리지에서 테마 상태를 불러와 적용
      const savedTheme = localStorage.getItem('theme');
      if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    }
  });
  