/*T A S K   1*/
document.querySelectorAll("button")[0].addEventListener("click", function () {
  var x = calculateXY()[0];
  var y = calculateXY()[1];

  if (
    document.getElementById("x1").value == x &&
    document.getElementById("y1").value == y
  ) {
    document.getElementsByClassName("results")[0].innerHTML = "Correct";
  } else {
    document.getElementsByClassName("results")[0].innerHTML = "Incorrect";
  }
});

/*T A S K   2*/
document.querySelectorAll("button")[1].addEventListener("click", function () {
  var answers = calcValues();
  if (
    document.getElementById("x2").value == answers[0] &&
    document.getElementById("y2").value == answers[1]
  ) {
    if (
      document.getElementById("z2").value == answers[2] &&
      document.getElementById("a2").value == answers[3]
    ) {
      if (document.getElementById("b2").value == answers[4]) {
        document.getElementsByClassName("results")[1].innerHTML = "Correct";
      }
    }
  } else {
    document.getElementsByClassName("results")[1].innerHTML = "Incorrect";
  }
});

/*T A S K   3*/
document.querySelectorAll("button")[2].addEventListener("click", function () {
  var num1 = +document.getElementById("x3").value;
  var num2 = +document.getElementById("y3").value;

  document.getElementsByClassName("results")[2].innerHTML =
    "" + checkNumbers(num1, num2);
});

/*T A S K   4*/
document.querySelectorAll("button")[3].addEventListener("click", function () {
  var num1 = +document.getElementById("x4").value;
  var num2 = +document.getElementById("y4").value;

  document.getElementsByClassName("results")[3].innerHTML =
    "" + hasThree(num1, num2);
});

/*T A S K   5*/
document.querySelectorAll("button")[4].addEventListener("click", function () {
  var a = +document.getElementById("x5").value;
  var b = +document.getElementById("y5").value;
  var c = +document.getElementById("z5").value;

  document.getElementsByClassName("results")[4].innerHTML =
    "Area: " + calcArea(a, b, c) + " square units";
});

/*T A S K   6*/
document.querySelectorAll("button")[5].addEventListener("click", function () {
  var num1 = +document.getElementById("x6").value;
  var num2 = +document.getElementById("y6").value;
  var num3 = +document.getElementById("z6").value;

  document.getElementsByClassName("results")[5].innerHTML =
    "Maximum: " + findMax(num1, num2, num3);
});

/*T A S K   7*/
document.querySelectorAll("button")[6].addEventListener("click", function () {
  let c = +document.getElementById("x7").value;
  let f = +document.getElementById("y7").value;
  var results = "";

  if (f != 0) {// f is entered
    results = convertToCelsius(f);
  } else {// if c is entered
    results = convertToFahrenheit(c);
  }

  document.getElementById("x7").setAttribute("value", results);
  document.getElementById("y7").setAttribute("value", results);
});

/*T A S K   8*/
document.querySelectorAll("button")[7].addEventListener("click", function () {
  var num = +document.getElementById("x8").value;

  document.getElementsByClassName("results")[6].innerHTML = getTime(num);
});

/*T A S K   9*/
document.querySelectorAll("button")[8].addEventListener("click", function () {
  document.getElementsByClassName("results")[7].innerHTML = "Sum: " + getSum();
});

/*T A S K   10*/
document.querySelectorAll("button")[9].addEventListener("click", function () {
  var word = document.getElementById("x10").value;

  document.getElementsByClassName("results")[8].innerHTML =
    "Vowels: " + findVowels(word);
});

/*T A S K   11*/
document.querySelectorAll("button")[10].addEventListener("click", function () {
  var word1 = document.getElementById("x11").value;
  var word2 = document.getElementById("y11").value;

  document.getElementsByClassName("results")[9].innerHTML =
    "Commons: " + getCommons(word1, word2);
});

/* Include My js files */
document.writeln("<script type='text/javascript' src='/task1.js'></script>");
document.writeln("<script type='text/javascript' src='/task2.js'></script>");
document.writeln("<script type='text/javascript' src='/task3.js'></script>");
document.writeln("<script type='text/javascript' src='/task4.js'></script>");
document.writeln("<script type='text/javascript' src='/task5.js'></script>");
document.writeln("<script type='text/javascript' src='/task6.js'></script>");
document.writeln("<script type='text/javascript' src='/task7.js'></script>");
document.writeln("<script type='text/javascript' src='/task8.js'></script>");
document.writeln("<script type='text/javascript' src='/task9.js'></script>");
document.writeln("<script type='text/javascript' src='/task10.js'></script>");
document.writeln("<script type='text/javascript' src='/task11.js'></script>");
