/* Show cart */

const cartImg = document.querySelector('.cart-img')
const cartDetails = document.querySelector('.cart-container')

const showCart = () => {
  if (cartDetails.classList.contains('hidden')) {
    cartDetails.classList.remove('hidden')
  } else {
    cartDetails.classList.add('hidden')
  }
}
cartImg.addEventListener('click', showCart)

/* Show menu */
const menuImg = document.querySelector('.menu-img')
const navContainer = document.querySelector('.nav-container')
const menuClose = document.querySelector('.close')

const showMenu = () => {
  navContainer.classList.add('active-menu')
}

const closeMenu = () => {
  navContainer.classList.remove('active-menu')
}

menuImg.addEventListener('click', showMenu)
menuClose.addEventListener('click', closeMenu)
