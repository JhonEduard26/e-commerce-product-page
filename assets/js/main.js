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

/* product quantity */
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
let productQuantity = document.querySelector('.product-quantity')
let quantity = 1
let productPriceAfter = document.querySelector('.product-price--after')
let productPriceBefore = document.querySelector('.product-price--before')
let productPrice = 125
let newPrice

const addProduct = () => {
  quantity += 1
  newPrice = productPrice * quantity
  productPriceAfter.textContent = `$${newPrice}.00`
  productPriceBefore.textContent = `$${newPrice * 2}.00`
  productQuantity.textContent = quantity
}

const subtractProduct = () => {
  if (quantity !== 1) {
    quantity -= 1
    newPrice -= productPrice
  }
  productPriceAfter.textContent = `$${newPrice || productPrice}.00`
  productPriceBefore.textContent = `$${(newPrice || productPrice) * 2}.00`
  productQuantity.textContent = quantity
}

plus.addEventListener('click', addProduct)
minus.addEventListener('click', subtractProduct)

/* Cart */
const cartNumber = document.querySelector('.cart-number')
const addToCart = document.querySelector('.add-to-cart')

cartNumber.classList.add('hidden')

const handleAddToCart = () => {
  cartNumber.classList.remove('hidden')
  cartNumber.textContent = quantity
}

addToCart.addEventListener('click', handleAddToCart)
