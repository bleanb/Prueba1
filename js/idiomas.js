document.addEventListener("DOMContentLoaded", function() {
    const BotonIdioma = document.getElementById('boton-desplazable-flags');
    const TextToChange = document.querySelectorAll("[data-section]");

    const ChangeLenguaje = async (language) => {
        try {
            const requestJson = await fetch(`../lenguajes/${language}.json`);
            const texts = await requestJson.json();
    
            for (const element of TextToChange) {
                const section = element.dataset.section;
                const value = element.dataset.value;
    
                if (texts[section] && texts[section][value]) {
                    element.innerHTML = texts[section][value];
                } else {
                    console.error(`Translation not found for section: ${section}, value: ${value}`);
                }
            }
            
            // Guarda el idioma seleccionado en localStorage
            localStorage.setItem('selectedLanguage', language);
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    };

    // Verifica el idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Default to 'es'
    ChangeLenguaje(savedLanguage);

    // Alterna el estado del botón de idioma
    if (savedLanguage === 'en') {
        BotonIdioma.classList.add('active'); // Cambia la clase activa si el idioma es inglés
    }

    BotonIdioma.onclick = function () {
        BotonIdioma.classList.toggle('active');

        if (BotonIdioma.classList.contains('active')) {
            ChangeLenguaje('en');
        } else {
            ChangeLenguaje('es');
        }
    };
});
