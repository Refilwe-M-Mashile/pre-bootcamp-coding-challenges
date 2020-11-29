function hasThree(num1, num2){
    var sum = "" + (num1 + num2); // converts to string
    if((num1 === 3 || num2 === 3) && (sum.includes("3"))){
        return true;
    }else{
        return false;
    }
}
