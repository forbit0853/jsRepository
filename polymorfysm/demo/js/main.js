

// // Визначте дві змінні: admin і name.

// let admin = 'admin';
// let Name = 'Name';

// // Запишіть рядок "Джон" у змінній name.

// let Name_1 = 'Джон';

// // .Перезапишіть значення зі змінної name до admin.

// admin = 'Name';

// // Виведіть на екран значення admin, використовуючи функцію alert(має показати «Джон»).

// alert(admin);

// // 2. Придумайте правильні імена

// // Створіть змінну назви нашої планети. Як би ви її назвали?

// let Planet ="Plamb";

// // Створіть змінну для зберігання імені відвідувача сайту. Як би ви назвали таку змінну?

// let login = "UserName"

// // Після виведіть їх у консоль у вигляді console.info

// console.log(Planet, UserName)

// // Створити 3 змінні, отримати їх значення з prompt і вивести їх одна за одною в консоль у вигляді варнінга.

// let brend = prompt("Nike")
// let city = prompt("Kyiv")
// let fruit = prompt("Mango")

// // З prompt отримати рік народження та ім’я, при умові що особі буде більше 18 дозволити гуляти, у випадку якщо ні то заборонити

// let YearsPermission = prompt("Якого ти року народження?");
// if (YearsPermission > 2005) alert("Тобі не можна гуляти");
// if (YearsPermission < 2005) alert("Тобі можна гуляти");
// if (YearsPermission == 2005) alert("Тобі можна гуляти");
// let Name_2 = prompt("Яке ваше ім'я");
// if (Name_2 == "Артем"){
//   alert("Дякую за відповідь! " + Name_2);
// } else("Дякую за відповідь! " + Name_2);

// // З prompt отримати число і вивести чи входить воно до діапазону чисел від 10 до 1100 включно.

// let number = prompt("Треба вести число");
// if (number < 10) alert("Це число не входить до діапазону");
// if (number > 1100) { 
//     alert("Це число не входить до діапазону");
// }   else{
//     alert("Це число входить до діапазону");
// }




// const brandCar = ["Audi", "Buggati", "Dodge", "Skoda", "Volkswagen"]

// function sellCar (array){
//     return  `${array[0]} ${array[brandCar.length-1]}`
// }
// console.log(sellCar(brandCar))




// const arr = [35, 2, 71, 11, 9, 143]
// const sum_arr = (array) => {
//     let sum = 0;
//     for (let num of array) {
//         sum += num; console.log(num);
//     }
//     return sum;
// }
// document.write(sum_arr(arr))


// 1

// let num = parseInt(prompt("Введіть число: "));

// if (num % 2 === 0) {
//     alert(num + " є парним числом.");
// } else {
//    alert(num + " є непарним числом.");
// }

//2

//  const yourNumber = prompt('Твоє число?')


//  if (yourNumber == 7){
//     console.log('Число дорівнює 7')
//  }

//  else if (yourNumber > 5){
//     console.log('Число більше за 5')
//  }
//  else if (yourNumber < 10 ){
//     console.log('Число меньше 10')
// }

//3

// const season = prompt('Введить місяц')
// switch (season) {
//   case '1':
//     console.log('Зима')
//     break;
//     case '2':
//     console.log('Зима')
//     break;
//     case '3':
//     console.log('Зима')
//     break;
//     case '4':
//     console.log('Весна')
//     break;
//     case '5':
//     console.log('Весна')
//     break;
//     case '6':
//     console.log('Весна')
//     break;
//     case '7':
//     console.log('Літо')
//     break;
//     case '8':
//     console.log('Літо')
//     break;
//     case '9':
//     console.log('Літо')
//     break;
//     case '10':
//     console.log('Осінь')
//     break;
//     case '11':
//     console.log('Осінь')
//     break;
//     case '12':
//     console.log('Осінь')
//     break;
// }


// const number = [3, 2, 6, 4, 1, 2, 7]
// let averageNumber = 0
// for (let i = 0; i < number.length; i++) {
//     averageNumber = averageNumber + number[i]
//     console.log('item', number[i])
//     console.log('index', i)
// }
// console.log(i+2)
// console.log(averageNumber)


//4

// function power(base, exponent) {
//     let result = Math.pow(base, exponent);
//     return result;
//   }


//5

// function repeatString(num, str) {

//     if (typeof num !== "number" || typeof str !== "string") {
//       return "Invalid";
//     }

//     let result = "";
//     for (let i = 0; i < num; i++) {
//       result += str;
//     }
//     return result;
//   }

//   console.log(repeatString(3, "hello"));

//6

//   function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

//   alert( randomInteger(1, 3) );

//7

// function findMaxNumber(arr) {
//     // перевірка вхідних даних
//     if (!Array.isArray(arr)) {
//       return "Invalid input";
//     }

