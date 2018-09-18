var textSpan = document.querySelector('p span');
var kittenPic = document.querySelector('img');
var clickedKitten = 0;

kittenPic.addEventListener('click', function () {
  clickedKitten = clickedKitten + 1
  console.log(clickedKitten);
  textSpan.textContent = clickedKitten;
});