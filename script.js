let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
let videoContainer = document.querySelector('.video-container');
let overlay = document.querySelector('.overlay')

menuIcon.onclick = function(){
  navbar.classList.toggle('active');
  videoContainer.classList.toggle('shrink');
  overlay.classList.toggle('show');
}

overlay.onclick = function(){
  navbar.classList.remove('active');
  overlay.classList.remove('show')
}