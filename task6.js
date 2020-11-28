function findMax(num1, num2, num3) {
    //assume that num1 is the max number
    var max = num1;
    if(num2 > max){ //compare max with 2nd number and update max
        max = num2;
    }
    if(num3 > max){ //compare max with 3rd number and update max
        max = num3;
    }

    return max;
    
}


//take an array of numbers for find max
function bonus(arr) {
    var tempMax = arr[0];  //assume that first number in arrray is the max number
    
    for(var i = 1; i < arr.length; i++){
        if(arr[i]>= tempMax){
            tempMax = arr[i];
        }
    }
    return tempMax;
}


console.log(findMax(70, 130, 150)); //first function

var arrNumbers = [45, 50, 60, 80, 88, 10, 24, 190, 134];
console.log(bonus(arrNumbers)); //bonus function
