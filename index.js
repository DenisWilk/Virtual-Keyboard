'use strict';

const keyCode = [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
    'Delete',
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'ShiftRight',
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ControlRight',
    'F5',
    'F12',
    'NumpadEnter',
];

const keyCodeExc = [
    'Backspace',
    'Delete',
    'CapsLock',
    'Enter',
    'ShiftLeft',
    'ShiftRight',
    'ControlLeft',
    'MetaLeft',
    'Space',
    'ControlRight',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'F5',
    'F12',
    'NumpadEnter'
];

const keyValueObj = {
    'en': {
        'Backquote': '`',
        'Digit1': '1',
        'Digit2': '2',
        'Digit3': '3',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit0': '0',
        'Minus': '-',
        'Equal': '=',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'q',
        'KeyW': 'w',
        'KeyE': 'e',
        'KeyR': 'r',
        'KeyT': 't',
        'KeyY': 'y',
        'KeyU': 'u',
        'KeyI': 'i',
        'KeyO': 'o',
        'KeyP': 'p',
        'BracketLeft': '[',
        'BracketRight': ']',
        'Backslash': '\\',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'a',
        'KeyS': 's',
        'KeyD': 'd',
        'KeyF': 'f',
        'KeyG': 'g',
        'KeyH': 'h',
        'KeyJ': 'j',
        'KeyK': 'k',
        'KeyL': 'l',
        'Semicolon': ';',
        'Quote': '\'',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'z',
        'KeyX': 'x',
        'KeyC': 'c',
        'KeyV': 'v',
        'KeyB': 'b',
        'KeyN': 'n',
        'KeyM': 'm',
        'Comma': ',',
        'Period': '.',
        'Slash': '/',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    },

    'enCaps': {
        'Backquote': '`',
        'Digit1': '1',
        'Digit2': '2',
        'Digit3': '3',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit0': '0',
        'Minus': '-',
        'Equal': '=',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'Q',
        'KeyW': 'W',
        'KeyE': 'E',
        'KeyR': 'R',
        'KeyT': 'T',
        'KeyY': 'Y',
        'KeyU': 'U',
        'KeyI': 'I',
        'KeyO': 'O',
        'KeyP': 'P',
        'BracketLeft': '[',
        'BracketRight': ']',
        'Backslash': '\\',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'A',
        'KeyS': 'S',
        'KeyD': 'D',
        'KeyF': 'F',
        'KeyG': 'G',
        'KeyH': 'H',
        'KeyJ': 'J',
        'KeyK': 'K',
        'KeyL': 'L',
        'Semicolon': ';',
        'Quote': '\'',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'Z',
        'KeyX': 'X',
        'KeyC': 'C',
        'KeyV': 'V',
        'KeyB': 'B',
        'KeyN': 'N',
        'KeyM': 'M',
        'Comma': ',',
        'Period': '.',
        'Slash': '/',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    },

    'enShift': {
        'Backquote': '~',
        'Digit1': '!',
        'Digit2': '@',
        'Digit3': '#',
        'Digit4': '$',
        'Digit5': '%',
        'Digit6': '^',
        'Digit7': '&',
        'Digit8': '*',
        'Digit9': '(',
        'Digit0': ')',
        'Minus': '_',
        'Equal': '+',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'Q',
        'KeyW': 'W',
        'KeyE': 'E',
        'KeyR': 'R',
        'KeyT': 'T',
        'KeyY': 'Y',
        'KeyU': 'U',
        'KeyI': 'I',
        'KeyO': 'O',
        'KeyP': 'P',
        'BracketLeft': '{',
        'BracketRight': '}',
        'Backslash': '|',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'A',
        'KeyS': 'S',
        'KeyD': 'D',
        'KeyF': 'F',
        'KeyG': 'G',
        'KeyH': 'H',
        'KeyJ': 'J',
        'KeyK': 'K',
        'KeyL': 'L',
        'Semicolon': ':',
        'Quote': '"',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'Z',
        'KeyX': 'X',
        'KeyC': 'C',
        'KeyV': 'V',
        'KeyB': 'B',
        'KeyN': 'N',
        'KeyM': 'M',
        'Comma': '<',
        'Period': '>',
        'Slash': '?',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    },

    'by': {
        'Backquote': 'ё',
        'Digit1': '1',
        'Digit2': '2',
        'Digit3': '3',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit0': '0',
        'Minus': '-',
        'Equal': '=',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'й',
        'KeyW': 'ц',
        'KeyE': 'у',
        'KeyR': 'к',
        'KeyT': 'е',
        'KeyY': 'н',
        'KeyU': 'г',
        'KeyI': 'ш',
        'KeyO': 'ў',
        'KeyP': 'з',
        'BracketLeft': 'х',
        'BracketRight': 'ъ',
        'Backslash': '\\',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'ф',
        'KeyS': 'ы',
        'KeyD': 'в',
        'KeyF': 'а',
        'KeyG': 'п',
        'KeyH': 'р',
        'KeyJ': 'о',
        'KeyK': 'л',
        'KeyL': 'д',
        'Semicolon': 'ж',
        'Quote': 'э',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'я',
        'KeyX': 'ч',
        'KeyC': 'с',
        'KeyV': 'м',
        'KeyB': 'i',
        'KeyN': 'т',
        'KeyM': 'ь',
        'Comma': 'б',
        'Period': 'ю',
        'Slash': '.',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    },

    'byCaps': {
        'Backquote': 'Ё',
        'Digit1': '1',
        'Digit2': '2',
        'Digit3': '3',
        'Digit4': '4',
        'Digit5': '5',
        'Digit6': '6',
        'Digit7': '7',
        'Digit8': '8',
        'Digit9': '9',
        'Digit0': '0',
        'Minus': '-',
        'Equal': '=',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'Й',
        'KeyW': 'Ц',
        'KeyE': 'У',
        'KeyR': 'К',
        'KeyT': 'Е',
        'KeyY': 'Н',
        'KeyU': 'Г',
        'KeyI': 'Ш',
        'KeyO': 'Ў',
        'KeyP': 'З',
        'BracketLeft': 'Х',
        'BracketRight': 'Ъ',
        'Backslash': '\\',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'Ф',
        'KeyS': 'Ы',
        'KeyD': 'В',
        'KeyF': 'А',
        'KeyG': 'П',
        'KeyH': 'Р',
        'KeyJ': 'О',
        'KeyK': 'Л',
        'KeyL': 'Д',
        'Semicolon': 'Ж',
        'Quote': 'Э',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'Я',
        'KeyX': 'Ч',
        'KeyC': 'С',
        'KeyV': 'М',
        'KeyB': 'I',
        'KeyN': 'Т',
        'KeyM': 'Ь',
        'Comma': 'Б',
        'Period': 'Ю',
        'Slash': '.',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    },

    'byShift': {
        'Backquote': 'Ё',
        'Digit1': '!',
        'Digit2': '"',
        'Digit3': '№',
        'Digit4': ';',
        'Digit5': '%',
        'Digit6': ':',
        'Digit7': '?',
        'Digit8': '*',
        'Digit9': '(',
        'Digit0': ')',
        'Minus': '_',
        'Equal': '+',
        'Backspace': 'Backspace',
        'Tab': 'Tab',
        'KeyQ': 'Й',
        'KeyW': 'Ц',
        'KeyE': 'У',
        'KeyR': 'К',
        'KeyT': 'Е',
        'KeyY': 'Н',
        'KeyU': 'Г',
        'KeyI': 'Ш',
        'KeyO': 'Ў',
        'KeyP': 'З',
        'BracketLeft': 'Х',
        'BracketRight': 'Ъ',
        'Backslash': '/',
        'Delete': 'Del',
        'CapsLock': 'CapsLock',
        'KeyA': 'Ф',
        'KeyS': 'Ы',
        'KeyD': 'В',
        'KeyF': 'А',
        'KeyG': 'П',
        'KeyH': 'Р',
        'KeyJ': 'О',
        'KeyK': 'Л',
        'KeyL': 'Д',
        'Semicolon': 'Ж',
        'Quote': 'Э',
        'Enter': 'Enter',
        'ShiftLeft': 'Shift',
        'KeyZ': 'Я',
        'KeyX': 'Ч',
        'KeyC': 'С',
        'KeyV': 'М',
        'KeyB': 'I',
        'KeyN': 'Т',
        'KeyM': 'Ь',
        'Comma': 'Б',
        'Period': 'Ю',
        'Slash': ',',
        'ArrowUp': 'ᐃ',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl',
        'MetaLeft': 'Win',
        'AltLeft': 'Alt',
        'Space': '',
        'AltRight': 'Alt',
        'ArrowLeft': 'ᐊ',
        'ArrowDown': 'ᐁ',
        'ArrowRight': 'ᐅ',
        'ControlRight': 'Ctrl'
    }
};

