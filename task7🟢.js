function convertToFahrenheit(celsius) {
    return (celsius * (9/5)) + 32 + "°F";
    
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9) + "°C";
}

console.log(convertToFahrenheit(0));
console.log(convertToCelsius(32));