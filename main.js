

// Визначте дві змінні: admin і name.

let admin = 'admin';
let Name = 'Name';

// Запишіть рядок "Джон" у змінній name.

let Name_1 = 'Джон';

// .Перезапишіть значення зі змінної name до admin.

admin = 'Name';

// Виведіть на екран значення admin, використовуючи функцію alert(має показати «Джон»).

alert(admin);

// 2. Придумайте правильні імена

// Створіть змінну назви нашої планети. Як би ви її назвали?

let Planet ="Plamb";

// Створіть змінну для зберігання імені відвідувача сайту. Як би ви назвали таку змінну?

let login = "UserName"

// Після виведіть їх у консоль у вигляді console.info

console.log(Planet, UserName)

// Створити 3 змінні, отримати їх значення з prompt і вивести їх одна за одною в консоль у вигляді варнінга.

let brend = prompt("Nike")
let city = prompt("Kyiv")
let fruit = prompt("Mango")

// З prompt отримати рік народження та ім’я, при умові що особі буде більше 18 дозволити гуляти, у випадку якщо ні то заборонити

let YearsPermission = prompt("Якого ти року народження?");
if (YearsPermission > 2005) alert("Тобі не можна гуляти");
if (YearsPermission < 2005) alert("Тобі можна гуляти");
if (YearsPermission == 2005) alert("Тобі можна гуляти");
let Name_2 = prompt("Яке ваше ім'я");
if (Name_2 == "Артем"){
  alert("Дякую за відповідь! " + Name_2);
} else("Дякую за відповідь! " + Name_2);

// З prompt отримати число і вивести чи входить воно до діапазону чисел від 10 до 1100 включно.

let number = prompt("Треба вести число");
if (number < 10) alert("Це число не входить до діапазону");
if (number > 1100) { 
    alert("Це число не входить до діапазону");
}   else{
    alert("Це число входить до діапазону");
}
        
    






// const brandCar = ["Audi", "Buggati", "Dodge", "Skoda", "Volkswagen"]

// function sellCar (array){
//     return  `${array[0]} ${array[brandCar.length-1]}`
// }
// console.log(sellCar(brandCar))






