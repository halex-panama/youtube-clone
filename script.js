let menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header'),
    mobile = document.querySelector('.mobile'),
    themeButton = document.querySelector('.theme'),
    navbar = document.querySelector('.navbar'),
    videoContainer = document.querySelector('.video-container'),
    overlay = document.querySelector('.overlay'),
    showMoreButton = document.querySelector('.show-more'),
    subMenu = document.querySelector ('.sub-menu');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  videoContainer.classList.toggle('shrink');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  navbar.classList.remove('active');
  overlay.classList.remove('show');
});

showMoreButton.addEventListener('click', () => {
  subMenu.classList.toggle('open');
});

themeButton.addEventListener('click', () => {
  header.classList.toggle('dark-mode');
  mobile.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
  videoContainer.classList.toggle('dark-mode');
});

// menuIcon.onclick = function(){
//   navbar.classList.toggle('active');
//   videoContainer.classList.toggle('shrink');
//   overlay.classList.toggle('show');
// }

// overlay.onclick = function(){
//   navbar.classList.remove('active');
//   overlay.classList.remove('show')
// }

// showMoreButton.onclick = function(){
//   subMenu.classList.toggle('open');
// }

// themeButton.onclick = function(){
//   header.classList.toggle('dark-mode');
//   mobile.classList.toggle('dark-mode');
//   navbar.classList.toggle('dark-mode');
//   videoContainer.classList.toggle('dark-mode');
// }