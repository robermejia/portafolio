/* ================ Ocultar todas las secciones excepto las activas ================ */

(() =>{
   
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
      if(!section.classList.contains("active")){
        section.classList.add("hide");
      }
    })
  
  })();
  
  window.addEventListener("load", () =>{
    // preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
      document.querySelector(".preloader").style.display="none";
    },600)
  })
  
/* ================ Ocultar todas las secciones excepto las activas - fin ================ */

