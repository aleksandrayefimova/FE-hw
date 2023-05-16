// Решить следующие задачи:
// • Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
// Добавить созданные параграфы в div с классом numbers.
const numbers = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
    const parElem = document.createElement("p");
    parElem.innerText = `paragraf  ${i}`;
    numbers.append(parElem);
}

// • Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div c классом strings_container.
// Строки взять произвольные.
const strings_container = document.querySelector(".strings_container");
const array = ["первая строка", "вторая строка", "третья строка"];
for (let i = 0; i < array.length; i++) {
    const parElem = document.createElement("p");
    parElem.innerText = array[i];
    strings_container.append(parElem);
}

// • Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name,
// last_name и age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div c классом users_container.

const users_container = document.querySelector(".users_container");
const people = [
    {
        first_name: "Иван",
        last_name: "Иванов",
        age: 25,
    },
    {
        first_name: "Петр",
        last_name: "Петров",
        age: 30,
    },
    {
        first_name: "Сидор",
        last_name: "Сидоров",
        age: 35,
    },
];

for (let i = 0; i < people.length; i++) {
    const containerEl = document.createElement("div");
    const nameEl = document.createElement("p");
    const ageEl = document.createElement("p");
    nameEl.innerText = people[i].first_name + ", " + people[i].last_name;
    ageEl.innerText = people[i].age;
    containerEl.append(nameEl, ageEl);
    users_container.append(containerEl);
}

// **Создать кнопку и таблицу с 9 ячейками. При клике на кнопку случайным образом менять цвет и содержимое каждой ячейки.

const grid = document.querySelectorAll(".grid > div");
const btn = document.querySelector(".btn");

const random = () => parseInt(Math.random() * 255);
function setColor() {
    grid.forEach((el) => {
        let r = random(),
            g = random(),
            b = random();
        el.style = `background:rgb(${r},${g},${b});`;
    });
}

btn.addEventListener("click", setColor);

// **Создать страницу с кнопкой и блоком с текстом. При клике на кнопку реализовать следующую логику:
// 1.Сгенерировать случайный цвет и установить его в качестве фона блока с текстом.
// 2.Создать массив из нескольких произвольных строк.
// 3.Сгенерировать случайный индекс элемента в массиве и выбрать соответствующую строку.
// 4.Вставить выбранную строку в блок с текстом.