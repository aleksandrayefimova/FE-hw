// Задан массив users с первоначальными данными:
let users = [
    { id: 1, name: "Steven", salary: "5000" },
    { id: 2, name: "Neena", salary: "10000" },
    { id: 3, name: "John", salary: "4500" },
];

// Напишите 3 функции, которые будут менять этот массив:
// Функция addUser(name, salary). Функция должна добавить нового пользователя как 
// последний элемент в массив users.
// Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)
//---------

function addUser(name, salary) {
    let idElem = users.sort((a, b) => a.id - b.id)[users.length - 1].id;
    users.push({ id: idElem + 1, name, salary });
}
addUser("Anna", "2000");
addUser("Tom", "9000");

// Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users

function removeUser(id) {
    let tempId = users.findIndex((el) => el.id === id);
    console.log(tempId);
    if (tempId < 0) {
        console.log("error, index not exist");
    } else {
        users.splice(tempId, 1);
    }
}
// removeUser(6)
// console.log(users); 

// Функция changeUser(id, name, salary). Функция должна по id найти заданный 
// элемент и переопределить значение
// name и salary на значение, указанные в аргументе в момент вызова
function changeUser(id, name, salary) {
    let tempId = users.findIndex((el) => el.id === id);
    if (tempId > 0) {
        users[tempId].name = name;
        users[tempId].salary = salary;
    } else {
        console.log("error, index not exist");
    }
}
changeUser(2, "Helga", "61000");
console.log(users);

// Примечание:
// *Все функции должны менять исходный массив users
// *Необходимо реализовать обработку случая, если в функции передать неизвестный id
// (реализовать процесс на ваше усмотрение). Будет достаточно реализовать сообщение об ошибке в консоли.
// *В приложенном результате продемонстрировать вызовы всех функции на произвольных примерах.
