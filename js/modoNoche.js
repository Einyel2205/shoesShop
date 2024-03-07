// JavaScript para activar el modo noche y cambiar los estilos
function toggleNightMode() {
    let body = document.body;
    body.classList.toggle("night-mode");

    let footer = document.querySelector("footer");
    footer.classList.toggle("night-mode");

    let header = document.querySelector("header");
    header.classList.toggle("night-mode");

}

// Agregar un listener al botón de modo noche
let nightModeButton = document.getElementById("nightModeButton");
nightModeButton.addEventListener("click", toggleNightMode);