// Get the button and the div you want to toggle
const toggle = document.getElementById('theme-toggle');
const headerDiv = document.querySelector('.light-cv-parent'); // select the div by class
// const lightText = document.querySelector('.full-name')

// Add click event
toggle.addEventListener('click', () => {
  headerDiv.classList.toggle('dark-mode');
});