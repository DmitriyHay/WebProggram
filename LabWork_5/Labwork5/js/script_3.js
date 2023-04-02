function random_Integer(min, max)
 {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
 }
  let r=random_Integer(1,9);
  let h = random_Integer(1,9);
  let pi = 3.14;
  let S = 2 * pi * r * (r+h);
  let V  =pi * r**2 * h;
  console.log("Task 3");
  console.log('S=',S);
  console.log('V=',V);
  document.write('S=',S);
  document.write(' V=',V);