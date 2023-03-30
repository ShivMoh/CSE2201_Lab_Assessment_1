//Define slideshow02 object with the next button, previous button, slides, slide items, current index, and timer properties
const slideshow02 = {
  nextButton: document.querySelector('.next02'),
  prevButton: document.querySelector('.prev02'),
  slides: document.querySelector('.slides02'),
  slideItems: document.querySelectorAll('.slide-item02'),
  currentIndex: 0,
  timer: null
};

const slideshow03 = {
  nextButton: document.querySelector('.next03'),
  prevButton: document.querySelector('.prev03'),
  slides: document.querySelector('.slides03'),
  slideItems: document.querySelectorAll('.slide-item03'),
  currentIndex: 0,
  timer: null
};

//Define function to handle the next button click for a given slideshow
function handleNext(slideshow) {
  slideshow.currentIndex = (slideshow.currentIndex + 1) % slideshow.slideItems.length;
  if (slideshow.currentIndex > 3) {
    slideshow.currentIndex = 0; 
  }
  slideshow.slides.style.transform = `translateX(-${slideshow.currentIndex * 600}px)`;
}

//Define function to handle the previous button click for a given slideshow
function handlePrev(slideshow) {
  slideshow.currentIndex = (slideshow.currentIndex - 1 + slideshow.slideItems.length) % slideshow.slideItems.length;
  if (slideshow.currentIndex > 3) {
    slideshow.currentIndex = 3; 
  }
  slideshow.slides.style.transform = `translateX(-${slideshow.currentIndex * 600}px)`;
}

//Define function to start the timer for a given slidesho
function startTimer(slideshow) {
  slideshow.timer = setInterval(() => {
    handleNext(slideshow);
  }, 7000);
}

//Define function to reset the timer for a given slideshow
function resetTimer(slideshow) {
  clearInterval(slideshow.timer);
  startTimer(slideshow);
}

//Start the timers for both slideshows
startTimer(slideshow02);
startTimer(slideshow03);

//Add event listener for the next button click for slideshow02
slideshow02.nextButton.addEventListener('click', () => {
  handleNext(slideshow02);
  resetTimer(slideshow02);
});

slideshow02.prevButton.addEventListener('click', () => {
  handlePrev(slideshow02);
  resetTimer(slideshow02);
});

slideshow03.nextButton.addEventListener('click', () => {
  handleNext(slideshow03);
  resetTimer(slideshow03);
});

slideshow03.prevButton.addEventListener('click', () => {
  handlePrev(slideshow03);
  resetTimer(slideshow03);
});
