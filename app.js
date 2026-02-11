const statusEl = document.getElementById("status");
const btn = document.getElementById("btn");

let ok = true;

btn.addEventListener("click", () => {
  ok = !ok;
  statusEl.textContent = ok ? "Estado: listo ✅" : "Estado: en progreso ⏳";
});
