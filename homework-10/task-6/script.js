// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const form = document.getElementById("form");

form.onsubmit = (ev) => {
  ev.preventDefault();

  const age = ev.target.age.value;

  if (age < 18) {
    alert("You are too young");
  }
};
