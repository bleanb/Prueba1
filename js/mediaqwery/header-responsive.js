
    const BotClose = document.getElementById('boton-cerrar-hamburguesa');
    const BotOpen = document.getElementById('menu-responsive');
    const ImgHeader = document.getElementById('img-header');
    const ResponsiveHeaderContent = document.getElementById('responsive-header-content');

        BotClose.addEventListener('click', function() {
            ResponsiveHeaderContent.classList.remove('appear2');
            setTimeout(() => {
                BotOpen.classList.remove('disappear');
                ImgHeader.classList.remove('disappear');
            }, 200); // Se cierra después del retardo
        });

        BotOpen.addEventListener('click', function() {
            ResponsiveHeaderContent.classList.add('appear2');
            setTimeout(() => {
                BotOpen.classList.add('disappear');
                ImgHeader.classList.add('disappear');
            }, 500); // Se cierra después del retardo
        });