//     // знаходження найбільшого числа в масиві
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }

//   const numbers = [5, 7, 20, 10, 1, 8];
//   console.log("Найбільше число у масиві", numbers, ":", findMaxNumber(numbers));

//8

// function validatePassword(password, confirmPassword) {
//     const minLength = 4;
//     if (password !== confirmPassword) {
//       return false;
//     }
//     if (password.length < minLength) {
//       return false; 
//     }
//     return true; 
//   }

// const password = "12345";
// const confirmPassword = "12345";
// const isValid = validatePassword(password, confirmPassword);
// console.log(isValid); 





// const home ={
//   size: 155,
//   price: "30000$",
//   parking: 1,
//   rooms: 3,
// }
// console.log(home)

// home.roomsCheck = "2"

// delete home.size


// const MIN_AGE = 18
// const MAX_AGE = 99

// const users = [
//   { name: "alina", age: 2003, gander: "girl", },
//   { name: "den", age: 2006, gander: "boy", },
//   { name: "kodi", age: 1999, gander: "girl", },
//   { name: "masha", age: 2007, gander: "girl", },
//   { name: "david", age: 2001, gander: "boy", },
// ]

// function itemUser(users, minAge = 2005) {

//   const newUser = []
//   for (let user of users) {
//     if (user.age <``= minAge) {
//       newUser.push(user)
//     }
//   }
//   return newUser
// }
// console.log(itemUser(users))



// Об'єкт Math:

// 1

//2


// Методи роботи з масивами:

// 1

// function reverseArray(arr) {
//   return arr.reverse();
// }

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers); 

// 2

// function sumOfEvenNumbers(arr) {
//   const evenNumbers = arr.filter(num => num % 2 === 0);

//   const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const sumOfEvens = sumOfEvenNumbers(numbers);
// console.log(sumOfEvens); 

// 3

// function removeSpaces(arr) {
//     return arr.map(str => str.trim());
//   }

// const strings = [" JavaScript ", "  its  ", " good "];
// const result = removeSpaces(strings);

// console.log(result); 


//Цикли:


// 1

// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${num} x ${i} = ${num * i}`);
//     }
//   }
//   multiplicationTable(4);


//2





//3

// function longestString(array) {
//     let longest = ""; 

//     for (let i = 0; i < array.length; i++) {
//       if (array[i].length > longest.length) { 
//         longest = array[i]; 
//       }
//     }
//     return longest;
//   }

//   let strings = ["staff", "dog", "elements", "gambit"];
//   let longest = longestString(strings); 

// console.log(longest)


//4

// function squareArray(arr) {
//     const squared = [];

//     for (let i = 0; i < arr.length; i++) {
//       squared.push(arr[i] ** 2);
//     }

//     return squared;
//   }

//   const numbers = [1, 2, 3, 4, 5];
//   const squaredNumbers = squareArray(numbers);

//   console.log(squaredNumbers); 












// let had = { name: "Alex" }

// delete had.name
// had.pamp = 30

// console.log(had.pamp)















// class People {
//     name;
//     age;
//     orietation;

//     constructor(name, age, orietation) {
//         this.name = name
//         this.age = age
//         this.orietation = orietation
//     }

//     getFullInformation() {
//         return `name: ${this.name} age: ${this.age} orietation: ${this.orietation}`
//     }

// get name() {
//     return this.name;
// }
// set name(value) {
//     this.name = value;
// }
// get age() {
//     return this.age;
// }
// set age(value) {
//     return age = value
// }
// get orietation() {
//     return thise.orietation;
// }
// set orietation(value) {
//     return orietation = value
// }


// }

// const artem = new People("Artem", 32, "Men")
// const andrey = new People("Andrey", 21, "Men")

// console.log(artem.getFullInformation())




'use strict'

// window.addEventListener('load', () => {

//     console.log('MainScript -> Start');
 
//     const displeyBox = document.getElementById('display-box');
//     const startButton = document.getElementById('start-button');

//     startButton.addEventListener('click', () => {
//       console.log('startButton -> Click');
//       let animal = new Animal('якась тваринка');
//       console.log(animal);
//       displeyBox.innerHTML = `${animal} <br>`;
//     });
// });





window.addEventListener('load', () => {
    console.log('Start');

    // 1 - Визначення дескрипторів елементів
    const displayBox = document.getElementById('display-box');
    const startButton = document.getElementById('start-button');

    // 2 - Створюємо ключові події:
    startButton.addEventListener('click', () => {
        console.log('startButton => Click');
        // 1
        let animal = new Animal('якась тваринка');
        console.log(animal);
        displayBox.innerHTML = `${animal}<br>`;
        //2
        let animals = [
            new Bird(), new Dog(), new Fish(), new Frog()
        ];
        // 3
        for(let a of animals){
            displayBox.innerHTML += `${a}<br>`;
        }
    });
});