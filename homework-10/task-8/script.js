// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceBlock = document.getElementById("price");
const prevTimestamp = JSON.parse(localStorage.getItem("timestamp"));
let price = +localStorage.getItem("price") || 100;

if (prevTimestamp) {
  const diff = +new Date() - +new Date(prevTimestamp);

  if (diff > 10000) {
    price += 10;
    localStorage.setItem("price", price);
  }
}

priceBlock.innerText = `${price}грн`;

const timestamp = Date.now();
localStorage.setItem("timestamp", JSON.stringify(timestamp));
