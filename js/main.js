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

/* Находим селектора кнопок prev, next  в секции road (Дорога) */
const btnPrev = document.querySelector('.road__button-prev');
const btnNext = document.querySelector('.road__button-next');

/* Находим селектор футера */ 
const footerColorbgc = document.querySelector('.footer_color-bgc');

/*находим селектор поля ввода e-mail адреса*/
/* Для установки светлой или тёмной темы */ 
const inputColorbgc = footerColorbgc.querySelectorAll('.input_color-bgc'); 
const emailInput = document.querySelector('.footer__input'); 

/* находим селектор кнопки отправки */
const btnSubmit = document.querySelector('.footer__button-submit'); 

const formInputEmail = document.querySelector('.footer__form-email');


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
let btnInputsign = 0;

/*1. Функция добавления - удаления селектора */ 
function toggleSelector(switcher, addClass) {
  switcher.classList.toggle(addClass);
}

/*2. Функция переключения иконок */ 
function toggleIcons(selectSun, selectMoon){
  if(sign === 0){ 
    selectSun.src = "./images/icons/sun_theme-day.svg";
    selectMoon.src = "./images/icons/moon_theme-day.svg";
    btnPrev.style.backgroundImage="url('../images/icons/arrow-prev.svg')";
    btnNext.style.backgroundImage="url('../images/icons/arrow-next.svg')";
  } else {
    selectSun.src = "./images/icons/sun_theme-night.svg";
    selectMoon.src = "./images/icons/moon_theme-night.svg";
    btnPrev.style.backgroundImage="url('../images/icons/arrow-prev-white.svg')";
    btnNext.style.backgroundImage="url('../images/icons/arrow-next-white.svg')";
  }
}

/*3. Функция настройки светлой темы сайта */ 
function getWhiteTheme(){
  textColor.forEach(el => el.style.color = "");
  textColorl.forEach(el => el.style.color = "");
  inputColorbgc.forEach(el =>el.style.backgroundColor = "");
  inputColorbgc.forEach(el =>el.style.color = "");
  pageColorbgc.style.backgroundColor = "";
  headerColorbgc.style.backgroundColor = "";
  btnPrev.style.backgroundColor = "";
  btnNext.style.backgroundColor = "";
  footerColorbgc.style.backgroundColor = "";
  containerColorbgc.style.backgroundColor = "";
  textColorm.style.color = "";
  textColorf.style.color = "";
}

/*4.1 Функция настройки тёмной темы сайта*/ 
function getDarkTheme(){
  textColor.forEach(el => el.style.color = "#fff");
  textColorl.forEach(el => el.style.color = "#e5e5e5");
  inputColorbgc.forEach(el => el.style.backgroundColor = "#2f2f2f");
  inputColorbgc.forEach(el => el.style.color = "#fff");
  pageColorbgc.style.backgroundColor = "#2f2f2f";
  headerColorbgc.style.backgroundColor = "#333333";
  btnPrev.style.backgroundColor = "#434343";
  btnNext.style.backgroundColor = "#434343";
  footerColorbgc.style.backgroundColor = "#2f2f2f";
  containerColorbgc.style.backgroundColor = "#333333";
  textColorm.style.color = "#e6e6e6";
  textColorf.style.color = "#565656";
}

/*4.2 Фукция изменения светлой темы на тёмную */ 
function toggleThemeColor(){
  if (sign === 0){
    getWhiteTheme();
    sign = 1;
  } else {
    getDarkTheme();
    sign = 0;
  }
}

// Функция вывода уведомления об отправке данных e-mail адреса 
function getNotification(){
  emailInput.value = "Спасибо! Ваш email отправлен";
  setTimeout(()=> {
    emailInput.value = "";
  }, 3000);
}

// Функция закрывает кнопку отпавки e-mail адреса 
function setBtnNone(){
  btnSubmit.style = "display: none";
  btnInputsign = 0;
}

/* Функция отправки email адреса */
function submitEmail(evt) {
  evt.preventDefault();
  if(btnInputsign === 1){
  getNotification();
  setBtnNone();
  }
}

/* Функция валидации ввода e-mail адреса */ 
function validateEmail(email){
//регулярное выражение для проверки ввода email
const regExp=/^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
return regExp.test(email);
}

/* Установка прослушивателя на ввод данных в поле вода для проверки на валидность e-mail */ 
emailInput.addEventListener('keyup', () => {
  const inputEmail = emailInput.value;
  if(validateEmail(inputEmail) === true){
    btnSubmit.style = "display: block";
    btnInputsign = 1;
  } else {
    setBtnNone(); 
  }
});

formInputEmail.addEventListener('submit', submitEmail);    




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





