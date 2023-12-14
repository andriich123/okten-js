// TODO: - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = []

users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'));
users.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+9876543210'));
users.push(new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '+1112233445'));
users.push(new User(4, 'Bob', 'Williams', 'bob.williams@example.com', '+5556667777'));
users.push(new User(5, 'Eva', 'Brown', 'eva.brown@example.com', '+9998887777'));
users.push(new User(6, 'Charlie', 'Miller', 'charlie.miller@example.com', '+3332221111'));
users.push(new User(7, 'Sophia', 'Davis', 'sophia.davis@example.com', '+4445556666'));
users.push(new User(8, 'David', 'Anderson', 'david.anderson@example.com', '+7778889999'));
users.push(new User(9, 'Emma', 'Taylor', 'emma.taylor@example.com', '+1231231234'));
users.push(new User(10, 'Henry', 'Clark', 'henry.clark@example.com', '+5675675678'));

console.log("Users: ", users);

// TODO: - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const usersWithEvenIds = users.filter(user => user.id % 2 === 0)
console.log("Users with even ids: ", usersWithEvenIds)

// TODO: - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a.id - b.id)
console.log("Sorted users by asc ordering by id: ", users)

// TODO: - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];

clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['Product1_1']));
clients.push(new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '+9876543210', ['Product2_1', 'Product2_2', 'Product2_3']));
clients.push(new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '+1112233445', ['Product3_1', 'Product3_2']));
clients.push(new Client(4, 'Bob', 'Williams', 'bob.williams@example.com', '+5556667777', ['Product4_1', 'Product4_2']));
clients.push(new Client(5, 'Eva', 'Brown', 'eva.brown@example.com', '+9998887777', ['Product5_1', 'Product5_2']));
clients.push(new Client(6, 'Charlie', 'Miller', 'charlie.miller@example.com', '+3332221111', []));
clients.push(new Client(7, 'Sophia', 'Davis', 'sophia.davis@example.com', '+4445556666', ['Product7_1', 'Product7_2']));
clients.push(new Client(8, 'David', 'Anderson', 'david.anderson@example.com', '+7778889999', ['Product8_1', 'Product8_2', 'Product8_3', 'Product8_4']));
clients.push(new Client(9, 'Emma', 'Taylor', 'emma.taylor@example.com', '+1231231234', ['Product9_1', 'Product9_2']));
clients.push(new Client(10, 'Henry', 'Clark', 'henry.clark@example.com', '+5675675678', ['Product10_1']));

console.log(clients);

// TODO: - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);
console.log("Sorted clients by asc ordering by products amount: ", clients)

// TODO: - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, releaseYear, maxSpeed, engineCapacity) {
    this.model = model
    this.manufacturer = manufacturer;
    this.releaseYear = releaseYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.releaseYear}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineCapacity}`);

        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    }

    this.increaseMaxSpeed = function (speed) {
        this.maxSpeed += speed;
    };

    this.changeYear = function (value) {
        this.year = value;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

const car = new Car('Civic', 'Honda', 2022, 200, 1.8);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
const driver = { name: 'John Doe'};
car.addDriver(driver);

console.log("Function `Car` instance: ", car);

// TODO: - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class ModernCar {
    constructor(model, manufacturer, releaseYear, maxSpeed, engineCapacity) {
        this.model = model
        this.manufacturer = manufacturer;
        this.releaseYear = releaseYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.releaseYear}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineCapacity}`);

        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    }

    increaseMaxSpeed(speed) {
        this.maxSpeed += speed;
    };

    changeYear(value) {
        this.year = value;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

const car2 = new ModernCar('Civic', 'Honda', 2022, 200, 1.8);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2023);
const driver2 = { name: 'John Doe'};
car2.addDriver(driver2);

console.log("Class `Car` instance: ", car2);

// TODO: -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const cinderellas = [];

cinderellas.push(new Cinderella('Cinderella1', 20, 7));
cinderellas.push(new Cinderella('Cinderella2', 22, 6));
cinderellas.push(new Cinderella('Cinderella3', 25, 8));
cinderellas.push(new Cinderella('Cinderella4', 21, 7));
cinderellas.push(new Cinderella('Cinderella5', 19, 6.5));
cinderellas.push(new Cinderella('Cinderella6', 28, 8.5));
cinderellas.push(new Cinderella('Cinderella7', 23, 7));
cinderellas.push(new Cinderella('Cinderella8', 30, 9));
cinderellas.push(new Cinderella('Cinderella9', 26, 8));
cinderellas.push(new Cinderella('Cinderella10', 24, 7.5));

console.log(cinderellas);

// TODO: Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

const prince = new Prince("John", 29, 17);

for (const cinderella of cinderellas) {
    if (prince.foundShoeSize === cinderella.shoeSize) {
        console.log("The prince found this cinderella`s shoe: ", cinderella)
    }
}

const foundCinderella = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoeSize);

if (foundCinderella) {
    console.log("The prince found this cinderella`s shoe: ", foundCinderella)
} else {
    console.log("Cinderella not found")
}