function getTime(num){
    var hours = Math.floor(num/60);
    var mins = num % 60; 
    var output = "";
    
    //handling plurals and singulars
    if(hours>1){
        output += hours + " hours, ";   
    }else{
        output += hours + " hour, ";   
    }

    if(mins>1){
        output += mins + " minutes";
    }else{
        output += mins + " minute";
    }

    console.log(output);
}

getTime(121);