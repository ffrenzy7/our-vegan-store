const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.menu_mobile')

menu.addEventListener('click', openMenu)

function openMenu() {
  menuMobile.classList.toggle('open')
}
