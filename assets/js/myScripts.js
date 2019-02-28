// мои скрипты

var link = document.getElementsByClassName('products-menu__link');
for (var i = 0; i < link.length; i++) {
  var linkAll = link[i];
  linkAll.addEventListener('click', linkAddClass);
}

console.log(screen.width)

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
  if (screen.width <= 576) {
    filterBox.classList.add('products-menu--none')
  };
};