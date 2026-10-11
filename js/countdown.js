// Fecha objetivo: 47 días desde ahora (cámbiala si quieres fijar una fecha real)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 47);

const el = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    el.textContent = "T+0 – LA VANGUARDIA HA LLEGADO";
    el.style.color = "#ff1a1a";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);