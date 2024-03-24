const burgerButton = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const itemDropdown = document.querySelector('.header__item-dropdown')
const submenu = document.querySelector('.header__submenu')
const overlay = document.querySelector('.header__overlay')

burgerButton.addEventListener('click', openMenu)
overlay.addEventListener('click', openMenu)
itemDropdown.addEventListener('click', dropDown)

function openMenu() {
  menu.classList.toggle('header__menu--open')
  overlay.classList.toggle('header__overlay--visible')
}

function dropDown() {
  submenu.classList.toggle('header__submenu--open')
}
