// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на
// кнопку зникав елемент з id="text".

const toggleButton = document.getElementById("toggle-button");
const text = document.getElementById("text");

let hiddenText = false;

toggleButton.addEventListener("click", () => {
  hiddenText = !hiddenText;
  text.style.display = hiddenText ? "none" : "inline";
  toggleButton.innerText = hiddenText ? "Show text" : "Hide text";
});
