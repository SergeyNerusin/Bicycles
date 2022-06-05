/* jshint esversion:6 */

/* Для стационарной версии */ 
/* Находим селектор страницы с общими настройками css. */
const pageColorbgc = document.querySelector('.page_color-bgc');
/* Находим селектор хедера */ 
const headerColorbgc = document.querySelector('.header_color-bgc');

/* Находим текстовые селектора */
const textColor = document.querySelectorAll('.text_color');
const textColorl = document.querySelectorAll('.text_color-l');
const textColorm = document.querySelector('.text_color-m');
const textColorf = document.querySelector('.text_color-f');

/* Находим селектор футера */ 
const footerColorbgc = document.querySelector('.footer_color-bgc');

/* Находим селектор ввода емайла */ 
const inputColorbgc = footerColorbgc.querySelector('.input_color-bgc'); 


/* Находим селектор иконки - солнышко (в футере)*/
const SunImgpage = footerColorbgc.querySelector('.footer__container-sun');

/* Находим селектор иконки - луна (в футере)*/
const MoonImgpage = footerColorbgc.querySelector('.footer__container-moon');

/* Находим селектор кнопки переключения фона
   в настольной версии для ПК (в футоре) */ 
const btnSwitchfooter = footerColorbgc.querySelector('.footer__container-btn');


/* Для мобильной версии */ 
/* Находим селектор кнопки меню "бургер". */
const burgerBtn = document.querySelector('.menu-button');

/* Находим селектор для открытия меню при нажатии на кнопку "бургер" - для моб. устройств. */ 
const containerColorbgc = document.querySelector('.container_color-bgc'); 

/* Находим селектор кнопки закрытия контейнера меню - для моб. устройств. */
const btnMenuClose = containerColorbgc.querySelector('.container__close');

/* Находим селектор кнопки переключения фона 
   в контейнере с меню - для моб. устройств. */
const btnSwitchCont = containerColorbgc.querySelector('.container-footer__btn');

/* Находим селектор иконки - солнышко в контейнере с меню - для моб. устройств.*/
const SunImgmob = containerColorbgc.querySelector('.container-footer__sun');

/* Находим селектор иконки - луна в контейнере с меню - для моб. устройств.*/
const MoonImgmob = containerColorbgc.querySelector('.container-footer__moon');
/* Счетчик переключений */ 
let sign = 1;

/*1. Функция добавления - удаления селектора */ 
function toggleSelector(switcher, addClass) {
  switcher.classList.toggle(addClass);
}

/*2. Функция переключения иконок */ 
function toggleIcons(selectSun, selectMoon){
  if((selectSun.getAttribute('src') === "./images/icons/sun_theme-day.svg") && (selectMoon.getAttribute('src') === "./images/icons/moon_theme-day.svg")){ 
    selectSun.src = "./images/icons/sun_theme-night.svg";
    selectMoon.src = "./images/icons/moon_theme-night.svg";
  } else {
    selectSun.src = "./images/icons/sun_theme-day.svg";
    selectMoon.src = "./images/icons/moon_theme-day.svg";
  }
}

/* Функция установки светлой темы сайта */ 
function getWhiteTheme(){
  textColor.forEach(el => el.style.color = "");
  textColorl.forEach(el => el.style.color = "");
  pageColorbgc.style.backgroundColor = "";
  headerColorbgc.style.backgroundColor = "";
  footerColorbgc.style.backgroundColor = "";
  inputColorbgc.style.backgroundColor = "";
  inputColorbgc.style.border = "";
  inputColorbgc.style.color = "";
  containerColorbgc.style.backgroundColor = "";
  textColorm.style.color = "";
  textColorf.style.color = "";
}

/* Функция установки тёмной темы сайта*/ 
function getDarkTheme(){
  textColor.forEach(el => el.style.color = "#fff");
  textColorl.forEach(el => el.style.color = "#e5e5e5");
  pageColorbgc.style.backgroundColor = "#2f2f2f";
  headerColorbgc.style.backgroundColor = "#333333";
  footerColorbgc.style.backgroundColor = "#2f2f2f";
  inputColorbgc.style.backgroundColor = "#2f2f2f";
  inputColorbgc.style.border = "1px solid rgba(125, 125, 125, 0.5)";
  inputColorbgc.style.color = "#fff";
  containerColorbgc.style.backgroundColor = "#333333";
  textColorm.style.color = "#e6e6e6";
  textColorf.style.color = "#565656";
}

/*4. Фукция изменения светлой темы на тёмную */ 
function toggleThemeColor(){
  if (sign === 0){
    getWhiteTheme();
    sign = 1;
  } else {
    getDarkTheme();
    sign = 0;
  }
}



/* Устанавливаем прослушиватель на кнопку меню "бургер" 
при нажатии навешиваем класс container_opened - делааем меню видимым. */ 
burgerBtn.addEventListener('click', () => {
  // menuContainer.classList.add('container_opened');
  toggleSelector(containerColorbgc,'container_opened');
});

/* Устанавливаем прослушиватель на кнопку (крестик) закрыть меню
при нажатии навешиваем класс container_opened - делааем меню видимым.*/ 
btnMenuClose.addEventListener('click', () => {
  // menuContainer.classList.remove('container_opened');
  toggleSelector(containerColorbgc,'container_opened');
});


/*  Устанавливаем прослушиватель на кнопку переключения фона стационарной версии,
    и при смене положения переключателя меняем фон, и цвет текста,
    ссылок. */ 
btnSwitchfooter.addEventListener('click', () => {
 
  toggleSelector(btnSwitchfooter,'footer__container-btn_on');
  toggleSelector(btnSwitchCont,'container-footer__btn_on');
  toggleIcons(SunImgpage, MoonImgpage);
  toggleThemeColor();
});



/*  В моб. меню устанавливаем прослушиватель на кнопку переключения фона страницы,
    и при смене положения переключателя меняем фон, и цвет текста,
    ссылок. */ 
btnSwitchCont.addEventListener('click', () => {
  toggleSelector(btnSwitchCont,'container-footer__btn_on');
  toggleSelector(btnSwitchfooter,'footer__container-btn_on');
  toggleIcons(SunImgmob, MoonImgmob);
  toggleThemeColor();
});





