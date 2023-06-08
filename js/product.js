function createProductWindow(
  item,
  productName,
  productSizesAndPrices,
  productImageMajor,
  productImageMinor1,
  productImageMinor2
) {
  // создаем количество кнопок с размером и ценой исходя из товара и помечаем те, что отсутствуют
  size_buttons = [];
  for (size of Object.keys(productSizesAndPrices)) {
    price = productSizesAndPrices[size].price;
    availability = productSizesAndPrices[size].availability;
    button = `<button class="productWindow__sizesSelect">
      <span class="productWindow__sizesLabel">${size}</span>
      <span class="productWindow__sizesPrice">${productSizesAndPrices[size].price}</span>
    </button>`;

    if (!availability) {
      button = button.replace('class="productWindow__sizesPrice"', 'class="productWindow__sizesPrice--missing"');
    }

    size_buttons.push(button);
  }

  //HTML-код окна с товаром
  let product = `<div class="productWindow">
      <div class="wrap wrap--productWindow">
        <svg
          class="productWindow__close"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#041827"
            d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
          ></path>
        </svg>

        <div class="productWindow__productPics">
          <div class="productWindow__productPics_major">
            <img class="productWindow__productPics_majorImg" src="${productImageMajor}" alt="" />
          </div>
          <div class="productWindow__productPics_minor">
            <img
              class="productWindow__productPics_minorImg productWindow__productPics_minorImg--selected"
              src="${productImageMajor}"
              alt=""
            />
            <img class="productWindow__productPics_minorImg" src="${productImageMinor1}" alt="" />
            <img class="productWindow__productPics_minorImg" src="${productImageMinor2}" alt="" />
          </div>
        </div>
        <div class="productWindow__productInfo">
          <h4 class="productWindow__title">${productName}</h4>
          <p class="productWindow__price">${Object.values(productSizesAndPrices)[0].price}</p>
          <div class="productWindow__sizes">
            <p class="productWindow__showSizesTable">
              Размерная сетка
            </p>
            ${size_buttons.toString().replaceAll(",", "")}
          </div>
          <button class="productWindow__addButton">Добавить в корзину</button>
        </div>
      </div>
    </div>`;

  //HTML-код окна с таблицей размеров
  let sizeChart = `<div class="sizeChart sizeChart--hidden">
      <div class="sizeChart__wrapper">
        <svg
          class="sizeChart__close"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#041827"
            d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
          ></path>
        </svg>
        <p class="sizeChart__Info">Таблица размеров</p>
        <table class="sizeChart__table">
  <thead class="sizeChart__tableHead">
    <th>US</th>
    <th>UK</th>
    <th>EUR</th>
    <th>RUS</th>
    <th>CM</th>
  </thead>
  <tbody>
    <tr class="sizeChart__tableRow">
      <td>5</td>
      <td>4.5</td>
      <td>37.5</td>
      <td>37.5</td>
      <td>23</td>
    </tr>
    <tr class="sizeChart__tableRow">
      <td>5.5</td>
      <td>5</td>
      <td>38</td>
      <td>38</td>
      <td>23.5</td>
    </tr>
    <tr class="sizeChart__tableRow">
      <td>6</td>
      <td>5.5</td>
      <td>38.5</td>
      <td>38.5</td>
      <td>24</td>
    </tr>
    <tr class="sizeChart__tableRow">
      <td>6.5</td>
      <td>6</td>
      <td>39</td>
      <td>39</td>
      <td>24.5</td>
    </tr>
    <tr class="sizeChart__tableRow">
  <td>7</td>
  <td>6.5</td>
  <td>39.5</td>
  <td>39.5</td>
  <td>25</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>7.5</td>
  <td>7</td>
  <td>40</td>
  <td>40</td>
  <td>25.5</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>8</td>
  <td>7.5</td>
  <td>40.5</td>
  <td>40.5</td>
  <td>26</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>8.5</td>
  <td>8</td>
  <td>41</td>
  <td>41</td>
  <td>26.5</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>9</td>
  <td>8.5</td>
  <td>42</td>
  <td>42</td>
  <td>27</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>9.5</td>
  <td>9</td>
  <td>42.5</td>
  <td>42.5</td>
  <td>27.5</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>10</td>
  <td>9.5</td>
  <td>43</td>
  <td>43</td>
  <td>28</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>10.5</td>
  <td>10</td>
  <td>44</td>
  <td>44</td>
  <td>28.5</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>11</td>
  <td>10.5</td>
  <td>44.5</td>
  <td>44.5</td>
  <td>29</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>11.5</td>
  <td>11</td>
  <td>45</td>
  <td>45</td>
  <td>29.5</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>12</td>
  <td>11.5</td>
  <td>45.5</td>
  <td>45.5</td>
  <td>30</td>
</tr>
<tr class="sizeChart__tableRow">
  <td>12.5</td>
  <td>12</td>
  <td>46</td>
  <td>46</td>
  <td>30.5</td>
</tr>
  </tbody>
</table>
      </div>
    </div>`;

  //создаем окно товара и таблицы размеров, убираем скролл по странице
  $(product).insertAfter("footer");
  $(sizeChart).insertAfter(".productWindow");
  $("body").css("overflow", "hidden");

  //закрыть окно товара и вернуть скролл по странице
  $(".productWindow__close").click(function () {
    $(".productWindow").remove();
    $(".sizeChart").remove();
    $("body").css("overflow", "auto");
  });

  //выделяем первую кнопку
  $(".productWindow__sizesSelect").first().addClass("productWindow__sizesSelect--selected");

  //кликаем в картинку товара и делаем ее большой
  $(".productWindow__productPics_minorImg").click(function () {
    $(".productWindow__productPics_minorImg").removeClass("productWindow__productPics_minorImg--selected");
    $(this).addClass("productWindow__productPics_minorImg--selected");
    $(".productWindow__productPics_majorImg").attr("src", $(this).attr("src"));
  });

  //показать таблицу размеров
  $(".productWindow__showSizesTable").click(function () {
    $(".sizeChart").toggleClass("sizeChart--hidden");
    $(".productWindow__close").toggleClass("productWindow__close--hidden");
  });

  //закрыть таблицу размеров
  $(".sizeChart__close").click(function () {
    $(".sizeChart").toggleClass("sizeChart--hidden");
    $(".productWindow__close").toggleClass("productWindow__close--hidden");
  });

  //выбрать другой размер, поменять цену и оповестить, если отсутствует
  $(".productWindow__sizesSelect").click(function () {
    $(".productWindow__sizesSelect").removeClass("productWindow__sizesSelect--selected");
    $(this).addClass("productWindow__sizesSelect--selected");
    $(".productWindow__price")[0].innerText = this.children[1].innerText;
    if ($(this.children[1]).hasClass("productWindow__sizesPrice--missing")) {
      $(".productWindow__price").append(`<span class="productWindow__warningLabel">
              К сожалению, данного товара в данный момент нет в наличии на ближайшем складе, доставка составит до 30 дней, но вы можете оставить заказ на этот товар
        </span>`);
    } else {
      $(".productWindow__warningLabel").remove();
    }
  });
  //добавить товар в корзину, создать метку об этом, создать окно оповещения о добавлении
  $(".productWindow__addButton").click(function () {
    productSize = $(".productWindow__sizesSelect--selected")[0].children[0].innerText;
    productPrice = $(".productWindow__sizesSelect--selected")[0].children[1].innerText;

    if (item.productSizesAndPrices[productSize].inCart) {
      $(".productWindow__price").append(`<span class="productWindow__warningLabel">
              Этот товар уже лежит в вашей корзине
        </span>`);
      return;
    } else {
      $(".productWindow__warningLabel").remove();
      item.productSizesAndPrices[productSize].inCart = true;
      productAddedToCartWindow(item, productName, productSize, productPrice, productImageMajor);
    }
  });
}

