console.log("Task 10");
function analyzeNumber(num) {
    let sign = '';
    if (num > 0) {
      sign = 'положительное';
    } else if (num < 0) {
      sign = 'отрицательное';
    } else {
      sign = 'ноль';
    }
    console.log(`Число ${num} - ${sign}`);
  
    let isPrime = true;
    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    console.log(`Число ${num} ${isPrime ? 'простое' : 'не является простым'}`);
  
    const divisors = [2, 5, 3, 6, 9];
    for (let divisor of divisors) {
      if (num % divisor === 0) {
        console.log(`Число ${num} делится на ${divisor} без остатка`);
      } else {
        console.log(`Число ${num} не делится на ${divisor} без остатка`);
      }
    }
  }
  
  analyzeNumber(23);