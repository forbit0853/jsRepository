// 1

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// const number = 3;
// const result = factorial(number);
// console.log(`Факторіал числа ${number} дорівнює ${result}`);

// 2

// function isPalindrome(word) {
//     if (word.length === 0 || word.length === 1) {
//       return true;
//     }
    
//     if (word[0] === word[word.length - 1]) {
//       return isPalindrome(word.slice(1, word.length - 1));
//     } else {
//       return false;
//     }
//   }

//   console.log(isPalindrome("radar"));  
//   console.log(isPalindrome("level"));  
//   console.log(isPalindrome("hello"));  
  
// 3

// function gcd(a, b) {

//     if (b === 0) {
//       return a;
//     }
    
//     return gcd(b, a % b);
//   }
  
//   console.log(gcd(24, 36));   
//   console.log(gcd(81, 27));   
//   console.log(gcd(8, 12));    
  
// 4

// function increaseValues(arr) {
//     const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  
//     const result = arr.map((value) => {
//       if (value < average) {
//         return value + 1;
//       }
//       return value;
//     });
  
//     return result;
//   }

//   const numbers = [2, 5, 3, 8, 1];
//   const increasedNumbers = increaseValues(numbers);
//   console.log(increasedNumbers);
  
// 5 

// function findLongestWord(sentence) {
//     const words = sentence.split(" ");
//     let longestWord = "";
    
//     words.forEach((word) => {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     });
  
//     return {
//       word: longestWord,
//       length: longestWord.length
//     };
//   }
  
//   const sentence = "The quick brown fox jumped over the lazy dog";
//   const result = findLongestWord(sentence);
//   console.log(result);
  
// 6

// function convertNumbersToLetters(numbers) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
//     const letters = numbers.map((number) => {
//       const index = number - 1;
//       return alphabet[index];
//     });
  
//     return letters;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const letters = convertNumbersToLetters(numbers);
//   console.log(letters);
  
// 7

// function filterDuplicates(arr) {
//     const uniqueElements = [];
  
//     arr.forEach((element) => {
//       if (!uniqueElements.includes(element)) {
//         uniqueElements.push(element);
//       }
//     });
  
//     return uniqueElements;
//   }

//   const array = [1, 2, 3, 2, 4, 3, 5, 1];
//   const filteredArray = filterDuplicates(array);
//   console.log(filteredArray);
  
// 8

// function generateFibonacci(n, firstElement, secondElement) {
//     const fibonacci = [firstElement, secondElement];
  
//     for (let i = 2; i < n; i++) {
//       const nextElement = fibonacci[i - 1] + fibonacci[i - 2];
//       fibonacci.push(nextElement);
//     }
  
//     return fibonacci;
//   }

//   const n = 10;
//   const firstElement = 0;
//   const secondElement = 1;
//   const fibonacciSequence = generateFibonacci(n, firstElement, secondElement);
//   console.log(fibonacciSequence);
  