// Масиви та об'єкти:

// TODO: - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr1 = [1, false, 3, 4, "5", 6, ["yep"], 7, 8, "10"];
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])

// TODO: - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: "some title 1",
    pageCount: 500,
    genre: "documentary"
}

const book2 = {
    title: "some title 2",
    pageCount: 500,
    genre: "fiction"
}

const book3 = {
    title: "some title 3",
    pageCount: 300,
    genre: "fantasy"
}

// TODO: - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book4 = {
    title: "some title 1",
    pageCount: 200,
    genre: "genre 1",
    authors: [
        {
            name: "author 1",
            age: 40,
        },
        {
            name: "author 2",
            age: 53,
        },
    ]
}

const book5 = {
    title: "some title 2",
    pageCount: 200,
    genre: "genre 2",
    authors: [
        {
            name: "author 2",
            age: 34,
        },
        {
            name: "author 1",
            age: 40,
        },
    ]
}

const book6 = {
    title: "some title 3",
    pageCount: 500,
    genre: "genre 3",
    authors: [
        {
            name: "author 3",
            age: 40,
        },
    ]
}

// TODO: - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
    { name: "name 1", username: "username 1", password: "password 1" },
    { name: "name 2", username: "username 2", password: "password 2" },
    { name: "name 3", username: "username 3", password: "password 3" },
    { name: "name 4", username: "username 4", password: "password 4" },
    { name: "name 5", username: "username 5", password: "password 5" },
    { name: "name 6", username: "username 6", password: "password 6" },
    { name: "name 7", username: "username 7", password: "password 7" },
    { name: "name 8", username: "username 8", password: "password 8" },
    { name: "name 9", username: "username 9", password: "password 9" },
    { name: "name 10", username: "username 10", password: "password 10" }
];

console.log(`User: ${users[0].name}, password: ${users[0].password}`)
console.log(`User: ${users[1].name}, password: ${users[1].password}`)
console.log(`User: ${users[2].name}, password: ${users[2].password}`)
console.log(`User: ${users[3].name}, password: ${users[3].password}`)
console.log(`User: ${users[4].name}, password: ${users[4].password}`)
console.log(`User: ${users[5].name}, password: ${users[5].password}`)
console.log(`User: ${users[6].name}, password: ${users[6].password}`)
console.log(`User: ${users[7].name}, password: ${users[7].password}`)
console.log(`User: ${users[8].name}, password: ${users[8].password}`)
console.log(`User: ${users[9].name}, password: ${users[9].password}`)

// TODO: Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 100
// const x = +prompt("Enter a number: ")

if (x !== 0) {
    console.log("Вірно")
} else {
    console.log("Невірно")
}

// TODO: - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 30
// const time = +prompt("Enter time: ");

if (time >= 0 && time < 15) {
    console.log("Перша чверть");
} else if (time >= 15 && time < 30) {
    console.log("Друга чверть");
} else if (time >= 30 && time < 45) {
    console.log("Третя чверть");
} else if (time >= 45 && time < 60){
    console.log("Четверта чверть");
} else {
    console.log("Упс, некоректне значення");
}

// TODO: - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 20;
// const day = +prompt("Enter a day: ");

if (day >= 1 && day <= 10) {
    console.log("Перша половина");
} else if (day > 10 && day <= 20) {
    console.log("Друга половина");
} else if (day > 20 && day <= 31) {
    console.log("Третя половина");
} else {
    console.log("Упс, некоректне значення");
}

// TODO: - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//   на цей день (можна замість плану на день, назву дня англійською).

const dayNumber = +prompt("Enter a day: ");

switch (dayNumber) {
    case (1): {
        console.log("Monday's schedule")
        break;
    }
    case (2): {
        console.log("Tuesday's schedule")
        break;
    }
    case (3): {
        console.log("Wednesday's schedule")
        break;
    }
    case (4): {
        console.log("Thursday's schedule")
        break;
    }
    case (5): {
        console.log("Friday's schedule")
        break;
    }
    case (6): {
        console.log("No schedule available. It is Saturday, time to rest")
        break;
    }
    case (7): {
        console.log("No schedule available. It is Sunday, time to rest")
        break;
    }
    default : {
        console.log("Incorrect day!")
    }
}

//  TODO:   - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

const number1 = 20
const number2 = -100

if (number1 > number2) {
    console.log(`number 1 ${number1} is max`)
} else if (number1 < number2) {
    console.log(`number 2 ${number2} is max`)
} else {
    console.log('numbers are equal')
}


// TODO: - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x2 = 0 || "default"
// let x2 = true || "default"
// let x2 = "not a default" || "default"
console.log(x2)

//    TODO: - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
//     перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].duration > 5) {
    console.log("Супер")
}

if (coursesAndDurationArray[1].duration > 5) {
    console.log("Супер")
}

if (coursesAndDurationArray[2].duration > 5) {
    console.log("Супер")
}

if (coursesAndDurationArray[3].duration > 5) {
    console.log("Супер")
}

if (coursesAndDurationArray[4].duration > 5) {
    console.log("Супер")
}

if (coursesAndDurationArray[5].duration > 5) {
    console.log("Супер")
}