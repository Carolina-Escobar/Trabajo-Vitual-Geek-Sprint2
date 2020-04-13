'use strict';

const body = document.querySelector('body');

document.addEventListener('keydown', backgroundColor);

function backgroundColor(event) {
  if (event.keyCode === 82) {
    body.classList.add('red');
    body.classList.remove('purple');
  }

  if (event.keyCode === 77 ) {
    body.classList.add('purple');
    body.classList.remove('red');
  }
}