const generalContainer = document.createElement('div');
generalContainer.className = 'general-container';
document.body.append(generalContainer);

generalContainer.insertAdjacentHTML('afterbegin', `
<textarea inputmode="text" class="textarea"></textarea>`);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
generalContainer.append(keyboardContainer);

generalContainer.insertAdjacentHTML('beforeend', `
    <p class="text">The keyboard was created in Windows OS. 
    To switch the language, use the combination: Ctrl + Alt.</p>`);


const textarea = document.querySelector('.textarea');
let keyboardLayout = localStorage.getItem('layout');

if (keyboardLayout == undefined) {keyboardLayout = 'en'}

document.onkeydown = function (event) {
    for (let i = 0; i < keyCodeExc.length; i++) {
        if (event.code === `${keyCodeExc[i]}`) return true;
    }
    return false;
};


function createKeyboardLayout() {
    const keyValue = document.querySelectorAll('[data-key]');

    keyValue.forEach(el =>
        el.textContent = keyValueObj[keyboardLayout][el.dataset.key]);
}


function createKeyboardBtns() {

    for (let i = 0; i < keyCode.length; i++) {
        keyboardContainer.insertAdjacentHTML('beforeend', `
        <button id="${keyCode[i]}" class="btn btn${i}" data-key="${keyCode[i]}"></button>`)

    }
    createKeyboardLayout();
}
createKeyboardBtns();


