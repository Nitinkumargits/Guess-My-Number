'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'kumar';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number ';
  }
  //   when player wins.
  else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //   when guess are Too High
  else if (guess > SecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '  📈To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You loses the Game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //  when Guess are too low
  else if (guess < SecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' 📉  To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You loses the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
