'use strict';

const body = document.querySelector('body');
const inputs = body.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].insertAdjacentHTML(
    'beforebegin',
    `<label for="${inputs[i].id}"><b>${inputs[i].name.toUpperCase()}</b></label>`,
  );

  inputs[i].setAttribute(
    'placeholder',
    `${inputs[i].name.slice(0, 1).toUpperCase() + inputs[i].name.slice(1).toLowerCase()}`,
  );
}
