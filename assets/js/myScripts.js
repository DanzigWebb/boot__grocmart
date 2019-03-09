// мои скрипты


function filterGoods () {
  var link = document.getElementsByClassName('products-menu__link');
  for (var i = 0; i < link.length; i++) {
    var linkAll = link[i];
    linkAll.addEventListener('click', linkAddClass);
  }


  var filterBox = document.getElementsByClassName('products-menu')[0];
  var filterBtn = document.getElementsByClassName('products-mobile-button')[0];

  function filterBtnOpen () {
    if  (!filterBox.classList.contains('products-menu--none')) {
      filterBox.classList.add('products-menu--none')
    } else {
      filterBox.classList.remove('products-menu--none');
    }
  };
  filterBtn.addEventListener('click', filterBtnOpen);



  function linkRemoveClass () {
    link.classList.remove('products-menu__link--active');
  };

  function linkAddClass () {
    
    for (var j = 0; j < link.length; j++) {
      link[j].classList.remove('products-menu__link--active');
    };
    this.classList.add('products-menu__link--active');
    var filterShow = document.querySelector('.products-mobile-filter__checked');
    filterShow.innerHTML = this.text;

    if (screen.width <= 576) {
      filterBox.classList.add('products-menu--none')
    };
  };

}
filterGoods ()



// аккардеон
function takeAccordion () {
// поиск разметки аккордиона
var acc = document.getElementsByClassName("mainfaq-accordion")[0];
// поиск кнопок
var accBtn = acc.getElementsByTagName("button");

// первый элемент активен при загрузке страницы --начало
accBtn[0].classList.add("active");
accBtn[0].nextElementSibling.style.maxHeight = accBtn[0].nextElementSibling.scrollHeight + "px"; 
// -- конец

function openAcc () {
  // определение панелей аккардиона как следующий элемент после кнопки
    var panel = this.nextElementSibling
    // присвоение класса при нажатии на кнопку
    this.classList.toggle("active");
    // перебор псевдомассива с кнопками
    for (var j = 0; j < accBtn.length; j ++ ) {
      // сворачивание панели при выборе другой кнопки
      // условие, является ли текущая кнопка активной
      if (accBtn[j] !== this) {
        // если кнопка не является активной, все остальные панели в массиве сворачивается, а кнопки становятся не активными
        accBtn[j].classList.remove("active");
        accBtn[j].nextElementSibling.style.maxHeight = null;
      }
    }
    // если (при клике) панель имеет значение максимальной высоты, то оно обнуляется
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
      // иначе (если при клике панель имеет высоту = 0) панеле присваивается значение высоты = высоте контента 
      panel.style.maxHeight = panel.scrollHeight + "px"; 
    }
    
  }
  // запуск функции при клике на кнопку в переборе псевдамассивов кнопок
  for (i = 0; i < accBtn.length; i++) { 
    var checkBtn = accBtn[i];
    checkBtn.addEventListener('click', openAcc);
}
}

takeAccordion ()

// паралакс

function paralaxIt () {
  let item = document.querySelector('.main-slider');
  let item2 = document.querySelector('.specials-bg');
  let toItem2 = document.querySelector('.specials');  
  window.onscroll = function () {
    let scroll = window.scrollY;
    item.style.transform = "translate(0%, " + scroll /18 + "%";
    item2.style.transform = "translate(0%, " + (scroll - toItem2.offsetTop + document.documentElement.clientHeight)  /22 + "%";
  }
}
paralaxIt ()