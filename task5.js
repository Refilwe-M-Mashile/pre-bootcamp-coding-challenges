function calcArea(a,b,c){
   var semiPerimeter = 0.5*(a+b+c); 
   return Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c)); //Heron's formula
}

console.log("Area: " + calcArea(5,4,3));