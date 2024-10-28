const convertToCelsius = function(value) {
  
  var celsiusValue = (value - 32) / (9/5);
  celsiusValue = parseFloat(celsiusValue.toFixed(1));
  return celsiusValue;
};

const convertToFahrenheit = function(value) {
  var farenheitValue = value * 9/5 +32;
  farenheitValue = parseFloat(farenheitValue.toFixed(1));
  return farenheitValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
