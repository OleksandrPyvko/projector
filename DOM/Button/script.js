'use strict'

const p = document.querySelector('.last-changes');

import {buttonListener, checkState} from './toggle.js'

function startApp() {
    checkState();
    p.textContent = localStorage.getItem('lastChanged')
    buttonListener();
    

}


startApp();