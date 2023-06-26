// 1

// function delayedOutput() {
//     setTimeout(function() {
//       console.log('Рядок, виведений після 5 секунд');
//     }, 5000);
//   }

//   delayedOutput();

// 2

// function fetchDataAfterDelay() {
//     setTimeout(function() {
//       
//       const url = 'https://example.com/data'; 
//       fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           console.log('Отримані дані:', data);
//         })
//         .catch(error => {
//           console.error('Помилка запиту:', error);
//         });
//     }, 10000);
//   }

//   fetchDataAfterDelay();

// 3


// 4

// function getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
    
//     return `${hours}:${minutes}:${seconds}`;
//   }
  
//   const currentTime = getCurrentTime();
//   console.log(currentTime);
  
// 5

// function getCurrentDate() {
//     const now = new Date();
//     const day = now.getDate().toString().padStart(2, '0');
//     const month = (now.getMonth() + 1).toString().padStart(2, '0');
//     const year = now.getFullYear();
    
//     return `${day}.${month}.${year}`;
//   }
  
//   const currentDate = getCurrentDate();
//   console.log(currentDate);
  
// 6

// function getDaysUntilNewYear() {
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     const newYear = new Date(currentYear + 1, 0, 1); 
//     const timeDiff = newYear.getTime() - now.getTime();
//     const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
//     return daysRemaining;
//   }
  
//   const daysUntilNewYear = getDaysUntilNewYear();
//   console.log(`Залишилося днів до Нового року: ${daysUntilNewYear}`);
  

