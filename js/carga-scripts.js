let scriptLoaded = null;

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function checkScreenSize() {
        const isMobile = window.matchMedia("(max-width: 1020px)").matches;
        if (isMobile && scriptLoaded !== "responsive") {
            // Cargar header-responsive.js y eliminar header.js si es necesario
            if (scriptLoaded !== null) removeScript();
            loadScript("./js/mediaqwery/header-responsive.js").then(() => {
                scriptLoaded = "responsive";
            });
        } else if (!isMobile && scriptLoaded !== "desktop") {
            // Cargar header.js y eliminar header-responsive.js si es necesario
            if (scriptLoaded !== null) removeScript();
            loadScript("./js/header.js").then(() => {
                scriptLoaded = "desktop";
            });
        }
    }

    function removeScript() {
        const currentScript = scriptLoaded === "responsive" ? "./js/mediaqwery/header-responsive.js" : "./js/header.js";
        const scriptTag = document.querySelector(`script[src="${currentScript}"]`);
        if (scriptTag) {
            scriptTag.remove();
        }
    }
    // Cargar script según el tamaño de la pantalla al cargar la página
    checkScreenSize();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener('resize', checkScreenSize);