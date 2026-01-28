/* --- PARTE 1: CONFIGURACIÓN DE PARTÍCULAS --- */
/* Esta parte controla los puntitos naranjas del fondo */
particlesJS("particles-js", {
  particles: {
    number: { value: 80 }, // Cuántos puntos hay
    color: { value: "#f97316" }, // El color naranja de tu marca
    line_linked: { enable: true, color: "#f97316" }, // Las líneas que los unen
  },
});

/* --- PARTE 2: EL MENÚ DESPLEGABLE (Lógica) --- */
/* Paso A: "Atrapamos" los elementos del HTML por su ID o Clase */
const menuBoton = document.querySelector("#mobile-menu"); // El botón de 3 rayas
const listaEnlaces = document.querySelector(".navbar-menu"); // La lista de enlaces

/* Paso B: Escuchamos el "Click" */
menuBoton.addEventListener("click", () => {
  // Aquí le decimos: "Si la lista no tiene la clase 'active', ponla; si ya la tiene, quítala"
  listaEnlaces.classList.toggle("active");

  // Esto es para que el botón de 3 rayas pueda animarse (opcional)
  menuBoton.classList.toggle("is-active");
});

/* Paso C: Cerrar el menú al tocar un enlace */
/* Queremos que si el usuario toca "Productos", el menú se cierre solo */
document.querySelectorAll(".nav-link").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    listaEnlaces.classList.remove("active");
  });
});
