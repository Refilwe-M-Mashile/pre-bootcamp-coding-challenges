function calcArea(a,b,c){
   var semiP = 0.5*(a+b+c);
   return Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c));
}

console.log("Area:" + calcArea(5,4,3));