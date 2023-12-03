let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = function(){
  navbar.classList.toggle("active");
}