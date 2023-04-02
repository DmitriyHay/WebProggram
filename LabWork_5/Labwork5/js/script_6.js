let w1 = 10;
let h1 = 5;
let rectangle = "";
console.log("Task 6");

for(let i = 0; i < h1; i++){
  for(let j = 0; j < w1; j++){
    rectangle += "* ";
  }
  rectangle += "\n";
}

 console.log(rectangle);


 let h2= 10;
 let rightTriangle = "";
 
 for(let i = 0; i < h2; i++){
   for(let j = 0; j <= i; j++){
     rightTriangle += "* ";
   }
   rightTriangle += "\n";
 }
 
 console.log(rightTriangle);

 let h3 = 10;
 let equilateralTriangle = "";
 
 for(let i = 0; i < h3; i++){
   for(let j = 0; j < h3 - i; j++){
     equilateralTriangle += "  ";
   }
   for(let j = 0; j <= i; j++){
     equilateralTriangle += "* ";
   }
   equilateralTriangle += "\n";
 }
 
 console.log(equilateralTriangle);

 let h4= 10;
 let diamond = "";
 
 for (let i = 1; i <= h4; i++) {
   for (let j = 1; j <= h4 - i; j++) {
     diamond += "  ";
   }
   for (let j = 1; j <= 2 * i - 1; j++) {
     diamond += "* ";
   }
   diamond += "\n";
 }
 
 for (let i = h4 - 1; i >= 1; i--) {
   for (let j = 1; j <= h4 - i; j++) {
     diamond += "  ";
   }
   for (let j = 1; j <= 2 * i - 1; j++) {
     diamond += "* ";
   }
   diamond += "\n";
 }
 
 console.log(diamond);