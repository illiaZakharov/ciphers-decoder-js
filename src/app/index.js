import { Cezar } from './ecryption-methods/cezar.js';
import { Polybius } from './ecryption-methods/polibius-square.js';
import { Vizhener } from './ecryption-methods/vizhener-square.js';

import '../styles/style.css';

const CIPHERS = {
    vizhener: {
        init: (lang) => new Vizhener(lang),
        changeForm: '',
    },
    cezar: {
        init: (lang) => new Cezar(lang),
        changeForm: '',
    },
    polybius: {
        init: (lang) => new Polybius(lang),
        changeForm: '',
    }
}

const cipherSelector = document.getElementById('cipher-selector');
const langSelector = document.getElementById('alphabet-lang');

const inputData = document.getElementById('input-data');
inputData.addEventListener('input', function () {
    this.value ? enableBtns() : disableBtns();
});

/**** [START] BUTTONS ****/
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
    inputData.value = '';
    disableBtns();
});

const decryptBtn = document.getElementById('decrypt');
decryptBtn.addEventListener('click', function () {
    let method = getMethod();

    if (inputData.value) {
        alert(method.decrypt(inputData.value));
    }
});

const encryptBtn = document.getElementById('encrypt');
encryptBtn.addEventListener('click', function () {
    let method = getMethod();

    if (inputData.value) {
        alert(method.encrypt(inputData.value));
    }
});
/**** [END] BUTTONS ****/

function getMethod() {
    return CIPHERS[cipherSelector.value].init(langSelector.value);
}

function enableBtns() {
    encryptBtn.removeAttribute('disabled');
    decryptBtn.removeAttribute('disabled');
}

function disableBtns() {
    encryptBtn.setAttribute('disabled', 'disabled');
    decryptBtn.setAttribute('disabled', 'disabled');
}