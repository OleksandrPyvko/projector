const toggleButton = document.querySelector('.btn');
const body = document.querySelector('.body');
const buttonState = localStorage.getItem('buttonState')

import {updateDate} from './date.js'

export const checkState = () => {
    if (buttonState === 'off') {
        body.style.backgroundColor = '#9ccbb8';
        toggleButton.textContent = 'Turn OFF';
    } else {
        body.style.backgroundColor = '#011810';
        toggleButton.textContent = 'Turn ON';
    }
}

export const buttonListener = () => {
  toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === 'Turn ON') {
      toggleButton.textContent = 'Turn OFF';
        body.style.backgroundColor = '#9ccbb8';
        updateDate();
      localStorage.setItem('buttonState', 'off');
    } else {
        toggleButton.textContent = 'Turn ON';
        updateDate();

      body.style.backgroundColor = '#011810';
      localStorage.setItem('buttonState', 'on');
    }
  });
};