function productAddedToCartWindow(item, productName, productSize, productPrice, productImage) {
  //HTML-код окна-уведомления о добавлении в корзину, сразу добавляем его после .productWindow
  let productAddedWindow = `<div class="addedProductWindow">
      <div class="addedProductWindow__wrapper">
        <svg
          class="addedProductWindow__close"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#041827"
            d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
          ></path>
        </svg>
        <h2 class="addedProductWindow__title">Добавили ваш товар в корзину!</h2>
        <div class="addedProductWindow__info">
          <img src="${productImage}" alt="" class="addedProductWindow__image" />
          <div class="addedProductWindow__infoText">
            <h4 class="addedProductWindow__name">${productName} (${productSize})</h4>
            <span class="addedProductWindow__price">${productPrice}</span>
            <button class="addedProductWindow__cartButton">Открыть корзину</button>
            <button class="addedProductWindow__orderButton">Оформить заказ</button>
          </div>
        </div>
        <span class="addedProductWindow__continue">Продолжить покупки</span>
      </div>
    </div>`;
  $(productAddedWindow).insertAfter(".productWindow");

  //добавляем товар в корзину
  addToCart(item, productName, productSize, productPrice, productImage);

  //закрываем все модальные окна при клике в крестик или в "продолжить"
  $(".addedProductWindow__close").click(function () {
    $(".productWindow").remove();
    $(".addedProductWindow").remove();
    $(".sizeChart").remove();
    $("body").css("overflow", "auto");
  });
  $(".addedProductWindow__continue").click(function () {
    $(".productWindow").remove();
    $(".addedProductWindow").remove();
    $(".sizeChart").remove();
    $("body").css("overflow", "auto");
  });

  //открываем корзину при клике в "открыть корзину"
  $(".addedProductWindow__cartButton").click(function () {
    $(".productWindow").remove();
    $(".addedProductWindow").remove();
    $(".sizeChart").remove();
    $(".cart").removeClass("cart--hidden");
  });

  //сразу оформляем заказ при клике в "оформить заказ"
  $(".addedProductWindow__orderButton").click(function () {
    $(".productWindow").remove();
    $(".addedProductWindow").remove();
    $(".sizeChart").remove();
    $(".cart").removeClass("cart--hidden");
    $(".cart__close").addClass("cart__close--hidden");
    createOrder();
  });
}

