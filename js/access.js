const MASTER_CODE = "TERRA-1-OMEGA-9-ROJO";

const VALID_CODES = [
  MASTER_CODE,
  "XK-77-ALFA",
  "OIX-ACCESO-1",
  "PROMETEO-2026"
];

const form = document.getElementById("access-form");
const input = document.getElementById("access-code");
const message = document.getElementById("access-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = input.value.trim().toUpperCase();

  if (!code) {
    message.textContent = "// ERROR: CAMPO VACÍO";
    return;
  }

  if (VALID_CODES.includes(code)) {
    message.style.color = "#4ade80";
    message.textContent = "// ACCESO CONCEDIDO. REDIRIGIENDO...";
    sessionStorage.setItem("ctd_access", "granted");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1200);
  } else {
    message.style.color = "#ff1a1a";
    message.textContent = "// ACCESO DENEGADO. INTENTO REGISTRADO.";
    input.value = "";
    document.querySelector(".terminal").animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 200 }
    );
  }
});

console.log("%c[OIX] ¿Buscas acceso? Prueba con: TERRA-1-OMEGA-9-ROJO",
  "color:#ff1a1a; font-family:monospace; font-size:14px;");