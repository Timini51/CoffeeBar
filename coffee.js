const password = document.querySelector('#password');
const button = document.querySelector('button');
const text = document.querySelector('#text')
const email = document.querySelector('#emai')
let word;
let minLength = 4;

button.onclick = (e) => {
    e.preventDefault();
    word = password.value.length;

        if(password.value === '' || word <= minLength  || email === '') {
            text.classList.add('error')
            text.textContent = "Fill in required details";
            setTimeout (() => text.remove(), 3000);}

        else if (password.value === '' && email.value !== " ") {
            text.classList.add('error')
            text.textContent = "Fill in your password";
            }

        else{window.location.href = "coffee welcome.html"
         };
}

    
//menu navbar
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
sr.reveal('#about img',{delay: 400, origin: 'top'})
sr.reveal('.footer',{delay: 600, origin: 'bottom'})

//coffee page functionality
const book = document.querySelector('.bookTable');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const date = document.getElementById('date');
const people = document.getElementById('people');
const error = document.getElementById('error');

function submit() {
    if(firstname.value === "" || 
        lastname.value === "" || 
        people.value === "" || 
        date.value === ""){
        error.textContent = 'Please fill in all fields';
        console.error('Fill in all fields');
        setTimeout(() => error.remove(), 3000);
    }
    else {
    window.alert(`${firstname.value}, Table booked successfully`);
    console.log('Table booked successfully');
    setTimeout(() => error.remove(), 3000);
    window.location.href = "coffee welcome.html";
    }
}

book.addEventListener('click', submit)

//cart functionality
const image = document.querySelectorAll('.image');
const back = document.querySelector('.back');
const payment = document.querySelector('.payment');
const cartItems = document.getElementById('cart-table-body');

if(image.length > 0){
  image.forEach((item) => {
      item.addEventListener('click', () => {
          const name = item.getAttribute('data-name');
          const itemImage = item.getAttribute('data-image');
          const price = item.getAttribute('data-price');

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      // Add selected item
      cart.push({ name, itemImage, price });
      // Save back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} added to cart!`);
    })
});
}
else if(image.length == 0){
    cartItems.innerHTML = "Your cart is  empty"
}
// Display cart items
if(cartItems) {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('cart items:', cart);
  cart.forEach((item) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><img src="${item.itemImage}" ></td>
      <td>${item.name}</td>
      <td>$${item.price}</td>
    <td><button class="delete-btn" data-index="${index}">X</button></td>
    `;
    cartItems.appendChild(row);
  });
}

/* clear cart
if (cartItems) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartItems.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
      cartItems.innerHTML = "<tr><td colspan='4'>Your cart is empty</td></tr>";
      return;
    }
// Add event listener to each delete button
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        cart.splice(index, 1); // Remove item
        localStorage.setItem('cart', JSON.stringify(cart)); // Update storage
        renderCart(); // Re-render cart
      });
    }); }

  renderCart();
}
  */

back.onclick = () => {
    window.location.href = "coffee welcome.html";
}