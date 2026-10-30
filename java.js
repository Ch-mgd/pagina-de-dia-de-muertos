
document.addEventListener("DOMContentLoaded", function () {

    console.log("🌼 Página de Frida cargada");

    /* =====================================
       LLUVIA DE CEMPASÚCHIL
    ===================================== */

    const contenedor = document.getElementById("petalos");

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const colores = [
        "#ff9d00",
        "#ffb347",
        "#e87500",
        "#ffd166",
        "#f77f00"
    ];

    function crearPetalo() {

        if (!contenedor || movimientoReducido.matches) return;

        const petalo = document.createElement("div");
        petalo.classList.add("petalo");

        petalo.style.left = Math.random() * 100 + "%";

        const tamaño = Math.random() * 10 + 10;

        petalo.style.width = tamaño + "px";
        petalo.style.height = tamaño * 1.5 + "px";

        petalo.style.backgroundColor =
            colores[Math.floor(Math.random() * colores.length)];

        petalo.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        contenedor.appendChild(petalo);

        petalo.addEventListener("animationend", function () {
            petalo.remove();
        });
    }

    if (contenedor && !movimientoReducido.matches) {

        for (let i = 0; i < 15; i++) {
            setTimeout(crearPetalo, i * 120);
        }

        setInterval(crearPetalo, 350);
    }

    /* =====================================
       MENÚ HAMBURGUESA
    ===================================== */

    const btnMenu = document.getElementById("btnMenu");
    const menu = document.getElementById("menuPrincipal");
    const overlay = document.getElementById("overlayMenu");

    if (!btnMenu || !menu || !overlay) {
        console.warn("No se encontraron todos los elementos del menú.");
        return;
    }

    function cambiarMenu(abierto) {

        menu.classList.toggle("mostrar", abierto);
        overlay.classList.toggle("visible", abierto);
        btnMenu.classList.toggle("abierto", abierto);

        btnMenu.setAttribute("aria-expanded", String(abierto));

        btnMenu.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );
    }

    // Abrir o cerrar al pulsar el botón

    btnMenu.addEventListener("click", function () {

        const abierto = menu.classList.contains("mostrar");

        cambiarMenu(!abierto);
    });

    // Cerrar al tocar el fondo oscuro

    overlay.addEventListener("click", function () {
        cambiarMenu(false);
    });

    // Navegación entre secciones

    const enlaces = menu.querySelectorAll("nav a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            enlaces.forEach(function (item) {
                item.classList.remove("activo");
            });

            enlace.classList.add("activo");

            cambiarMenu(false);
        });
    });

    // Cerrar con Escape

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            cambiarMenu(false);
        }
    });

    // Cerrar si cambiamos de móvil a computadora

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {
            cambiarMenu(false);
        }
    });

});
