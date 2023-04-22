console.log("Добро пожаловать в игру 'Угадай число'!");
let age = prompt("Введите свой возраст:");
if (age < 18) {
  console.log("Игра доступна только для лиц старше 18 лет.");
} else {
  // продолжаем игру
}
console.log("Правила игры: компьютер загадывает число от 1 до 100, а вы должны его угадать за минимальное число попыток.");
let attempts = prompt("Введите количество попыток:");
let secretNumber = Math.floor(Math.random() * 100) + 1;
for (let i = 1; i <= attempts; i++) {
    let guess = prompt("Попытка " + i + ": введите число от 1 до 100:");
    if (guess == secretNumber) {
      console.log("Вы угадали число " + secretNumber + " с " + i + " попытки!");
      break;
    } else if (guess < secretNumber) {
      console.log("Загаданное число больше.");
    } else {
      console.log("Загаданное число меньше.");
    }
  }
console.log("Игра окончена.");