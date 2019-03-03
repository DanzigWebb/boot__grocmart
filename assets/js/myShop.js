window.onload = function() {
  let cart = {};
  let goods = {};
  
  // загрузка из корзины
  function loadCartFromStorage () {
    // проверка существует ли массив при загрузке страницы
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      document.querySelector('.products-box-bracket').style.display = 'none';
    }
  }

  loadCartFromStorage ();

  // посылаем запрос к таблице
  let getJson = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      let status = xhr.status;
      if (status == 200) {
        callback (null, xhr.response)
      } 
      else {
        callback (status, xhr.response)
      }
    };
    xhr.send();
  }

  getJson ('https://spreadsheets.google.com/feeds/list/1mGdhbeyQHEm-HbJe67IGD_3n5Pdltrw_1p8GUkYh-Ps/od6/public/values?alt=json', function(err, data) {
    if (err !== null) {
    }
    else {
      data = data['feed']['entry'];
      goods = arrowHelper(data);
      document.querySelector('.products-item').innerHTML = showGoods(data);
      showCart();
    }
  });

  // приведение полученного массива в упорядоченные данные

  function arrowHelper (arr) {
    let out = {};
    for (let i = 0; i < arr.length; i++) {
      let temp = {};
      temp['articul'] = arr[i]['gsx$articul']['$t'];
      temp['name'] = arr[i]['gsx$name']['$t'];
      temp['image'] = arr[i]['gsx$image']['$t']
      temp['cost'] = arr[i]['gsx$cost']['$t'];
      temp['sale'] = arr[i]['gsx$sale']['$t'];
      temp['newGood'] = arr[i]['gsx$new']['$t'];
      out[ arr[i]['gsx$id']['$t'] ] = temp;
    }
    return out; 
  }


  function showGoods (data) {
    let five = 5;
    let out = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i]['gsx$show']['$t'] !== 0) {
        var name = goods[i]['name'];
        var pict = goods[i]['image'];
        var cost = goods[i]['cost'];
        var sale = goods[i]['sale'];
        var newGood = data[i]['gsx$new']['$t'];
        var idGoods = data[i]['gsx$id']['$t'];

        out += `<div class="products-box-item col-lg-3 col-md-4 col-sm-6 col-sx-12 mr-auto text-center">`;
        out += `<div class="products-box-img-wrapper"> <img src="${pict}"></div>`
        out += `<h5 class="title-3 products-box-item__title">${name}</h5>`;
        out += `<p class="products-box-item__cost">$ ${cost}</p>`;
        if (sale == 1) {
          out += `<p class="products-box-item__special products-box-item__special--sale">sale</p>`;
        };
        if (newGood == 1) {
          out += `<p class="products-box-item__special products-box-item__special--new">new</p>`;
        };
        out += `<button type="button" class="main-btn add-to-card" data="${idGoods}" name="add-card"></button>`;
        out += `</div>`
      }
    }
    return out;
  }
  
  // отлавливание события нажатия на кнопку покупки и определение типа товара при нажатии на кнопку

  document.onclick = function(e) {
    if ( e.target.attributes.name != undefined ) {
      if (e.target.attributes.name.nodeValue == 'add-card') {
        addToCard(e.target.attributes.data.nodeValue);
        document.querySelector('.products-box-bracket').style.display = 'block';
      }
      // удаление товаров
      else if (e.target.attributes.name.nodeValue == 'delete-goods') {
        delete cart[e.target.attributes.data.nodeValue];
        showCart();
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart)
      }
      // прибавление количества товаров на 1 единицу
      else if (e.target.attributes.name.nodeValue == 'plus-goods') {
        cart[e.target.attributes.data.nodeValue]++;
        showCart();
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart)
      }
      // удаление количества товаров на 1 единицу
      else if (e.target.attributes.name.nodeValue == 'minus-goods') {
        // условие, если количество товаров = 0, то товар удаляется с корзины
        if (cart[e.target.attributes.data.nodeValue] - 1 == 0) {
          delete cart[e.target.attributes.data.nodeValue];
        }
        else {
          cart[e.target.attributes.data.nodeValue]--;
        }
        
        showCart();
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    return false
  }

  function addToCard(elem) {
    if (cart[elem] !== undefined) {
      cart[elem] ++;
    }
    else {
      cart[elem] = 1;
    }
    showCart ();
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function showCart(){
    let ul = document.querySelector('.products-box-cart');
    ul.innerHTML =  '';
    let sum = 0;
    for (let key in cart) {
      let li = '<li>';
      li += goods[key]['name'] + ' ';
      li += cart[key] + 'pc ';
      li += ` <button name="plus-goods" class="products-box-cart__plus products-box-cart__button" data="${key}">+</button>`;
      li += ` <button name="minus-goods" class="products-box-cart__minus products-box-cart__button" data="${key}">-</button>`;
      li += goods[key]['cost']*cart[key] + ' $';
      li += ` <button name="delete-goods" class="products-box-cart__delete products-box-cart__button" data="${key}">x</button>`;
      li += '</li>';
      sum += goods[key]['cost']*cart[key];
      ul.innerHTML += li;
    }
    if (sum == 0) {
      // удаление корзины когда в ней нет товаров
      document.querySelector('.products-box-bracket').style.display = 'none';
    }
    ul.innerHTML += '<li>Total: '+sum + ' $</li>';
    
  }
}
