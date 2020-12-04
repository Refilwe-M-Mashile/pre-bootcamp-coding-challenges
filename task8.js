function getTime(num) {
  var hours = Math.floor(num / 60);
  var mins = num % 60;
  var output = "";

  if (hours > 1) {
    output += hours + " hours, ";
  } else {
    output += hours + " hour, ";
  }

  if (mins > 1) {
    output += mins + " minutes";
  } else {
    output += mins + " minute";
  }

  return output;
}

console.log(getTime(121));
