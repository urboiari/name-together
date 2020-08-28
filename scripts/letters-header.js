window.addEventListener('resize', () => vh = window.innerHeight);
let vh = window.innerHeight;

getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomSpace = (min, max, height) => {
  let int = getRandomInt(min, max)
  if (int >= 0) return int + height;
  else return int - height;
}

function moveLetters(selector) {
  let spanArray = document.querySelectorAll(`.${selector}-letter`);

  spanArray.forEach(letter => {
    letter.style.transform = 'translateY(0)';
    letter.style.transform = '';
    letter.style.opacity = '1';
  });
}

function arrangeTextRandom(selector) {
  let textBlock = document.querySelector(`#${selector}`);
  let textStr = textBlock.textContent;
  let textArr = textStr.split('');
  textBlock.innerHTML = '';

  textArr.forEach((letter, index) => {
    textBlock.innerHTML += `<span class='${selector}-letter' id='l${index}'>${letter}</span>`;
    let currentLetter = document.querySelector(`#l${index}.${selector}-letter`);
    if (letter == ' '){}
    else {
      currentLetter.style.display = 'inline-block';
      currentLetter.style.transition = `transform ${(getRandomInt(10, 20) / 7)}s`;
      currentLetter.style.transition += `, opacity ${(getRandomInt(15, 20) / 10)}s`;
      currentLetter.style.transform = `translateY(${getRandomSpace(-2, 2, 10)}px)`;
      currentLetter.style.opacity = `0`;
    }
  });
}

function arrangeTextUnder(selector) {
  let textBlock = document.querySelector(`#${selector}`);
  let textStr = textBlock.textContent;
  let textArr = textStr.split('');
  textBlock.innerHTML = '';

  textArr.forEach((letter, index) => {
    textBlock.innerHTML += `<span class='${selector}-letter' id='l${index}'>${letter}</span>`;
    let currentLetter = document.querySelector(`#l${index}.${selector}-letter`);
    if (letter == ' '){}
    else {
      currentLetter.style.display = 'inline-block';
      currentLetter.style.transition = `transform 1s`;
      currentLetter.style.transition += `, opacity 1s`;
      currentLetter.style.transform = `translateY(${getRandomSpace(0, 10, 10)}px)`;
      currentLetter.style.opacity = `0`;
    }
  });
}

function navAnimate(navID) {
  let list = document.querySelectorAll(`#${navID} li a`);
  for (let word of list) {
    arrangeTextUnder(word.id);
    setTimeout(function () {
      for (let i = 0; i < list.length; i++) setTimeout(() => moveLetters(`nav-link-${i}`), 300);
    }, 1000);
  }
}

function mainHeaderAnimate(headerID) {
  arrangeTextRandom(headerID);
  setTimeout(function() {
    moveLetters(headerID);
  }, 300);
}



mainHeaderAnimate('main-head');
navAnimate('main-nav');
