// Configuración de Partículas (Efecto de chispas)
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#f97316" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
});

// Menú Hamburguesa
const hb = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu");

hb.addEventListener("click", () => {
  menu.classList.toggle("active");
});
