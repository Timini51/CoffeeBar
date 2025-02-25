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
