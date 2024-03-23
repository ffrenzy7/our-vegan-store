const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.menu_mobile')
const menuMobileDrop = document.querySelector('.menu_mobile_drop')
const menuDropdown = document.querySelector('.menu_dropdown')
const overlay = document.querySelector('.overlay')

menu.addEventListener('click', openMenu)
overlay.addEventListener('click', openMenu)
menuMobileDrop.addEventListener('click', dropDown)

function openMenu() {
  menuMobile.classList.toggle('open')
  overlay.classList.toggle('visible')
}

function dropDown() {
  menuDropdown.classList.toggle('open')
}
