const navbar = document.querySelector("#navbar-main");
const active = document.querySelectorAll('.active');

window.addEventListener("scroll", () => {
  if (window.scrollY > 145) {
    navbar.classList.add("bg-navar-oscuro");
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light')
    
  }
  if (window.scrollY < 145) {
    navbar.classList.remove("bg-navar-oscuro");
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-light')
  }
});

