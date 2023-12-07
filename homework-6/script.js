// TODO:- Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const arr1 = ['hello world', 'lorem ipsum', 'javascript is cool']
arr1.forEach(el => console.log(`The length of "${el}" is ${el.length}`))

// TODO:- Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const value1 = 'hello world'.toUpperCase()
const value2 = 'lorem ipsum'.toUpperCase()
const value3 = 'javascript is cool'.toUpperCase()
console.log("Uppercase values: ", { value1, value2, value3 })

// TODO:- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const value4 = 'HELLO WORLD'.toLowerCase()
const value5 = 'LOREM IPSUM'.toLowerCase()
const value6 = 'JAVASCRIPT IS COOL'.toLowerCase()
console.log("Lowercase values: ", { value4, value5, value6})

// TODO:- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const trimmedStr = ' dirty string   '.trim();
console.log(trimmedStr)

// TODO:- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => str.trim().split(' ');
console.log(stringToArray('Ревуть воли як ясла повні'))

// TODO:- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const stringifiedArr = [10,8,-7,55,987,-1011,0,1050,0].map(el => el.toString())
console.log(stringifiedArr)

// TODO:- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//  або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];

const nums = [11,21,3];
const ordering = { asc: "ascending", desc: "descending" }
const sortNums = (arr, direction = ordering.asc) =>
    [...arr].sort((a, b) => (direction === ordering.asc ? a - b : b - a))

console.log(sortNums(nums, ordering.asc), "ascending") // [3,11,21]
console.log(sortNums(nums), ordering.asc) // [3,11,21]
console.log(sortNums(nums, ordering.desc), "descending") // [21,11,3]

// ==========================
// TODO:- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration )
console.log(coursesAndDurationArray, " - sorted coursesAndDurationArray ")

const filteredCoursesAndDuration = coursesAndDurationArray.filter(el => el.monthDuration > 5)
console.log(filteredCoursesAndDuration, "- filtered coursesAndDurationArray")

const mappedCoursesAndDuration = coursesAndDurationArray.map((el, idx) => ({id: idx, ...el }))
console.log(mappedCoursesAndDuration, " - mapped coursesAndDurationArray")

// =========================
//  TODO:   описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cards = [];
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits) {
    for (const value of values) {
        const color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
        const card = { suit, value, color };
        cards.push(card);
    }
}

const piqueAce = cards.find(card => card.suit === 'spade' && card.value === 'ace');
console.log("Pique Ace: ", piqueAce);

const sixes = cards.filter(card => card.value === '6');
console.log("Sixes", sixes);

const redCards = cards.filter(card => card.color === 'red');
console.log('Red:', redCards);

const diamonds = cards.filter(card => card.suit === 'diamond');
console.log('Diamonds:', diamonds);

const clubsAboveNine = cards.filter(card => card.suit === 'club' && (isNaN(+card.value) || +card.value >= 9));
console.log('Clubs 9+:', clubsAboveNine);

// =========================
//
// TODO:    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// SOLUTION 1
// const suitMapper = {
//     spade: "spades",
//     diamond: "diamonds",
//     heart: "hearts",
//     club: "clubs"
// }
//
// const groupedCards = cards.reduce((acc, cur) => ({ ...acc, [suitMapper[cur.suit]]: [...acc[suitMapper[cur.suit]], cur] }), {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: [],
// })

// SOLUTION 2
const groupedCards = cards.reduce((acc, cur) => {
    switch (cur.suit) {
        case "spade":
            acc.spades.push(cur);
            break;
        case "diamond":
            acc.diamonds.push(cur);
            break;
        case "heart":
            acc.hearts.push(cur);
            break;
        case "club":
            acc.clubs.push(cur);
            break;
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
})


console.log("Grouped cards: ", groupedCards)

// =========================
//  TODO:   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const sassCourses = coursesArray
    .filter(course => course.modules.map(module => module.toLowerCase())
    .includes('sass'));

console.log(sassCourses);

const dockerCourses = coursesArray
    .filter(course => course.modules.map(module => module.toLowerCase())
    .includes('docker'));

console.log(dockerCourses);