/*T A S K   1*/

//event listener
document.querySelectorAll("button")[0].addEventListener("click",function(){
    let x = 0;
    let y = 1;
    x += 3;
    y += x;

   
    if((document.getElementById("x1").value == x) && (document.getElementById("y1").value == y)){
        document.getElementsByClassName('results')[0].innerHTML = "Correct";
    } else{
        document.getElementsByClassName('results')[0].innerHTML = "Incorrect";
    } 
});



/*T A S K   2*/

//event listener
document.querySelectorAll("button")[1].addEventListener("click",function(){

    let x2 = 1 + 1 * 2; //3
    let y2 = (1 + 1) * 2; //4
    let z = 1 + (1 * 2); //3
    let a = 1 + 1 * 2 / 2; //2
    let b = (1 + 1 * 2) / 2; //1.5
   
    if((document.getElementById("x2").value == x2) && (document.getElementById("y2").value == y2)){
        if((document.getElementById("z2").value == z) && (document.getElementById("a2").value == a)){

            if((document.getElementById("b2").value == b)){
                document.getElementsByClassName('results')[1].innerHTML = "Correct";
            }
        }
        
    } else{
        document.getElementsByClassName('results')[1].innerHTML = "Incorrect";
    } 
});



/*T A S K   3*/

//event listener
document.querySelectorAll("button")[2].addEventListener("click",function(){
    var num1 = +document.getElementById("x3").value;
    var num2 = +document.getElementById("y3").value;

    result = (num1 === 65 || num2 === 65)? true
    : (num1+num2 === 65)? true //check sum
    : false;
    
    document.getElementsByClassName('results')[2].innerHTML = "" +  result;
});


/*T A S K   3*/

//event listener
document.querySelectorAll("button")[2].addEventListener("click",function(){
    var num1 = +document.getElementById("x3").value;
    var num2 = +document.getElementById("y3").value;

    var result = (num1 === 65 || num2 === 65)? true
    : (num1+num2 === 65)? true //check sum
    : false;
    
    document.getElementsByClassName('results')[2].innerHTML = "" +  result;
});




/*T A S K   4*/

//event listener
document.querySelectorAll("button")[3].addEventListener("click",function(){
    var num1 = +document.getElementById("x4").value;
    var num2 = +document.getElementById("y4").value;

    var sum = "" + (num1 + num2); // convert to string
    if((num1 === 3 || num2 === 3) && (sum.includes("3"))){
       var result = true;
    }else{
        var result = false;
    }
    
    document.getElementsByClassName('results')[3].innerHTML = "" +  result;
});


/*T A S K   5*/

//event listener
document.querySelectorAll("button")[4].addEventListener("click",function(){
 
    var a = +document.getElementById("x5").value;
    var b = +document.getElementById("y5").value;
    var c = +document.getElementById("z5").value;

    var semiP = 0.5*(a+b+c); //semiPerimeter
    var area =  Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c)); //Heron's formula
    document.getElementsByClassName('results')[4].innerHTML = "Area: " + area + "square units";
    
});


/*T A S K   6*/

//event listener
document.querySelectorAll("button")[5].addEventListener("click",function(){

    var num1 = +document.getElementById("x6").value;
    var num2 = +document.getElementById("y6").value;
    var num3 = +document.getElementById("z6").value;
    var max = num1;

    if(num2 > max){ //compare max with 2nd number and update max
        max = num2;
    }
    if(num3 > max){ //compare max with 3rd number and update max
        max = num3;
    }

    document.getElementsByClassName('results')[5].innerHTML = "Maximum: " + max;
    
});


/*T A S K   7*/
let newF = 0, newC = 0; //global
//event listener
document.querySelectorAll("button")[6].addEventListener("click",function(){

    let c = +document.getElementById("x7").value;
    let f = +document.getElementById("y7").value;
    let pair = [];
    
    if(f != newF){ // f is entered
        
        newC = (f - 32) * (5/9); 
        newF = f;
       
    } else{ // if c is entered
    
        newF = (c * (9/5))+ 32; 
        newC = c;
       
    }
    pair.push(newC,newF);
    document.getElementById("x7").setAttribute("value", pair[0]); 
    document.getElementById("y7").setAttribute("value", pair[1]); 
    pair.pop();
    pair.shift();
  console.log("After: " + newC + " " + newF);



});



/*T A S K   8*/

//event listener
document.querySelectorAll("button")[7].addEventListener("click",function(){

    var num = +document.getElementById("x8").value;
    
    var hours = Math.floor(num/60);
    var mins = num % 60; //get remainder

    document.getElementsByClassName('results')[6].innerHTML = hours + " hours, " + mins + " minutes";
    
});



/*T A S K   9*/

//event listener
document.querySelectorAll("button")[8].addEventListener("click",function(){

    var sum = 0;

    for(var i = 3; i <1000; i++){
        if(i%3 == 0 || i%5 == 0){
            sum += i;
        }
    }


    document.getElementsByClassName('results')[7].innerHTML = "Sum: " + sum;
    
});




/*T A S K   10*/

//event listener
document.querySelectorAll("button")[9].addEventListener("click",function(){

    var word = document.getElementById("x10").value;
    var vowels = [];

    for(var i = 0; i < word.length; i++){
        var char = word[i];
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

    document.getElementsByClassName('results')[8].innerHTML = "Vowels: " + vowels;
    
});



/*T A S K   11*/

//event listener
document.querySelectorAll("button")[10].addEventListener("click",function(){

    var word1 = document.getElementById("x11").value;
    var word2 = document.getElementById("y11").value;
    var commons = [];
    

    for(var i = 0; i< word2.length; i++){
        for(var j = 0; j < word1.length; j++){
            if(word2[i] === word1[j]){
                if(!commons.includes(word2[i])){ // check if letter is already in commons
                    commons.push(word2[i]);
                }
               
            }
        }
    }

    document.getElementsByClassName('results')[9].innerHTML = "Commons: " + commons;
    
    
});