function addToCart(item, productName, productSize, productPrice, productImage) {
  //HTML-код товара в корзине, сразу его туда добавляем, если это первый товар, убираем "пустая корзина"
  let cartItem = `<div class="cart__item">
      <img src="${productImage}" alt="" class="cart__itemImage" />
      <h4 class="cart__itemName">${productName} (${productSize})</h4>
      <div class="cart__itemChangeAmount">- 1 +</div>
      <span class="cart__itemPrice">${productPrice}</span>
      <svg
        class="cart__itemDelete"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
        fill="#041827"
        d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
      ></path>
    </svg>
  </div>`;
  $(".cart__itemWrapper").append(cartItem);
  if ($(".cart__itemWrapperEmpty")[0]) {
    $(".cart__itemWrapperEmpty").addClass("cart__itemWrapperEmpty--hidden");
    $(".cart__order").removeClass("cart__order--hidden");
  }

  //изменяем цифру товаров в корзине, и меняем общую сумму
  $(".header__cartCount").text(parseInt($(".header__cartCount").text()) + 1);
  $(".cart__orderPrice").text(
    parseInt($(".cart__orderPrice").text()) + parseInt(productPrice.replaceAll(" ", "")) + "р"
  );

  //запрещаем менять количество товара
  $(".cart__itemChangeAmount")
    .last()
    .click(() => alert("Этот товар доступен только в единственном экземпляре"));

  //удаление товара при клике в крестик
  $(".cart__itemDelete")
    .last()
    .click(function () {
      item.productSizesAndPrices[productSize].inCart = false;
      $(this.parentNode).remove();
      $(".header__cartCount").text(parseInt($(".header__cartCount").text()) - 1);
      $(".cart__orderPrice").text(
        parseInt($(".cart__orderPrice").text()) - parseInt(productPrice.replaceAll(" ", "")) + "р"
      );

      if (!$(".cart__itemWrapper")[0].children[1]) {
        $(".cart__itemWrapperEmpty").removeClass("cart__itemWrapperEmpty--hidden");
        $(".cart__order").addClass("cart__order--hidden");
      }
    });
}

