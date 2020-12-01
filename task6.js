function findMax(num1, num2, num3) {
  var max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }

  return max;
}

//bonus function
function findMaximum(...numbers) {
  var tempMax = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] >= tempMax) {
      tempMax = numbers[i];
    }
  }
  return tempMax;
}

console.log(findMax(70, 130, 150)); //first function
console.log(findMaximum(12, 23, 45, 67, 64, 4)); //bonus function
