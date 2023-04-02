console.log("Task 12");
let W = 8;
let H = 5;
let Rec = '';

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    Rec += '*';
  }
  Rec += '\n';
}

console.log(Rec);