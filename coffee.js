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

//Scroll Reveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 2400,
    delay:400,
    reset: true
})

sr.reveal('.writeup h1',{delay: 200, origin: 'top'})
sr.reveal('.writeup p',{delay: 400, origin: 'left'})
sr.reveal('.grid',{delay: 200, origin: 'bottom'})
sr.reveal('.aform',{delay: 400, origin: 'bottom'})
sr.reveal('#about p',{delay: 400, origin: 'top'})
sr.reveal('#about img',{delay: 400, origin: 'right'})
sr.reveal('.footer',{delay: 600, origin: 'bottom'})
sr.reveal('button',{delay: 800, origin: 'right'})