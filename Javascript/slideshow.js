//Select all the images in the header section
const images = document.querySelectorAll('.header-image img');
let currentImageIndex = 0;
let timerId;

//Show the next image in the header section
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

//Start the timer to show the next image automatically every 7 seconds
function startTimer() {
  timerId = setInterval(showNextImage, 7000); 
}

// Stop the timer
function stopTimer() {
  clearInterval(timerId);
}

// Select the previous and next buttons in the header section
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

// Start the timer initially to show the first image
startTimer();
