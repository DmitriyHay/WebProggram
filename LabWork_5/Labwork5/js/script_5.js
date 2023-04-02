function random_Integer(min, max)
 {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
 }
console.log("Task 5");
let N = random_Integer(1,7), i=1, factorial = 1;
console.log(N);
do {
    factorial*=i;
    i++;
} while (i<=N);
console.log(factorial);