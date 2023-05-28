//Данные о каждом товаре
$(".item")[0].productName = "New Balance 550";
$(".item")[0].productSizesAndPrices = {
  "9.5 US": { price: "12 500р", availability: true },
};
$(".item")[0].productImageMajor = "img/nike_blazer.jpg";
$(".item")[0].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[0].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[1].productName = "New Balance 530";
$(".item")[1].productSizesAndPrices = {
  "9.5 US": { price: "12 000р", availability: true },
};
$(".item")[1].productImageMajor = "img/nike_blazer.jpg";
$(".item")[1].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[1].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[2].productName = "New Balance 9060";
$(".item")[2].productSizesAndPrices = {
  "9.5 US": { price: "18 000р", availability: true },
};
$(".item")[2].productImageMajor = "img/nike_blazer.jpg";
$(".item")[2].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[2].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[3].productName = "New Balance 5740";
$(".item")[3].productSizesAndPrices = {
  "6.5 US": { price: "14 500р", availability: true },
};
$(".item")[3].productImageMajor = "img/nike_blazer.jpg";
$(".item")[3].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[3].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[4].productName = "Nike air force 1 ‘07";
$(".item")[4].productSizesAndPrices = {
  "7 US": { price: "13 000р", availability: true },
};
$(".item")[4].productImageMajor = "img/nike_blazer.jpg";
$(".item")[4].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[4].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[5].productName = "Nike Dunk low next nature “white mint”";
$(".item")[5].productSizesAndPrices = {
  "7 US": { price: "13 500р", availability: true },
};
$(".item")[5].productImageMajor = "img/nike_blazer.jpg";
$(".item")[5].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[5].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[6].productName = "Adidas Adi2000";
$(".item")[6].productSizesAndPrices = {
  "9.5 US": { price: "10 000р", availability: true },
};
$(".item")[6].productImageMajor = "img/nike_blazer.jpg";
$(".item")[6].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[6].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[7].productName = "Puma CA pro classic";
$(".item")[7].productSizesAndPrices = {
  "10.5 US": { price: "10 000р", availability: true },
};
$(".item")[7].productImageMajor = "img/nike_blazer.jpg";
$(".item")[7].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[7].productImageMinor2 = "img/blazer_hover.jpg";

$(".item")[8].productName = "Ocai retro";
$(".item")[8].productSizesAndPrices = {
  "9.5 US": { price: "12 500р", availability: true },
};
$(".item")[8].productImageMajor = "img/nike_blazer.jpg";
$(".item")[8].productImageMinor1 = "img/Screenshot_52.png";
$(".item")[8].productImageMinor2 = "img/blazer_hover.jpg";

//К каждому товару прикрепить функцию, открывающую модальное окно
$(".item").click(function () {
  let item = this;
  createProductWindow(
    item,
    this.productName,
    this.productSizesAndPrices,
    this.productImageMajor,
    this.productImageMinor1,
    this.productImageMinor2
  );
});
//Оформляем заявку на заказ любой пары
$(".promo__orderButton").click(function () {
  createRequest();
  $("body").css("overflow", "hidden");
});
//Открыть-закрыть корзину убрать-добавить скоролл body
$(".header__cart").click(function () {
  $(".cart").removeClass("cart--hidden");
  $("body").css("overflow", "hidden");
  $(".cart").css("overflow", "auto");
});
$(".cart__close").click(function () {
  $(".cart").addClass("cart--hidden");
  $("body").css("overflow", "auto");
});

//Оформляем заказ при клике в кнопку
$(".cart__orderButton").click(function () {
  createOrder();
  $(".cart__close").addClass("cart__close--hidden");
});
