// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll-tiny").style.width = "75px";
    document.getElementById("scroll-tiny").style.height = "75px";
    document.getElementById("scroll-tiny1").style.width = "75px";
    document.getElementById("scroll-tiny1").style.height = "75px";
    document.getElementById("scroll-tiny2").style.width = "75px";
    document.getElementById("scroll-tiny2").style.height = "75px";
    document.getElementById("scroll-tiny3").style.width = "75px";
    document.getElementById("scroll-tiny3").style.height = "75px";
    document.getElementById("scroll-tiny4").style.width = "75px";
    document.getElementById("scroll-tiny4").style.height = "75px";
    document.getElementById("scroll-tiny5").style.width = "75px";
    document.getElementById("scroll-tiny5").style.height = "75px";
    document.getElementById("menu-scroll").style.backgroundColor = "#1026388b";



  } else {
    document.getElementById("scroll-tiny").style.width = "90px";
    document.getElementById("scroll-tiny").style.height = "90px";
    document.getElementById("scroll-tiny1").style.width = "90px";
    document.getElementById("scroll-tiny1").style.height = "90px";
    document.getElementById("scroll-tiny2").style.width = "90px";
    document.getElementById("scroll-tiny2").style.height = "90px";
    document.getElementById("scroll-tiny3").style.width = "90px";
    document.getElementById("scroll-tiny3").style.height = "90px";
    document.getElementById("scroll-tiny4").style.width = "90px";
    document.getElementById("scroll-tiny4").style.height = "90px";
    document.getElementById("scroll-tiny5").style.width = "90px";
    document.getElementById("scroll-tiny5").style.height = "90px";
    document.getElementById("menu-scroll").style.backgroundColor = "transparent";

  }
}
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");



// menu
const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});


