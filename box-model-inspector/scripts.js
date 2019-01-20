// select portion of the document and store them
var textSpan = document.querySelector('p span');
var kittenPic = document.querySelector('img');

// initialize a variable
var clickedKitten = 0;

// set up the kittenPic to listen for clicks
kittenPic.addEventListener('click', function () {
  // and run commands when the kitten is clicked
  clickedKitten = clickedKitten + 1
  console.log(clickedKitten);
  textSpan.textContent = clickedKitten;
});