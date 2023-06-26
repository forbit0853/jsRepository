// 1
// Subtask 1
const favoriteAnimal = {
    name: "Leo",
    species: "Lion",
    age: 5,
    characteristics: ["Brave", "Strong", "Regal"]
  };
  
  // Subtask 2
  function printAnimalProperties(animal) {
    for (let property in animal) {
      console.log(`${property}: ${animal[property]}`);
    }
  }
  
  // Subtask 3
  function changeAnimalProperty(animal, property, newValue) {
    if (animal.hasOwnProperty(property)) {
      animal[property] = newValue;
    } else {
      console.log(`Property "${property}" does not exist in the animal object.`);
    }
  }

  console.log("Subtask 1 - Favorite Animal:");
  console.log(favoriteAnimal);
  
  console.log("\nSubtask 2 - Print Animal Properties:");
  printAnimalProperties(favoriteAnimal);
  
  console.log("\nSubtask 3 - Change Animal Property:");
  changeAnimalProperty(favoriteAnimal, "age", 6);
  changeAnimalProperty(favoriteAnimal, "species", "Tiger");
  changeAnimalProperty(favoriteAnimal, "color", "Golden");
  
  console.log("\nSubtask 2 - Print Updated Animal Properties:");
  printAnimalProperties(favoriteAnimal);
  
  // 2

  // Subtask 1
const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    features: ["GPS", "Bluetooth", "Backup Camera"]
  };
  
  const car2 = {
    brand: "Honda",
    model: "Accord",
    year: 2022,
    features: ["Lane Departure Warning", "Apple CarPlay", "Adaptive Cruise Control"]
  };
  
  console.log("Subtask 1 - Comparison Result:");
  console.log(car1 === car2);
  
  // Subtask 2
  function removeProperty(object, property) {
    if (object.hasOwnProperty(property)) {
      delete object[property];
      console.log(`Property "${property}" has been successfully removed.`);
    } else {
      console.log(`Property "${property}" does not exist in the object.`);
    }
  }
  

  console.log("\nSubtask 2 - Remove Property:");
  console.log("Before:", car1);
  removeProperty(car1, "year");
  console.log("After:", car1);
  

// 3

// Subtask 1
const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "secret123",
    age: 25,
    gender: "male"
  };
  
  // Subtask 2
  function checkPassword(inputPassword, userObject) {
    if (inputPassword === userObject.password) {
      console.log("Password is correct!");
    } else {
      console.log("Password is incorrect!");
    }
  }
  
  // Subtask 3
  function displayProperties(userObject) {
    for (let property in userObject) {
      console.log(`${property}: ${userObject[property]}`);
    }
  }
 
  const inputPassword = "secret123";
  console.log("Subtask 2 - Check Password:");
  checkPassword(inputPassword, user);
  
  console.log("\nSubtask 3 - Display Properties:");
  displayProperties(user);
  
  // 4

  // Subtask 1
const electronicStore = {
    name: "My Electronic Store",
    address: "123 Main Street, City",
    products: [
      {
        name: "Laptop",
        price: 1500,
        description: "Powerful laptop for all your computing needs."
      },
      {
        name: "Smartphone",
        price: 800,
        description: "The latest smartphone with advanced features."
      },
      {
        name: "Headphones",
        price: 100,
        description: "High-quality headphones for an immersive audio experience."
      }
    ]
  };
  
  // Subtask 2
  function sortProductsByPriceDescending(storeObject) {
    storeObject.products.sort((a, b) => b.price - a.price);
  }
  

  console.log("Subtask 2 - Sort Products by Price (Descending):");
  sortProductsByPriceDescending(electronicStore);
  console.log(electronicStore.products);
  