const images = document.querySelectorAll('.header-image img');
let currentImageIndex = 0;
let timerId;

function showNextImage() {
  const currentImage = images[currentImageIndex];
  currentImage.classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[currentImageIndex];
  nextImage.classList.add('active');
}

function showPrevImage() {
  const currentImage = images[currentImageIndex];
  currentImage.classList.remove('active');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const prevImage = images[currentImageIndex];
  prevImage.classList.add('active');
}

function startTimer() {
  timerId = setInterval(showNextImage, 7000); // Change 3000 to the desired time interval in milliseconds
}

function stopTimer() {
  clearInterval(timerId);
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  stopTimer();
  showPrevImage();
  startTimer();
});

nextButton.addEventListener('click', () => {
  stopTimer();
  showNextImage();
  startTimer();
});

startTimer();
