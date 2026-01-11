// ===== ТЁМНАЯ ТЕМА =====
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
    
    // Клик по кнопке
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Меняем иконку
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

