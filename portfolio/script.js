// espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- funcionalidad del texto dinámico ---
    const dynamicText = document.getElementById('dynamic-text');
     
    const titles = ['Software Developer', 'Data Enthusiast'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            dynamicText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;

        } else {

            dynamicText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => isDeleting = true, 2000); // Pausa de 2 seg
        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }

        const typeSpeed = isDeleting ? 100 : 150;
        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();


    //  funcionalidad del modo día/noche 
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // función para aplicar el tema (claro u oscuro)
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // comprueba si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // click en el botón
    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (document.body.classList.contains('dark-mode')) {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }
        // aplica el nuevo tema
        applyTheme(newTheme);
        // guarda la preferencia en localStorage
        localStorage.setItem('theme', newTheme);
    });

});