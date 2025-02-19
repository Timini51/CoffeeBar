const password = document.querySelector('#password');
const button = document.querySelector('button');
const text = document.querySelector('#text')
let word;
let minLength = 6;

button.onclick = () => {
    word = password.textContent.length;
    if (word === '')
        text.textContent = 'Enter a valid Password';
    else if (word <= minLength )
        text.textContent = "Password is too short";
    else{window.alert('Welcome to CoffeeBar')};
}

const head = document.querySelector('.head');
window.onscroll = () => {
    head.classList('active')
}

const menu = document.querySelector('.bx-menu')
const nav = document.querySelector('.nav')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    nav.classList.remove('active');
    menu.classList.remove('bx-x')
}