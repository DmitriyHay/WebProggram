function arithmeticOperation(arg1, arg2, operation) {
  if (Array.isArray(arg1) && arg1.length === 2) {
    arg1 = arg1[0] + arg1[1];
  } else if (typeof arg1 === 'object' && arg1.a !== undefined && arg1.b !== undefined) {
    arg1 = arg1.a + arg1.b;
  }

  if (Array.isArray(arg2) && arg2.length === 2) {
    arg2 = arg2[0] + arg2[1];
  } else if (typeof arg2 === 'object' && arg2.a !== undefined && arg2.b !== undefined) {
    arg2 = arg2.a + arg2.b;
  }

  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    alert('Оба аргумента должны быть числами');
    return null;
  }

  let result;
  switch (operation) {
    case '+':
      result = arg1 + arg2;
      break;
    case '-':
      result = arg1 - arg2;
      break;
    case '*':
      result = arg1 * arg2;
      break;
    case '/':
      result = arg1 / arg2;
      break;
    default:
      alert('Недопустимая операция');
      return null;
  }

  return {result: result.toString()};
}

// Примеры использования функции
let arg1 = 2;
let arg2 = 3;
let operation = '+';
let result = arithmeticOperation(arg1, arg2, operation);
console.log(`Результат: ${result.result}`);

arg1 = [4, 5];
arg2 = 6;
operation = '*';
result = arithmeticOperation(arg1, arg2, operation);
console.log(`Результат: ${result.result}`);

arg1 = {a: 2, b: 3};
arg2 = {a: 4, b: 5};
operation = '-';
result = arithmeticOperation(arg1, arg2, operation);
console.log(`Результат: ${result.result}`);