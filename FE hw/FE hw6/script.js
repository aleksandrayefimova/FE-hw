// for (let i = 0; i <= 10; i=i+2) {
//      console.log(i);   
// }
// // 2
// for (let i = 55; i >= 20; i--) {
//     console.log(i);
    
// }
// 3
const numbers_squared = []

const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);

    
    numbers_squared.push(element**2)
    
}
console.log(numbers_squared)

const last_element = numbers_squared[numbers_squared.length-1]
console.log(last_element);

// 4
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
const text = `User’s name is ${user.first_name}
${user.last_name}. He is ${user.age} years old`
console.log(text);    