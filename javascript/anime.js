document
  .getElementById('anime-heading')
  .addEventListener('mouseover', function () {
    this.textContent = 'Have You Tried Anime?';
  });

document
  .getElementById('anime-heading')
  .addEventListener('mouseout', function () {
    this.textContent = 'You Should';

    setTimeout(() => {
      this.textContent = 'Anime';
    }, 3000);
  });

document.getElementById('click').addEventListener('click', function () {
  document.getElementById('front-display').src =
    '../images/shenron-dragon-ball-z.gif';

  setTimeout(() => {
    document.getElementById('front-display').src = '../images/pxfuel.jpg';
  }, 3000);
});

document
  .getElementById('description')
  .addEventListener('mouseover', function () {
    document.getElementById('description').classList.toggle('pop');
  });

document
  .getElementById('description')
  .addEventListener('mouseout', function () {
    document.getElementById('description').classList.toggle('pop');
  });
