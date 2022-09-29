function alertaUsuario(texto) {
  alert(texto);
}

const button = document.querySelectorAll(".btn");

function darkMode(el) {
  el.classList.toggle("dark");
}

button.forEach((el) => {
  el.addEventListener("click", () => {
    alertaUsuario("Pagina em Construção");
    darkMode(el);
  });
});
