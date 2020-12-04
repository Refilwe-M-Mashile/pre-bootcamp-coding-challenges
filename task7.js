function convertToFahrenheit(celsius) {
    return (celsius * (9/5)) + 32;
    
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

console.log(convertToFahrenheit(0)  + "°F");
console.log(convertToCelsius(32)  + "°C");