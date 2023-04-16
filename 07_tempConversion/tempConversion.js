const convertToCelsius = function(num) {
  let result = (num - 32) * 5 / 9;
  // return parseFloat(result.toFixed(1)); // toFixed sets decimal places; returns string; hence parseFloat
  return Math.round(result * 10) / 10; // alternative to toFixed; returns whole numbers without decimal
};

const convertToFahrenheit = function(num) {
 let result = (num *  9 / 5 ) + 32;
//  return parseFloat(result.toFixed(1));
 return Math.round(result * 10) / 10;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
