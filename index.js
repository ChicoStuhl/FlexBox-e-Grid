const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu__lateral-container');


botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})