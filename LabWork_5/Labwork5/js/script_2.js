function random_Integer(min, max)
 {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
 }

  let a = random_Integer(1,9),
    b=random_Integer(1,9),
    c=random_Integer(1,9);
    console.log("Task 2");
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
    document.write("Arithmetic mean:", (a+b+c)/3);