const convertToCelsius = function(tempInFahrenheit) {
  return Math.round((5 / 9) * (tempInFahrenheit - 32) * 10) / 10;;
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round(((9 / 5) * tempInCelsius + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
