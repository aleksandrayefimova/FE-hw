// 1Напишите функцию, которая принимает два числовых аргумента и выводит
//  в консоль все четные числа от большего к меньшему.


// function printEvenNumbers(start, end) {
//     if (start < end) {
//       [start, end] = [end, start];
//     }
  
//     for (let num = start; num >= end; num--) {
//       if (num % 2 === 0) {
//         console.log(num);
//       }
//     }
//   }
  
  // Пример использования
//   printEvenNumbers(10, 2);

//   2.Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
//    и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 
//    const power=(number, power = 2) => {
//     console.log(number ** power);
// }
// power(4)
// 3.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function sum(n) {
//    for (let i=1; i<=n; i++){
//     console.log(i);
//    } 
// } 
// sum(10)

// 4. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных 
// чисел и нечетных чисел от n до m.
//  Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).



// function calculateSumEvenOdd(n, m) {
//     let sumEven = 0;
//     let sumOdd = 0;
  
//     if (n <= m) {
//       for (let num = n; num <= m; num++) {
//         if (num % 2 === 0) {
//           sumEven += num;
//         } else {
//           sumOdd += num;
//         }
//       }
//     } else {
//       for (let num = n; num >= m; num--) {
//         if (num % 2 === 0) {
//           sumEven += num;
//         } else {
//           sumOdd += num;
//         }
//       }
//     }
  
//     console.log("Сумма четных чисел:", sumEven);
//     console.log("Сумма нечетных чисел:", sumOdd);
//   }
  
//   // Пример использования
//   calculateSumEvenOdd(1, 10);

  // 5.Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый
   самый длинный элемент массива. Если входной массив пуст, функция возвращает null. 
   Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих
    элементов. (string.length > string.length) - сравнение длины строк
  // Пример: [ 'one', 'two', 'three' ] => 'three'
  function findLongestString(strings) {
    if (strings.length === 0) {
      return null;
    }
  
    let longestString = strings[0];
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }
  
    return longestString;
  }
  
  // Пример использования
  const strings = ['one', 'two', 'three'];
  const longestString = findLongestString(strings);
  console.log(longestString);
   
  