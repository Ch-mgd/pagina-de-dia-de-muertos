
// =======================================
// OFRENDA DIGITAL PARA FRIDA
// LLUVIA DE CEMPASÚCHIL
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌼 Ofrenda de Frida iniciada correctamente");

    const contenedor = document.getElementById("petalos");

    // Comprobar que existe el contenedor
    if (!contenedor) {
        console.error("No se encontró el contenedor de pétalos");
        return;
    }

    // Respetar preferencias de movimiento reducido
    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    // COLORES DE LOS PÉTALOS
    const colores = [
        "#ef8b17",
        "#ffa52c",
        "#d96b08",
        "#ffbd45",
        "#e77c16"
    ];

    // FUNCIÓN PARA CREAR UN PÉTALO

    function crearPetalo() {

        if (movimientoReducido.matches) return;

        const petalo = document.createElement("div");

        petalo.classList.add("petalo");

        // Posición horizontal aleatoria
        const posicion = Math.random() * 100;

        petalo.style.left = posicion + "%";

        // Tamaño aleatorio
        const tamaño = Math.random() * 10 + 8;

        petalo.style.width = tamaño + "px";
        petalo.style.height = tamaño * 1.5 + "px";

        // Duración de la caída
        const duracion = Math.random() * 5 + 6;

        petalo.style.animationDuration = duracion + "s";

        // Elegir color aleatorio
        const colorAleatorio = Math.floor(
            Math.random() * colores.length
        );

        petalo.style.background = colores[colorAleatorio];

        // Transparencia
        petalo.style.opacity = Math.random() * 0.3 + 0.6;

        // Agregar pétalo a la página
        contenedor.appendChild(petalo);

        // Eliminarlo al terminar su animación
        petalo.addEventListener("animationend", () => {
            petalo.remove();
        });

    }

    // INICIAR LLUVIA

    if (!movimientoReducido.matches) {

        // Crear algunos pétalos al inicio
        for (let i = 0; i < 12; i++) {
            setTimeout(crearPetalo, i * 180);
        }

        // Continuar creando pétalos
        setInterval(crearPetalo, 450);
    }

    // =======================================
    // ANIMACIÓN DEL MENÚ
    // =======================================

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            enlaces.forEach(item => {
                item.classList.remove("activo");
            });

            enlace.classList.add("activo");

        });

    });

});
