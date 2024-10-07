
    const BotClose = document.getElementById('boton-cerrar-hamburguesa');
    const BotOpen = document.getElementById('menu-responsive');
    const ImgHeader = document.getElementById('img-header');
    const ResponsiveHeaderContent = document.getElementById('responsive-header-content');

        BotClose.addEventListener('click', function() {
            ResponsiveHeaderContent.classList.remove('appear');
            BotOpen.classList.remove('disappear');
            ImgHeader.classList.remove('disappear');
        });

        BotOpen.addEventListener('click', function() {
            ResponsiveHeaderContent.classList.add('appear');
            BotOpen.classList.add('disappear');
            ImgHeader.classList.add('disappear');
        });

