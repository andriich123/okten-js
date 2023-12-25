// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
//  сторінки буде додавати до неї +1

const numberBlock = document.getElementById("number");
const numberState = localStorage.getItem("number") || 0;
localStorage.setItem("number", +numberState + 1);
numberBlock.innerText = numberState;
