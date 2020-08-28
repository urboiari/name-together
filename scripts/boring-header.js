let header = document.querySelector('#main-head');

getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomSpace = (min, max, height) => {
  let int = getRandomInt(min, max)
  if (int >= 0) return int + height;
  else return int - height;
}

function setup() {
  header.style.opacity = '0';
  header.style.transition = `transform 1s`;
  header.style.transition += `, opacity ${(getRandomInt(15, 20) / 10)}s`;
  header.style.transform = `translateY(${getRandomSpace(0, 0, 10)}px)`;
}

function moveHead() {
  header.style.transform = 'translateY(0)';
  header.style.opacity = '1';
}



setup();
setTimeout(function () {
  moveHead();
}, 300);
