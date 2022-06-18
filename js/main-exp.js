/* jshint esversion:6 */

const dataBike = {
  road:{ 
    title: "Шоссе", 
    paragrahp:"На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.", 
    name:["Cervelo Caledonia-5","Cannondale Systemsix Himod","Trek Domane SL-7"],
    link:[ "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN", "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J", "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"], 
    srcImg:["./images/sys-cerveloCaledon.png", "./images/sys-cannondaleSystemsix.png", "./images/sys-trekDomane.png"], 
    sign:"./images/icons/line-curve.svg"},
 
  grevel:{
    title: "Гревел",
    paragrahp:"Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    name:["Cervelo Aspero GRX 810", "Specialized S-Works Diverge", "Cannondale Topstone Lefty 3"],
    link:["https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE", "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9", "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"],
    srcImg:["./images/sys-cerveloAspero.png","./images/sys-S-WorksDiverge.png","./images/sys-cannondaleTopstone.png"],
    sing:"./images/icons/line-wavy.svg"
  },

  tt:{
    title: "TT",
    paragrahp:"ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    name:["Specialized S-Works Shiv","BMC Timemachine 01 ONE","Cervelo P-Series"],
    link:["https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9","https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835","https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"],
    images:["./image/sys-S-WorksShiv.png", "./image/sys-BMC-Timemachine.png","./image/sys-cerveloP-Series.png"],
    sing:"./image/icons/line-flat.svg"
  }
};

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

/* Находим селектор линии в блоке typestart */ 
const hatchColorbgc = document.querySelector('.hatch_color-bgc');

/* Находим селектора кнопок prev, next  в секции road (Дорога) */
const btnPrev = document.querySelector('.road__button-prev');
const btnNext = document.querySelector('.road__button-next');

/* Находим селектор футера */ 
const footerColorbgc = document.querySelector('.footer_color-bgc');

/* Для установки светлой или тёмной темы */ 
const inputColorbgc = footerColorbgc.querySelectorAll('.input_color-bgc'); 


/* находим селектор формы */
const formInputEmail = document.querySelector('.footer-form');

/*находим селектор поля ввода e-mail адреса*/
const emailInput = formInputEmail.querySelector('.footer-form__input');

/* находим селектор кнопки отправки */
const btnSubmit = formInputEmail.querySelector('.footer-form__btn-submit');

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
const burgerBtnColor = document.querySelectorAll('.button_color-bgc');

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

/* Признак для переключения темы переключения */ 
let sign = 1;


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
  inputColorbgc.forEach(el => el.style.backgroundColor = "");
  inputColorbgc.forEach(el => el.style.color = "");
  burgerBtnColor.forEach(el => el.style.backgroundColor = "");
  burgerBtnColor.forEach(el => el.style.border = "");
  pageColorbgc.style.backgroundColor = "";
  headerColorbgc.style.backgroundColor = "";
  hatchColorbgc.style.backgroundColor = "";
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
  burgerBtnColor.forEach(el => el.style.backgroundColor = "#fff");
  burgerBtnColor.forEach(el => el.style.border = "1px solid #fff");
  pageColorbgc.style.backgroundColor = "#2f2f2f";
  headerColorbgc.style.backgroundColor = "#333333";
  hatchColorbgc.style.backgroundColor ="#707070";
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
  emailInput.value = "Круто!";
  setTimeout(()=> {
    emailInput.value = "";
    // убираем фокус 
    document.activeElement.blur();
  }, 3000);
}

/* функция обработки события submit */ 
function submitEmail(evt) {
  evt.preventDefault();
  getNotification();
  btnSubmit.style.display = "none";
   
}

emailInput.addEventListener('focus', () => {
  btnSubmit.style.display = "block";
});

emailInput.addEventListener('blur', () => {
  btnSubmit.style.display = "none";
  emailInput.value = "";
});

/* обработка нажатия на кнопку ок в инпуте */ 
btnSubmit.addEventListener('mousedown', (evt) => {
  if (document.activeElement === emailInput) {
      evt.preventDefault();
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





