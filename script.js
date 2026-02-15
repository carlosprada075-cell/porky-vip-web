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
/* Ahora el "botón" es el LOGO (la P + Porky VIP) */
const menuBoton = document.getElementById("logo-toggle"); // el logo
const listaEnlaces = document.getElementById("nav-menu"); // el UL del menú

// Si por algún motivo no existen, no ejecutamos nada para evitar errores
if (menuBoton && listaEnlaces) {
  /* Paso B: Escuchamos el "Click" */
  menuBoton.addEventListener("click", () => {
    // Abrir/cerrar el menú
    listaEnlaces.classList.toggle("open");
  });

  /* Paso C: Cerrar el menú al tocar un enlace */
  document.querySelectorAll("#nav-menu .nav-link").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      listaEnlaces.classList.remove("open");
    });
  });

  /* Extra: cerrar si haces clic fuera del menú (opcional, recomendado) */
  document.addEventListener("click", (e) => {
    const clickDentro =
      menuBoton.contains(e.target) || listaEnlaces.contains(e.target);
    if (!clickDentro) listaEnlaces.classList.remove("open");
  });
}
function copyCode(button, id) {
  const codeElement = document.getElementById(id);
  if (!codeElement) return;

  const text = codeElement.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.innerText;

    button.innerText = "✔ Copiado";
    button.style.background = "linear-gradient(135deg, #00ffae, #00c78c)";
    button.style.color = "#000";

    setTimeout(() => {
      button.innerText = originalText;
      button.style.background = "";
      button.style.color = "";
    }, 1500);
  });
}
// ===== FREE PRODUCT LOGIC =====

let freeStock = 50; // 👈 cantidad inicial

const stockLabel = document.getElementById("free-stock-count");
const downloadBtn = document.getElementById("free-download-btn");
const copyButtons = document.querySelectorAll(".copy-btn");

function updateFreeStock() {
  if (freeStock > 0) {
    stockLabel.textContent = `${freeStock} disponibles`;
  } else {
    stockLabel.textContent = "AGOTADO";
    downloadBtn.classList.add("disabled");
    downloadBtn.removeAttribute("href");
  }
}

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const codeText = btn.dataset.code;

    navigator.clipboard.writeText(codeText);

    btn.textContent = "Copiado";
    btn.disabled = true;

    btn.closest(".code-item").classList.add("used");

    if (freeStock > 0) {
      freeStock--;
      updateFreeStock();
    }
  });
});

updateFreeStock();
