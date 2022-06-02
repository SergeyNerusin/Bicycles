/* jshint esversion:6 */

/* Находим селектор кнопки меню "бургер". */
const burgerBtn = document.querySelector('.menu-button');

/* Находим селектор для открытия меню при нажатии на кнопку "бургер" - для моб. устройств. */ 
const menuContainer = document.querySelector('.container'); 

/* Находим селектор кнопки закрытия контейнера с меню - для моб. устройств. */
const btnMenuClose = menuContainer.querySelector('.container__close');

/* Находим селекторы ссылок в в контейнере с меню - для моб. устройств. */ 
const containerMenuLink = menuContainer.querySelectorAll('.container-menu__link'); 

/* Находим селектор кнопки переключения фона. */
const btnSwitch = menuContainer.querySelector('.container-footer__btn');

/* Находим селектор икнки -солнышко */
const SunImg = menuContainer.querySelector('.container-footer__sun');

/* Находим селектор икнки -солнышко */
const MoonImg = menuContainer.querySelector('.container-footer__moon');

/* Устанавливаем прослушиватель на кнопку меню "бургер" 
при нажатии навешиваем класс container_opened - делааем меню видимым. */ 
burgerBtn.addEventListener('click', () => {
  menuContainer.classList.add('container_opened');
});

/* Устанавливаем прослушиватель на кнопку (крестик) закрыть меню
при нажатии навешиваем класс container_opened - делааем меню видимым.*/ 
btnMenuClose.addEventListener('click', () => {
  menuContainer.classList.remove('container_opened');
});

/*  Устанавливаем прослушиватель на кнопку переключения фона страницы,
    и при смене положения переключателя меняем фон, и цвет текста,
    ссылок. */ 
btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('container-footer__btn_on');
  menuContainer.classList.toggle('container_background-night');
  containerMenuLink.forEach(el => {
    el.classList.toggle('container-menu__link_night');
  });
  if((SunImg.getAttribute('src') === "./images/icons/sun_theme-day.svg") && (MoonImg.getAttribute('src') === "./images/icons/moon_theme-day.svg")){ 
    SunImg.src = "./images/icons/sun_theme-night.svg";
    MoonImg.src = "./images/icons/moon_theme-night.svg";
  } else {
    SunImg.src = "./images/icons/sun_theme-day.svg";
    MoonImg.src = "./images/icons/moon_theme-day.svg";
  }
});
