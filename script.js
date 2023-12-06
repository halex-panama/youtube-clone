let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let videoContainer = document.querySelector(".video-container")

menuIcon.onclick = function(){
  navbar.classList.toggle("active");
  videoContainer.classList.toggle("shrink")
}