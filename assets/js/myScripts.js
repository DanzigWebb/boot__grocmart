// мои скрипты

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
  if (screen.width <= 576) {
    filterBox.classList.add('products-menu--none')
  };
};

// аккардеон

var acc = document.getElementsByClassName("mainfaq-accordion")[0];
var accBtn = acc.getElementsByTagName("button")
var accPanel = acc.getElementsByTagName("div");

function openAcc () {
    var panel = this.nextElementSibling
    this.classList.toggle("active");
    for (var j = 0; j < accBtn.length; j ++ ) {
      if (accBtn[j] !== this) {
        accBtn[j].classList.remove("active");
        accBtn[j].nextElementSibling.style.maxHeight = null;
      }
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
      panel.style.maxHeight = panel.scrollHeight + "px"; 
    }
    
  }
// for (var j = 0; j < panel.length; j ++) {
      //   if (panel.style.maxHeight) {
      //   panel.style.maxHeight = null;
      //   }
      // }
for (i = 0; i < accBtn.length; i++) { 
  var checkBtn = accBtn[i];
  console.log(checkBtn)
  checkBtn.addEventListener('click', openAcc);
}

// for (i = 0; i < accBtn.length; i++) {
//   accBtn[i].onclick = function() {
//     this.classList.toggle("active");

//     var panel = this.nextSibling;
//     panel.style.maxHeight = Panel.scrollHeight + "px"
//     for ( var j = 0; j < accPanel.length; j++) {
//       accPanel[j].style.maxHeight = accPanel.scrollHeight + "px"
//     }
    
    
//   }
// }


// function openAcc () {
//   for (i = 0; i < accBtn.length; i++) {
//     var checkBtn = accBtn[i];
//     checkBtn.classList.toggle("active");
//     console.log(checkBtn.nextElementSibling)
//     var myAccPanel = checkBtn.nextElementSibling;
//     myAccPanel.style.maxHeight = myAccPanel.scrollHeight + "px"
//   }
// }