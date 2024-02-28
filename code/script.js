const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.menu_mobile')
const menuMobileDrop = document.querySelector('.menu_mobile_drop')
const menuDropdown = document.querySelector('.menu_dropdown')

menu.addEventListener('click', openMenu)
menuMobileDrop.addEventListener('click', dropDown)

function openMenu() {
  menuMobile.classList.toggle('open')
}

function dropDown() {
  menuDropdown.classList.toggle('open')
}
