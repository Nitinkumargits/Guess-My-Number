'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'kumar';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is No Input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number ';
    displayMessage('⛔ No number ');
    // displayMessage( );
  }
  //   when player wins.
  else if (guess === SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;
    // document.querySelector('.message').textContent = ' 🎉 Correct Number';
    displayMessage(' 🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > SecretNumber ? '  📈To High' : ' 📉  To Low';
      displayMessage(guess > SecretNumber ? '  📈To High' : ' 📉  To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💀 You loses the Game';
      displayMessage('💀 You loses the Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //   when guess are Too High
  //   else if (guess > SecretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '  📈To High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💀 You loses the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //  when Guess are too low
  //   else if (guess < SecretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = ' 📉  To Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💀 You loses the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Again btn
score = 20;
document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.score').textContent = 20;
  //   document.querySelector('.message').textContent = 'Start guessing';
  //   document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.number').textContent = '?';
  //   document.querySelector('.number').style.width = '15rem';
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