function changeKeyboardLang() {

    if (keyboardLayout === 'en') {
        keyboardLayout = 'by';
        localStorage.setItem('layout', keyboardLayout);
    } else if (keyboardLayout === 'by') {
        keyboardLayout = 'en';
        localStorage.setItem('layout', keyboardLayout);
    } else if (keyboardLayout === 'enCaps') {
        keyboardLayout = 'byCaps';
        localStorage.setItem('layout', 'by');
    } else if (keyboardLayout === 'byCaps') {
        keyboardLayout = 'enCaps';
        localStorage.setItem('layout', 'en');
    }

    createKeyboardLayout();

}
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.altKey) {
        changeKeyboardLang();
    }
});


function changeKeyboardCaps() {

    const capsKey = document.querySelector('.btn29');

    if (keyboardLayout === 'en') {
        keyboardLayout = 'enCaps';
        capsKey.classList.add('active');

    } else if (keyboardLayout === 'by') {
        keyboardLayout = 'byCaps';
        capsKey.classList.add('active');

    } else if (keyboardLayout === 'enCaps') {
        keyboardLayout = 'en';
        capsKey.classList.remove('active');

    } else if (keyboardLayout === 'byCaps') {
        keyboardLayout = 'by';
        capsKey.classList.remove('active');
    }

    createKeyboardLayout();
}
document.addEventListener('keyup', function (event) {
    if (event.code === 'CapsLock') {
        changeKeyboardCaps();
    }
});


const shiftBtns = document.querySelectorAll('.btn42, .btn54');
let capsStatus;

function changeKeyboardShiftOn() {
    if (keyboardLayout === 'en') {
        capsStatus = 'off';
        keyboardLayout = 'enShift';
    } else if (keyboardLayout === 'by') {
        capsStatus = 'off';
        keyboardLayout = 'byShift';
    }else if (keyboardLayout === 'enCaps') {
        capsStatus = 'on';
        keyboardLayout = 'enShift';
    }else if (keyboardLayout === 'byCaps') {
        capsStatus = 'on';
        keyboardLayout = 'byShift';
    }

    createKeyboardLayout();
}

