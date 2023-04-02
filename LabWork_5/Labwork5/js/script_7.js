const M = 10;
let arr = [];
console.log("Task 7");
for (let i = 0; i < M; i++)
{
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Source array: " + arr);


let max = arr[0];
for (let i = 1; i < M; i++)
{
  if (arr[i] > max) {max = arr[i];}
}
console.log("Max: " + max);


let min = arr[0];
for (let i = 1; i < M; i++)
{
  if (arr[i] < min) {min = arr[i];}
}
console.log("Min: " + min);


let Sum = 0;
for (let i = 0; i < M; i++) {Sum += arr[i];}
console.log("Sum: " + Sum);


let average = Sum / M;
console.log("Average: " + average);


let oddValues = "";
for (let i = 0; i < M; i++)
{
  if (arr[i] % 2 !== 0) {oddValues += arr[i] + " ";}
}
console.log("odd values: " + oddValues);