'use strict';

const generalContainer = document.createElement('div');
generalContainer.className = 'general-container';
document.body.append(generalContainer);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
generalContainer.prepend(textarea);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
generalContainer.append(keyboardContainer);

// const text1 = document.createElement('p');
// const text2 = document.createElement('p');
// text1.className = 'text';
// text2.className = 'text';
// generalContainer.append(text1);
// generalContainer.append(text2);


function createKeyboardBtns() {
    let arr = [];
    let btn;





    for (let i = 0; i < 64; i++) {
        btn = keyboardContainer.insertAdjacentHTML('beforeend', `
        <div class="btn btn${i}" data-set="">${i}</div>`);
    }
    console.log(arr);

    generalContainer.insertAdjacentHTML('beforeend', `
    <p class="text">The keyboard was created in Windows OS. 
    To switch the language, use the combination: left ctrl + alt.</p>`);
    

}
createKeyboardBtns();