function createOrder() {
  //Подготавливаем данные товаров в заказе
  let productInfo = [];
  for (i of $(".cart__item")) {
    productInfo.push({
      name: i.children[1].innerText,
      price: i.children[3].innerText,
      image: i.children[0].getAttribute("src"),
    });
  }
  let items = [];
  for (let prop of productInfo) {
    //HTML-код товара, который в заказе
    let item = `<div class="order__itemWrapper">
      <img src="${prop.image}" alt="" class="order__itemImage" />
      <div class="order__itemText">
        <h4 class="order__itemName">${prop.name}</h4>
        <span class="order__itemPrice">${prop.price}</span>
      </div>
    </div>`;
    items.push(item);
  }

  //HTML-код окна с товаром и создаем его
  let orderWindow = `<div class="order">
    <div class="order__wrapper">
      <svg class="order__close" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#041827"
          d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
        ></path>
      </svg>
      <h2 class="order__title">Оформление заказа</h2>
      <div class="order__info">
        <p class="order__label">Ваш заказ</p>
        <p class="order__label">Контактные данные</p>
        <div class="order__item">
          ${items.toString().replaceAll(",", "")}
          <h4 class="order__itemTotal">Итого: ${$(".cart__orderPrice").text()}</h4>
        </div>
        <form class="order__form" action="send.php" method="POST">
          <p class="order__formLabel">Имя</p>
          <input required placeholder="Ваше имя" class="order__formInput" type="text" name="name"/>
          <p class="order__formLabel">Номер телефона</p>
          <input required placeholder="Ваш номер телефона" class="order__formInput" type="text" name="phone"/>
          <p class="order__formLabel">Как с вами связаться?</p>
          <select class="order__formSelect" name="communication">
            <option class="order__formOption" value="Звонок по телефону">Звонок по телефону</option>
            <option class="order__formOption" selected value="Написать в Telegram">Написать в Telegram</option>
            <option class="order__formOption" value="Написать в WhatsApp">Написать в WhatsApp</option>
          </select>
          <p class="order__formLabel">Комментарий к заказу (необязательно)</p>
          <textarea placeholder="Ваши пожелания" class="order__formTextarea" name="comment"></textarea>
          <button class="order__formButton" type="submit">Оставить заявку</button>
        </form>
      </div>
    </div>
  </div>`;
  $(orderWindow).insertAfter(".cart");

  $(".order__formInput").slice(1, 2).mask("+7(000) 000-00-00"); // маска на инпут с номером телефона
  $(".order__formButton").click(function (e) {
    if (!$(".order__formInput")[0].value || !$(".order__formInput")[1].value) {
      alert("Вы заполнили не все поля формы");
      return;
    }
    e.preventDefault();
    let formData = $(".order__form").serialize();
    let orderData = $(".order__item").text().replaceAll("\n", " ");
    formData += "&orderData=" + encodeURIComponent(orderData);
    $.ajax({
      type: "POST",
      url: "send.php",
      data: formData,
      success: function () {
        // Обработка успешного ответа от сервера, возврат к начальному состоянию сайта
        $(".order").remove();
        $(".cart__item").remove();
        $(".cart__itemWrapperEmpty").removeClass("cart__itemWrapperEmpty--hidden");
        $(".cart__orderPrice").text("0р");
        $(".cart__order").addClass("cart__order--hidden");
        $(".cart__close").removeClass("cart__close--hidden");
        $(".cart").addClass("cart--hidden");
        $(".header__cartCount").text(0);
        $("body").css("overflow", "auto");
        setTimeout(() => {
          alert("Мы приняли ваш заказ, свяжемся с вами в ближайшее время!");
        }, 1);

        for (let item of $(".item")) {
          for (let size of Object.keys(item.productSizesAndPrices)) {
            item.productSizesAndPrices[size].inCart = false;
          }
        }
      },
      error: function () {
        // Обработка ошибки при отправке формы
        alert("Произошла ошибка при отправке формы. Попробуйте ее отправить еще раз");
      },
    });
  });
  //закрыть окно с заказом
  $(".order__close").click(function () {
    $(".order").remove();
    $(".cart__close").removeClass("cart__close--hidden");
  });
}

