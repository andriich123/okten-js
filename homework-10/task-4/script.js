// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

function generateRandomInteger() {
  return Math.floor(Math.random() * 1000);
}

const products = Array.from({ length: 100 }, () => ({
  id: generateRandomInteger(),
  name: `Product${generateRandomInteger()}`,
  price: `$${generateRandomInteger()}`,
}));

console.log(products);

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const productsBlock = document.getElementById("products");

function displayProducts(page = 0, pageSize = 10) {
  const productsList = products.slice(
    page * pageSize,
    (page + 1) * pageSize + pageSize
  );

  productsBlock.innerHTML = null;

  for (const product of productsList) {
    const productBlock = document.createElement("div");
    productBlock.classList.add("product");

    productBlock.innerHTML = `
        <p> Id: ${product.id}</p>
        <p> Name: ${product.name}, price: ${product.price} </p>
      `;

    productsBlock.appendChild(productBlock);
  }
}

let page = 0;
let pageSize = 10;

nextButton.addEventListener("click", () => {
  if (page * pageSize + pageSize < products.length) {
    page = page + 1;
    displayProducts(page, pageSize);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 0) {
    page = page - 1;
    displayProducts(page, pageSize);
  }
});

displayProducts(page, pageSize);
