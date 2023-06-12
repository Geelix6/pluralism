//Данные о каждом товаре
$(".item")[0].productName = "New Balance 550";
$(".item")[0].productSizesAndPrices = {
  "9.5 US": { price: "12 500р", availability: true },
};
$(".item")[0].productImageMajor = "img/nb550_1.webp";
$(".item")[0].productImageMinor1 = "img/nb550_2.webp";
$(".item")[0].productImageMinor2 = "img/nb550_3.webp";

$(".item")[1].productName = "New Balance 530";
$(".item")[1].productSizesAndPrices = {
  "9.5 US": { price: "12 000р", availability: true },
};
$(".item")[1].productImageMajor = "img/nb530_1.jpg";
$(".item")[1].productImageMinor1 = "img/nb530_2.jpg";
$(".item")[1].productImageMinor2 = "img/nb530_3.jpg";

$(".item")[2].productName = "New Balance 9060";
$(".item")[2].productSizesAndPrices = {
  "9.5 US": { price: "18 000р", availability: true },
};
$(".item")[2].productImageMajor = "img/nb9060_1.png";
$(".item")[2].productImageMinor1 = "img/nb9060_2.png";
$(".item")[2].productImageMinor2 = "img/nb9060_3.png";

$(".item")[3].productName = "New Balance 5740";
$(".item")[3].productSizesAndPrices = {
  "6.5 US": { price: "14 500р", availability: false },
};
$(".item")[3].productImageMajor = "img/nb5740_1.png";
$(".item")[3].productImageMinor1 = "img/nb5740_2.png";
$(".item")[3].productImageMinor2 = "img/nb5740_3.png";

$(".item")[4].productName = "Nike Air Force 1 ‘07";
$(".item")[4].productSizesAndPrices = {
  "7 US": { price: "13 000р", availability: true },
};
$(".item")[4].productImageMajor = "img/nike-af1_1.webp";
$(".item")[4].productImageMinor1 = "img/nike-af1_2.webp";
$(".item")[4].productImageMinor2 = "img/nike-af1_3.webp";

$(".item")[5].productName = "Nike Dunk Low Next Nature “White Mint”";
$(".item")[5].productSizesAndPrices = {
  "7 US": { price: "13 500р", availability: true },
};
$(".item")[5].productImageMajor = "img/nike-dunk_1.png";
$(".item")[5].productImageMinor1 = "img/nike-dunk_2.png";
$(".item")[5].productImageMinor2 = "img/nike-dunk_3.png";

$(".item")[6].productName = "Adidas Adi2000";
$(".item")[6].productSizesAndPrices = {
  "9.5 US": { price: "10 000р", availability: true },
};
$(".item")[6].productImageMajor = "img/adi2000_1.png";
$(".item")[6].productImageMinor1 = "img/adi2000_2.png";
$(".item")[6].productImageMinor2 = "img/adi2000_3.png";

$(".item")[7].productName = "Puma CA Pro Classic";
$(".item")[7].productSizesAndPrices = {
  "7 US": { price: "10 000р", availability: true },
  "10.5 US": { price: "10 000р", availability: true },
};
$(".item")[7].productImageMajor = "img/puma-ca-pro_1.jpg";
$(".item")[7].productImageMinor1 = "img/puma-ca-pro_2.jpg";
$(".item")[7].productImageMinor2 = "img/puma-ca-pro_3.jpg";

$(".item")[8].productName = "Ocai Retro";
$(".item")[8].productSizesAndPrices = {
  "9.5 US": { price: "12 500р", availability: true },
};
$(".item")[8].productImageMajor = "img/ocai-retro_1.jpg";
$(".item")[8].productImageMinor1 = "img/ocai-retro_2.jpg";
$(".item")[8].productImageMinor2 = "img/ocai-retro_3.jpg";

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
