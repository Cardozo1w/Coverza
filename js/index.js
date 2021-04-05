const navbar = document.querySelector("#navbar-main");

window.addEventListener("scroll", () => {
  if (window.scrollY > 145) {
    navbar.classList.add("bg-navar-oscuro");
  }
  if (window.scrollY < 145) {
    navbar.classList.remove("bg-navar-oscuro");
  }
});
