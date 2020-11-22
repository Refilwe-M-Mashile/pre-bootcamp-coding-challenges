function getVowels(string){
   var vowels = [];
    for(var i = 0; i < string.length; i++){
        var char = string[i];
        switch(char){
            case "A": //uppercase
            case "a": //lowercase
                if(!vowels.includes("a")){
                    vowels.push("a");
                }
                break;
            case "E":
            case "e":
                if(!vowels.includes("e")){
                    vowels.push("e");
                }
                break;
            case "I":
            case "i":
                if(!vowels.includes("i")){
                    vowels.push("i");
                }
                break;
            case "O":
            case "o":
                if(!vowels.includes("o"))
                vowels.push("o");
                break;
            case "U":
            case "u":
                if(!vowels.includes("u"))
                vowels.push("u");
                break;

        }
    }

    console.log(vowels);

}

getVowels("RefIlwe");