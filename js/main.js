/* jshint esversion:6 */

/* находим селектор кнопки меню "бургер" */
const burgerBtn = document.querySelector('.menu-button');

/* находим селектор для открытия меню бургера на моб. устройств */ 
const menuContainer = document.querySelector('.container'); 

/* находим селектор кнопки закрытия контейнера с меню для моб. устройств */
const btnMenuClose = document.querySelector('.container__close');

/* находим селектор кнопки переключения фона */
const btnSwitch = document.querySelector('.container-footer__btn');   

/* устанавливаем прослушиватель на кнопку меню "бургер" 
при нажатии навешиваем класс container_opened - делааем меню видимым*/ 
burgerBtn.addEventListener('click', () => {
  menuContainer.classList.add('container_opened');
});

/* устанавливаем прослушиватель на кнопку меню "бургер" 
при нажатии навешиваем класс container_opened - делааем меню видимым*/ 
btnMenuClose.addEventListener('click', () => {
  menuContainer.classList.remove('container_opened');
});

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('container-footer__btn_on');
});
