// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт
// в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.getElementById("form");

function displayUser({ name, surname, age }) {
  const nameBlock = document.createElement("p");
  nameBlock.innerText = `Name: ${name}`;

  const surnameBlock = document.createElement("p");
  surnameBlock.innerText = `Surname: ${surname}`;

  const ageBlock = document.createElement("p");
  ageBlock.innerText = `Age: ${age}`;

  document.body.append(nameBlock, surnameBlock, ageBlock);
}

form.onsubmit = (ev) => {
  ev.preventDefault();
  const name = ev.target.name.value;
  const surname = ev.target.surname.value;
  const age = ev.target.age.value;
  displayUser({ name, surname, age });
};
