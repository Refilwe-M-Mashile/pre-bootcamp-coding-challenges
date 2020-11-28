function getVowels(string1, string2){
    var commons = [];
    
    //case sensitive
    for(var i = 0; i< string1.length; i++){
        for(var j = 0; j < string2.length; j++){
            if(string1[i] === string2[j]){
                if(!commons.includes(string1[i])){ // check if letter is already in commons
                    commons.push(string1[i]);
                }
            }
        }
    }

    console.log("Common Letters: " + commons);
}

getVowels("house", "computers");