const fahrenheitText = "68";
const fahrenheit = Number(fahrenheitText);
const celsius = (fahrenheit - 32) * 5 / 9;

console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
