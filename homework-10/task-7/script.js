// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const form = document.getElementById("form");

form.onsubmit = (ev) => {
  ev.preventDefault();

  const rows = ev.target.rows.value;
  const cols = ev.target.cols.value;
  const content = ev.target.content.value;

  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.innerText = content;
      tr.append(td);
    }

    table.append(tr);
  }

  document.body.append(table);
};
