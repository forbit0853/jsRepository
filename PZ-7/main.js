// 1

// class Product {
//     constructor(name, price) {
//       this.name = name;
//       this.price = price;
//     }

//     discount(discountValue) {
//       const discountedPrice = this.price - (this.price * (discountValue / 100));
//       return discountedPrice;
//     }
//   }

//   const product = new Product('Ноутбук', 2000);

//   const discountedPrice = product.discount(15);

//   console.log(`Знижений прайс: $${discountedPrice}`);

// 2

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         return this.width * this.height;
//     }

//     calculatePerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// const rectangle = new Rectangle(5, 3);

// const area = rectangle.calculateArea();
// const perimeter = rectangle.calculatePerimeter();

// console.log(`Площа: ${area}`);
// console.log(`Периметр: ${perimeter}`);

// 3

// class Client {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//     }
  
//     validateEmail() {
//       const isValid = this.email.includes('@');
//       return isValid;
//     }
//   }
  
//   const client = new Client('John Doe', 'johndoe@example.com');
  
//   console.log(client.validateEmail()); 
  
//   const invalidClient = new Client('Jane Smith', 'janesmithexample.com');
//   console.log(invalidClient.validateEmail()); 
  
// 4

// class Transport {
//     constructor(brand, model) {
//       this.brand = brand;
//       this.model = model;
//     }
  
//     showInfo() {
//       console.log(`Бренд: ${this.brand}`);
//       console.log(`Модель: ${this.model}`);
//     }
//   }
  
//   class Car extends Transport {
//     constructor(brand, model, year) {
//       super(brand, model);
//       this.year = year;
//     }
  
//     showInfo() {
//       super.showInfo();
//       console.log(`Рік випуску: ${this.year}`);
//     }
//   }
  
//   class Motorcycle extends Transport {
//     constructor(brand, model, engineCapacity) {
//       super(brand, model);
//       this.engineCapacity = engineCapacity;
//     }
  
//     showInfo() {
//       super.showInfo();
//       console.log(`Об'єм двигуна: ${this.engineCapacity}`);
//     }
//   }
  
//   const car = new Car('Toyota', 'Camry', 2022);
  
//   console.log('Автомобіль:');
//   car.showInfo();
  
//   console.log('-----------------------');
  
//   const motorcycle = new Motorcycle('Honda', 'CBR500R', '500cc');
  
//   console.log('Мотоцикл:');
//   motorcycle.showInfo();
  
// 5

