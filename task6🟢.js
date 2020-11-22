function findMax(num1, num2, num3) {
    //assume that num1 is the max number
    var max = num1;
    if(num2 > num1){
        max = num2;
    }
    if(num3 > num1){
        max = num3;
    }

    console.log("Max: " + max);
    
}



function bonus(arr) {
    var tempMax = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i]>= tempMax){
            tempMax = arr[i];
        }
    }
    console.log("Max: " + tempMax);
}

var arrNumbers = [45, 50, 60, 80, 88, 10, 24, 90, 34];
findMax(90, 30, 50);
bonus(arrNumbers);
