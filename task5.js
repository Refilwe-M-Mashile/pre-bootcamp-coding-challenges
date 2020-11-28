function calcArea(a,b,c){
   var semiP = 0.5*(a+b+c); //semiPerimeter
   return Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c)); //Heron's formula
}

console.log("Area:" + calcArea(5,4,3)); //6