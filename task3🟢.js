function checkNumbers(num1, num2){
    if(num1 != 65 && num2 != 65){
        if((num1 + num2) === 65){
            return true;
        }else{
            return false;
        }
    }
    return true;
}

//var isValid = checkNumbers(5, 55);
//console.log(isValid);