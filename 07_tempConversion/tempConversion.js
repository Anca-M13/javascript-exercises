const convertToCelsius = function(tempF) {
  let newTemp = (tempF - 32) * (5 / 9);
  newTemp = Math.round (newTemp * 10) / 10;
  return newTemp;
};

const convertToFahrenheit = function(tempC) {
  return Math.round((tempC * (9 / 5) +32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
