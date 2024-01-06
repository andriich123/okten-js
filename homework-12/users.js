// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const API = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  const users = await fetch(`${API}/users`);
  return await users.json();
};

const displayUsers = (users) => {
  const list = document.createElement("ul");

  users.forEach((user) => {
    const listItem = document.createElement("li");
    const userUrl = document.createElement("a");
    userUrl.innerText = `${user.name}`;
    userUrl.href = `user-details.html?id=${user.id}`;
    listItem.appendChild(userUrl);
    list.appendChild(listItem);
  });

  document.body.appendChild(list);
};

const users = getUsers().then(displayUsers);
