function convertToFahrenheit(celsius) {
    var F = (celsius * (9/5)) + 32;
    console.log(F+"F");
}

function convertToCelsius(fahrenheit) {
    var C = (fahrenheit - 32) * (5/9);
    console.log(C+"C");
}

convertToFahrenheit(0);
convertToCelsius(70);