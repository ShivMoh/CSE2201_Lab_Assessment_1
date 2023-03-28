// Get the scroll-to-top button element
const scrollBtn = document.querySelector('#scroll-to-top');

// Add an event listener to the window object to detect when the user scrolls
window.addEventListener('scroll', function() {
  // Check if the user has scrolled beyond a certain threshold (e.g. 500px)
  if (window.pageYOffset > 750) {
    // If yes, add the 'show' class to the scroll-to-top button
    scrollBtn.classList.add('show');
  } else {
    // If not, remove the 'show' class from the scroll-to-top button
    scrollBtn.classList.remove('show');
  }
});

// Add an event listener to the scroll-to-top button element to scroll to the top of the page when clicked
scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
