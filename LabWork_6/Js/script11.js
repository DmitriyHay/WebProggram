let num1 = 10;
let num2 = 5;

console.log(`Результат сложения: ${num1 + num2}`);

console.log(`Результат вычитания: ${num1 - num2}`);

console.log(`Результат умножения: ${num1 * num2}`);

if (num2 === 0) {
  console.error('Ошибка: деление на ноль');
} else {
  console.log(`Результат деления: ${num1 / num2}`);
}

if (isNaN(num1) || isNaN(num2)) {
  console.error('Ошибка: одно из значений не является числом');
} else {
  console.log(`Остаток от деления: ${num1 % num2}`);
  console.log(`Результат возведения в степень: ${num1 ** num2}`);
  console.log(`Инкремент первого числа: ${++num1}`);
  console.log(`Декремент второго числа: ${--num2}`);
}