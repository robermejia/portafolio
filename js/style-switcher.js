/* ================ INTERRUPTOR================ */

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ================ TEMAS DE COLORES ================ */
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}

function changeColor() {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem("color") === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// checking if 'color' key exists
if (localStorage.getItem("color") !== null) {
  changeColor();
}

/* ================  TEMA CLARO Y OSCURO ================ */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcon();
});

function themeMode() {
  // checking if 'theme' key exists
  if (localStorage.getItem("theme") !== null) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }
  updateIcon();
}
themeMode();

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
}

/* ================  Logo light and dark ================ */
// let imagenLogo = "dark";

// function miFuncion() {
//   var logotipo = document.getElementById("logo-imagen");
//   if (imagenLogo == "dark") {
//     logotipo.src = "https://xn--robertio-j3a.com/img/logos/logo-light.png";
//     imagenLogo = "light";
//   } else {
//     logotipo.src = "https://xn--robertio-j3a.com/img/logos/logo-dark.png";
//     imagenLogo = "dark";
//   }
// }

//Esperamos a que la pagina este completamente cargada
window.addEventListener('load',() => {
  var logotipo = document.getElementById('logo-imagen');
  var image_storage = window.localStorage; //Obtenemos el sessionStorage
  //Comprobamos si ya existe algun tema guardado en el sessionStorage y si existe usamos ese tema
  if (image_storage.getItem('theme')){
      logotipo.src = image_storage.getItem('theme_url');
  }
  //Le he puesto un id al boton para añadirle un listener (me parece mejor asi para no tener codigo javascript dentro del html)
  var boton = document.getElementById('boton');
  boton.addEventListener('click', () => {
      //Validamos el tema, si esta en dark al hacer click se hara light y viceversa
      if (image_storage.getItem('theme') == 'light'){
          logotipo.src = 'img/logos/logo-dark.png';
          image_storage.setItem('theme_url','img/logos/logo-dark.png');
          image_storage.setItem('theme','light');
      }else{
          logotipo.src = 'img/logos/logo-light.png';
          image_storage.setItem('theme_url','img/logos/logo-light.png');
          image_storage.setItem('theme','dark');
      }
  });
});

