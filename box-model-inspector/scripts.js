// select parts of the document & store them in variables
var textSpan = document.querySelector('p span');
var kittenPic = document.querySelector('img');

// initialize a variable to store kitten clicks
var kittenClicks = 0;

// set up the kittenPic to listen for clicks
kittenPic.addEventListener('click', function() {
  // and run commands when the kitten is clicked
  kittenClicks = kittenClicks + 1;
  console.log('You kitten clicked ' + kittenClicks + ' times!');
  textSpan.textContent = kittenClicks;
});