function createRequest() {
  let orderWindow = `<div class="order">
    <div class="order__wrapper">
      <svg class="order__close" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#041827"
          d="M10.4144 7.99995L16.6575 1.76968C17.0638 1.36443 17.0638 0.709193 16.6575 0.30394C16.2514 -0.101313 15.5948 -0.101313 15.1887 0.30394L8.94539 6.53421L2.70225 0.30394C2.29595 -0.101313 1.63953 -0.101313 1.23343 0.30394C0.827138 0.709193 0.827138 1.36443 1.23343 1.76968L7.47657 7.99995L1.23343 14.2302C0.827138 14.6355 0.827138 15.2907 1.23343 15.696C1.43582 15.8981 1.70192 15.9997 1.96784 15.9997C2.23376 15.9997 2.49967 15.8981 2.70225 15.696L8.94539 9.4657L15.1887 15.696C15.3913 15.8981 15.6572 15.9997 15.9231 15.9997C16.189 15.9997 16.455 15.8981 16.6575 15.696C17.0638 15.2907 17.0638 14.6355 16.6575 14.2302L10.4144 7.99995Z"
        ></path>
      </svg>
      <h2 class="order__title">Оформление заявки</h2>
      <div class="order__info">
        <p class="order__label" style="flex-basis: 100%;">Контактные данные</p>
        <form class="order__form" style="flex-basis: 100%" action="send.php" method="POST">
          <p class="order__formLabel">Имя</p>
          <input required placeholder="Ваше имя" class="order__formInput" type="text" name="name"/>
          <p class="order__formLabel">Номер телефона</p>
          <input required placeholder="Ваш номер телефона" class="order__formInput" type="text" name="phone"/>
          <p class="order__formLabel">Как с вами связаться?</p>
          <select class="order__formSelect" name="communication">
            <option class="order__formOption" value="Звонок по телефону">Звонок по телефону</option>
            <option class="order__formOption" selected value="Написать в Telegram">Написать в Telegram</option>
            <option class="order__formOption" value="Написать в WhatsApp">Написать в WhatsApp</option>
          </select>
          <p class="order__formLabel">Что вы хотите?</p>
          <textarea required placeholder="Ваши пожелания" class="order__formTextarea" name="comment"></textarea>
          <button class="order__formButton" type="submit">Оставить заявку</button>
        </form>
      </div>
    </div>
  </div>`;
  $(orderWindow).insertAfter(".cart");
  $(".order__formInput").slice(1, 2).mask("+7(000) 000-00-00"); // маска на инпут с номером телефона
  $(".order__formButton").click(function (e) {
    if (!$(".order__formInput")[0].value || !$(".order__formInput")[1].value || !$(".order__formTextarea")[0].value) {
      alert("Вы заполнили не все поля формы");
      return;
    }
    e.preventDefault();
    let formData = $(".order__form").serialize();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: formData,
      success: function () {
        // Обработка успешного ответа от сервера, возврат к начальному состоянию сайта
        $(".order").remove();
        setTimeout(() => {
          alert("Мы приняли вашу заявку, свяжемся с вами в ближайшее время!");
        }, 1);
      },
      error: function () {
        // Обработка ошибки при отправке формы
        alert("Произошла ошибка при отправке формы. Попробуйте ее отправить еще раз");
      },
    });
  });
  //закрыть окно с заказом
  $(".order__close").click(function () {
    $(".order").remove();
    $("body").css("overflow", "auto");
  });
}
