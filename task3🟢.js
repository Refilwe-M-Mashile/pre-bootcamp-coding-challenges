function checkNumbers(num1, num2){
    return (num1 === 65 || num2 === 65)? true
    : (num1+num2 === 65)? true //check sum
    : false;
}

//Testing function
console.log(checkNumbers(65, 3));//where num1 = 65
console.log(checkNumbers(5, 65)); // where num2 = 65
console.log(checkNumbers(10, 55)); // where sum is 65
console.log(checkNumbers(10, 5)); // where none is 65 nor sum is 65