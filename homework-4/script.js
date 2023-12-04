// TODO: - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

console.log("rectangleArea(3, 4)", rectangleArea(3, 4))
// TODO: - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log("circleArea(4)", circleArea(4))


// TODO: - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log("cylinderArea(3, 10)", cylinderArea(3, 10))


// TODO: - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

console.log("printArray([1, 2, 3, 4]")
printArray([1, 2, 3, 4])

// TODO: - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    return `<p>${text}</p>`;
}

console.log("createParagraph('Paragraph')", createParagraph('Paragraph'));

// TODO: - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createListWithSameContent(text) {
    return `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`;
}
console.log("createListWithSameContent('Content')", createListWithSameContent('Content'));

// TODO: - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListWithSpecificCount(text, count = 3) {
    let list = "<ul>";

    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }

    list += "</ul>";
    return list;
}

console.log("createListWithSpecificCount('Content', 5)", createListWithSpecificCount('Content', 5));

// TODO: - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArray(arr) {
    let list = "<ul>";

    for (const arrElement of arr) {
        list += `<li>${arrElement}</li>`;
    }

    list += "</ul>";
    return list;
}

console.log("createListFromArray(['Content 1', 'Content 2', 'Content 3'])", createListFromArray(['Content 1', 'Content 2', 'Content 3']));

// TODO: - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printObjectsToDocument(objects){
    for (const object of objects) {
        document.write(`<div>Id: ${object.id}</div>`);
        document.write(`<div>Name: ${object.name}</div>`);
        document.write(`<div>Age: ${object.age}</div>`);
    }
}

console.log("printObjectsToDocument([{id: 1, name: 'John', age: 30}, {id: 2, name: 'Tom', age: 21}])");
printObjectsToDocument([{id: 1, name: 'John', age: 30}, {id: 2, name: 'Tom', age: 21}])

// TODO: - створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr) {
    // Solution 1
    return Math.min(...arr);

    // Solution 2
    // if (!arr.length) return;
    //
    // let min = arr[0]
    //
    // for (const arrElement of arr) {
    //     if (arrElement < min) {
    //         min = arrElement
    //     }
    // }
    // return min;
}

console.log("findMinNumber([-3, 4, 5])", findMinNumber([-3, 4, 5]));

// TODO: - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    // Solution 1
    return arr.reduce((acc, val) => acc + val, 0);

    // Solution 2
    // let sum = 0
    //
    // for (const arrElement of arr) {
    //     sum += arrElement
    // }
    //
    // return sum;
}

console.log("sum([-3, 4, 5])", sum([-3, 4, 5]));


// TODO: - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

console.log("swap([-3, 4, 5])", swap([-3, 4, 5], 0, 2));

// TODO: - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValueElement of currencyValues) {
        if(currencyValueElement['currency'] === exchangeCurrency) {
            return sumUAH / currencyValueElement['value'];
        }
    }

    return "Invalid currency";
}

console.log(
    "exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')",
    exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
);
