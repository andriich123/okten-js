// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const API = "https://jsonplaceholder.typicode.com";
const url = new URL(location.href);
const userId = url.searchParams.get("id");

const getUserById = async (id) => {
  const user = await fetch(`${API}/users/${id}`);
  return await user.json();
};

const displayUser = (user) => {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  const name = document.createElement("h2");
  name.innerText = user.name;
  const email = document.createElement("p");
  email.innerText = user.email;
  const phone = document.createElement("p");
  phone.innerText = user.phone;

  const address = document.createElement("p");
  address.innerText = `${user.address.street}, ${user.address.suite}, \n${user.address.city},\n ${user.address.zipcode}`;

  const website = document.createElement("a");
  website.href = user.website;
  website.innerText = "Visit site";

  const company = document.createElement("p");
  company.innerText = `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`;

  userCard.append(name, email, phone, website, company, address);
  document.body.appendChild(userCard);
};

const displayNotFound = () => {
  const notFound = document.createElement("h1");
  notFound.innerText = "User not found";
  document.body.appendChild(notFound);
};

getUserById(userId).then(displayUser).catch(displayNotFound);
