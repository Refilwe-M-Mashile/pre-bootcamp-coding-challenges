function getTime(num){
    var hours = Math.floor(num/60);
    var mins = num % 60; //get remainder

    console.log(hours + " hours, " + mins + " minutes");
}

getTime(133);