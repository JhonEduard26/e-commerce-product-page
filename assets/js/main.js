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
const productContent = document.querySelector('.product-content')
const btnCheckout = document.querySelector('.checkout')
const cartWarning = document.querySelector('.cart-warning__container')
const productCost = document.querySelector('.product-price')
const productCostFinal = document.querySelector('.product-price--final')

cartNumber.classList.add('hidden')

const handleAddToCart = () => {
  cartNumber.classList.remove('hidden')
  productContent.classList.remove('hidden')
  btnCheckout.classList.remove('hidden')
  cartWarning.classList.add('hidden')
  productCost.textContent = `$${productPrice}.00 x ${quantity}`
  productCostFinal.textContent = `$${newPrice || productPrice}.00`
  cartNumber.textContent = quantity
}

addToCart.addEventListener('click', handleAddToCart)

/* delete cart */
const btnDelete = document.querySelector('.delete')

const handleDelete = () => {
  cartNumber.classList.add('hidden')
  productContent.classList.add('hidden')
  btnCheckout.classList.add('hidden')
  cartWarning.classList.remove('hidden')
}

btnDelete.addEventListener('click', handleDelete)

/* slider */
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const productGallerySlider = document.querySelector('.product-gallery__slider')
const productImg = document.querySelector('.product-image')

const handlePrevious = () => {
  productGallerySlider.scrollLeft -= productImg.clientWidth
}
const handleNext = () => {
  productGallerySlider.scrollLeft += productImg.clientWidth
}

previous.addEventListener('click', handlePrevious)
next.addEventListener('click', handleNext)
