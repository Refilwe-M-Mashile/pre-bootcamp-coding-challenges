function hasThree(num1, num2){
    var sum = "" + (num1 + num2); // convert to string
    if((num1 === 3 || num2 === 3) && (sum.includes(3))){
        return true;
    }else{
        return false;
    }
}

var isIt = hasThree(3,21);
console.log(isIt);