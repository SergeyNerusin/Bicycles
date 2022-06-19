/* jshint esversion:6 */

const dataBike = {
  road:{ 
    title: "Шоссе", 
    paragrahp:"На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.", 
    srcImgRoad:["./images/road-mountain.png", "./images/road-country.png"], 
    sing:"./images/icons/line-curve.svg",
    name:["Cervelo Caledonia-5", "Cannondale Systemsix Himod","Trek Domane SL-7"],
    link:[ "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN", "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J", "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"], 
    bicyclesImg:["./images/sys-cerveloCaledon.png", "./images/sys-cannondaleSystemsix.png", "./images/sys-trekDomane.png"],
  }, 
   
  grevel:{
    title: "Гревел",
    paragrahp:"Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    srcImgRoad :["./images/road-country.png", "./images/road-highway.png"], 
    sing: "./images/icons/line-wavy.svg",
    name:["Cervelo Aspero GRX 810", "Specialized S-Works Diverge", "Cannondale Topstone Lefty 3"],
    link:["https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE", "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9", "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"],
    bicyclesImg:["./images/sys-cerveloAspero.png", "./images/sys-S-WorksDiverge.png", "./images/sys-cannondaleTopstone.png"],
  },

  tt:{
    title: "TT",
    paragrahp:"ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    srcImgRoad:["./images/road-highway.png ", "./images/road-mountain.png"], 
    sing:"./images/icons/line-flat.svg",
    name:["Specialized S-Works Shiv","BMC Timemachine 01 ONE","Cervelo P-Series"],
    link:["https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9","https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835","https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"],
    bicyclesImg:["./images/sys-S-WorksShiv.png", "./images/sys-BMC-Timemachine.png","./images/sys-cerveloP-Series.png"],
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
const textColorMob =document.querySelectorAll('.text_color-mob');

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


/* Функция добавления - удаления селектора */ 
function toggleSelector(switcher, addClass) {
  switcher.classList.toggle(addClass);
}

/* Функция переключения иконок */ 
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

/* Функция настройки светлой темы сайта */ 
function getWhiteTheme(){
  textColor.forEach(el => el.style.color = "");
  textColorMob.forEach(el => el.style.color = "");
    if(document.documentElement.clientWidth < 768){
      textColorMob.forEach(el => el.style.color = "#151515");
    } 
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

/* Функция настройки тёмной темы сайта*/ 
function getDarkTheme(){
  textColor.forEach(el => el.style.color = "#fff");
  textColorMob.forEach(el => el.style.color = "#fff");
    if(document.documentElement.clientWidth < 768){
      textColorMob.forEach(el => el.style.color = "#151515");
    } 
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

/* Фукция изменения светлой темы на тёмную */ 
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

window.addEventListener('resize', ()=>{
  if(document.documentElement.clientWidth < 768){
     textColorMob.forEach(el => el.style.color = "#151515");
  } else { if (sign === 0){
    textColorMob.forEach(el => el.style.color = "#fff");}
    if(sign === 1){
      textColorMob.forEach(el => el.style.color = "");}
    }
});


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

/* Определяем селекторы кнопок блока road */ 
const road = document.querySelector('.road');
const roadTitle = road.querySelector('.road__title');
const roadParagraph = road.querySelector('.road__paragraph');
const roadImg = road.querySelectorAll('.road__img');
const roadBtnNext = road.querySelector('.road__button-next');
const roadBtnNextmob = road.querySelector('.road__button-nextmob');
const roadBtnPrev = road.querySelector('.road__button-prev');
const roadBtnPrevmob = road.querySelector('.road__button-prevmob');
const roadSign = road.querySelector('.road__sign-svg');
/* Определяем селекторы кнопок и ссылок блока bike */ 
const bike = document.querySelector('.bike');
const btnBlock = bike.querySelector('.bike__name-items');
const btnBike = btnBlock.querySelectorAll('.bike__name-link');
const bikeSystemFoto = bike.querySelectorAll('.bike__system-foto');
const bikeSystemName = bike.querySelectorAll('.bike__system-name');  

/* Точки под фото */
const bikeDot = bike.querySelectorAll('.bike-dot__item');


const dataKey = Object.keys(dataBike);
const long = Object.keys(dataBike).length - 1;
/* Счетчик переключений */ 
let count = 1;

/* Кнопки в блоке Велосипеды - запоминаем индекс кнопки на которой
   было произведено нажатие */ 
let btnCount = 0;

/* Для отрисовки текcта, фото и индикатора дороги  в секции Дорога */ 
function switchDate(objectName, count) {
  function setpaddingsing(){
    switch (count) {
    case 0:
      roadSign.style ="padding: 12px 34px 12px 16px";
      break;
    case 1:
      roadSign.style ="padding: 23px 34px 12px 16px";
      break;
    case 2:
      roadSign.style ="padding: 28px 34px 12px 16px";
      break;  
    default:
      console.log(`Значение count: ${count} неопределено.`);
   }
  }
  roadTitle.textContent = objectName.title;
  roadParagraph.textContent = objectName.paragrahp;
  roadImg[0].src = objectName.srcImgRoad[0];
  roadImg[1].src = objectName.srcImgRoad[1];
  setpaddingsing();
  roadSign.src = objectName.sing; 
}

/* Для отрисовки картинок в секции Велосипеды */ 
function switchImgBike(objectName) {
  for(i=0; i < btnBike.length; i++){
    bikeSystemFoto[i].src = objectName.bicyclesImg[i];
    bikeSystemName[i].href = objectName.link[i];
    bikeSystemName[i].textContent = objectName.name[i];
  }
}

/* Для перебора фото в секции Велосипеды моб. версии */
function switchImgmob(objectName, count) {
  bikeSystemFoto[0].src = objectName.bicyclesImg[count];
  bikeSystemName[0].textContent = objectName.name[count];
} 

/* Для инициализации точек под фото - в начальное положение припереключении 
типа велосипедов.
*/ 
function getInitDot(){
  for(i = 0; i < bikeDot.length; i++){
    if(i === 0){
      bikeDot[i].classList.add('bike-dot__item_active');
    } else {
             bikeDot[i].classList.remove('bike-dot__item_active');
           } 
  }
}


road.addEventListener('click', (event) => {
  if(event.target === roadBtnNext || event.target === roadBtnNextmob){
      count++;
        if(count > long){
          count = 0; 
        } 
    }

  if(event.target === roadBtnPrev || event.target === roadBtnPrevmob){
      count--;
        if(count < 0){
          count = long; 
        } 
  }
  switchDate(dataBike[dataKey[count]], count);
});

/* Определяем по какой кнопке кликнули и предаем ссылку объкта для отрисовки данных 
в блоке Велосипеды */ 
btnBlock.addEventListener('click', (event) => {
  btnBike[btnCount].classList.remove('bike__name-link_selected');
    for(i=0; i < btnBike.length; i++){
      if(event.target === btnBike[i]){
        event.target.classList.add('bike__name-link_selected');
        console.log(dataBike[dataKey[i]]);
        btnCount = i;
        switchImgBike(dataBike[dataKey[i]]);
      }
    }
});

let countmob = 0;

/* Форма select - option на мобильном */
const selectForm = bike.querySelector('.bike-selected');
let index = selectForm.selectedIndex;
selectForm.addEventListener('click', (event) => {
  if(selectForm.selectedIndex !== index){
      switchImgBike(dataBike[dataKey[selectForm.selectedIndex]]);
      index = selectForm.selectedIndex;
      countmob = 0;
      getInitDot();
    }
}); 

let longmob = dataBike[dataKey[index]].bicyclesImg.length - 1;

/* Для получения данных всех координат элемента на разрешении экрана шириной 350px 
- нужные по оси х для разделения границ при клике, для перебора фото */ 
// const getbikeSystemFotoCoordinate = bikeSystemFoto[0].getBoundingClientRect();
// console.log(getbikeSystemFotoCoordinate);

bikeSystemFoto[0].addEventListener('click', function(event){
  if (document.documentElement.clientWidth <= 350) {
    let coordX = event.clientX;
    //console.log('click');
    bikeDot[countmob].classList.remove('bike-dot__item_active'); 
      if(34 <= coordX && coordX <= 142){ 
        //console.log('Prev', event.clientX);
        countmob--;
          if(countmob < 0) {
            countmob = longmob;
          }
      }
      if(143 <= coordX && coordX <= 300){ 
        //console.log('Next', event.clientX);
        countmob++;
          if(countmob > longmob){
            countmob = 0;
          }
      }
    bikeDot[countmob].classList.add('bike-dot__item_active');  
    switchImgmob(dataBike[dataKey[index]], countmob);
  } 
}); 

