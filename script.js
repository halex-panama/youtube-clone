const menuIcon = document.querySelector('.menu-icon'),
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

const themeClasses = document.querySelectorAll('header, .navbar, .video-container');

document.querySelector('.theme').addEventListener('click', () => {
  themeClasses.forEach(element => {
    element.classList.toggle('dark-mode');
  });
})

let videoGridHTML = '';

videoGrid.forEach((video, index) => {
  videoGridHTML += `
  <div class="video-grid">
    <div class="thumbnail-container">
      <img src="${videoGrid[index].thumbnail}">
      <div class="video-time">${videoGrid[index].time}</div>
    </div>
    <div class="info-container">
      <div class="channel-picture">
        <img src="${videoGrid[index].picture}">
      </div>
      <div class="text-container">
        <p class="video-title">${videoGrid[index].title}</p>
        <p class="channel-name">${videoGrid[index].name}</p>
        <p class="views">${videoGrid[index].views}</p>
      </div>
    </div>
</div>
  `;
});

document.querySelector('.video-container').innerHTML = videoGridHTML;