function changeKeyboardShiftOff() {
    if (keyboardLayout === 'enShift' && capsStatus === 'off') {
        keyboardLayout = 'en';
    } else if (keyboardLayout === 'byShift' && capsStatus === 'off') {
        keyboardLayout = 'by';
    }else if (keyboardLayout === 'enShift' && capsStatus === 'on') {
        keyboardLayout = 'enCaps';
    }else if (keyboardLayout === 'byShift' && capsStatus === 'on') {
        keyboardLayout = 'byCaps';
    }

    createKeyboardLayout();
}
document.addEventListener('keydown', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        changeKeyboardShiftOn()
    }
});
document.addEventListener('keyup', function (event) {

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        changeKeyboardShiftOff();
    }
});
shiftBtns.forEach(el => el.addEventListener('mousedown', changeKeyboardShiftOn));
shiftBtns.forEach(el => el.addEventListener('mouseup', changeKeyboardShiftOff));

function focusInTextarea() {
    textarea.focus();
}
focusInTextarea();
document.addEventListener('click', focusInTextarea);
document.addEventListener('keydown', focusInTextarea);


function displayInTextareaOnclick(event) {
    let btnCurrentValue = event.target.textContent;

    if (!event.target.classList.contains('btn')) return;

    if (event.target.classList.contains('btn13')) {
        btnCurrentValue = '';
        let pos = textarea.selectionStart;
        textarea.value = textarea.value.slice(0, pos - 1) + textarea.value.slice(pos);
        textarea.setSelectionRange(pos - 1, pos - 1);
    }

    if (event.target.classList.contains('btn14')) {
        btnCurrentValue = '    ';
    }

    if (event.target.classList.contains('btn28')) {
        btnCurrentValue = '';
        let pos = textarea.selectionStart;
        textarea.value = textarea.value.slice(0, pos) + textarea.value.slice(pos + 1);
        textarea.setSelectionRange(pos, pos);
    }

    if (event.target.classList.contains('btn29')) {
        btnCurrentValue = '';
        changeKeyboardCaps();
    }

    if (event.target.classList.contains('btn41')) {
        btnCurrentValue = '';

        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        let cursor = textarea.value.slice(0, start) + '\n';

        textarea.value = textarea.value.slice(0, start) + '\n' +
            textarea.value.slice(end, textarea.value.length);
        textarea.focus();
        textarea.setSelectionRange(cursor.length, cursor.length);
    }

    if (event.target.classList.contains('btn42') ||
        event.target.classList.contains('btn54') ||
        event.target.classList.contains('btn55') ||
        event.target.classList.contains('btn56') ||
        event.target.classList.contains('btn57') ||
        event.target.classList.contains('btn59') ||
        event.target.classList.contains('btn63')) {
        btnCurrentValue = '';
    }

    if (event.target.classList.contains('btn58')) {
        btnCurrentValue = ' ';
    }

    textarea.value += `${btnCurrentValue}`;
    console.log(btnCurrentValue);
}
document.addEventListener('click', displayInTextareaOnclick);


let keyId;

function displayInTextareaOnkeydown(event) {


    for (let i = 0; i < keyCodeExc.length; i++) {
        keyId = document.getElementById(`${keyCodeExc[i]}`);
        if (event.code === keyId.id) return;
    }

    if (event.code === 'Tab') {
        textarea.value += '    ';
        return;
    }

    if (event.code === 'AltLeft' || event.code === 'AltRight') {
        textarea.value += '';
        return;
    }

    for (let i = 0; i < keyCode.length; i++) {
        keyId = document.getElementById(`${keyCode[i]}`);
        if (event.code === keyId.id) {
            textarea.value += keyId.textContent;
        }
    }
}
document.addEventListener('keydown', displayInTextareaOnkeydown);


function animationBtnOn(event) {

    if (event.code === 'CapsLock') return;

    for (let i = 0; i < keyCode.length; i++) {
        keyId = document.getElementById(`${keyCode[i]}`);
        if (event.code === keyId.id) {
            keyId.classList.add('active');
        }
    }
}
function animationBtnOff(event) {

    if (event.code === 'CapsLock') return;

    for (let i = 0; i < keyCode.length; i++) {
        keyId = document.getElementById(`${keyCode[i]}`);
        if (event.code === keyId.id) {
            keyId.classList.remove('active');
        }
    }
}
document.addEventListener('keydown', animationBtnOn);
document.addEventListener('keyup', animationBtnOff);


function getKeyCode(event) {
    console.log(event.code);
}
window.addEventListener('keydown', getKeyCode);


