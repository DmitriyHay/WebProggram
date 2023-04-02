console.log("Task 8");
const ARR = [];
for (let i = 0; i < 5; i++)
{
  ARR[i] = [];
  for (let j = 0; j < 5; j++) {ARR[i][j] = Math.floor(Math.random() * 10);}
}


for (let i = 0; i < 5; i++)
{
  for (let j = 0; j < 5; j++) {
    if (i === j) {ARR[i][j] = ARR[i][j] < 0 ? 0 : 1;}
  }
}

console.log(ARR);