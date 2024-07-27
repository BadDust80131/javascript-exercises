const convertToCelsius = function(f) {
  c = ((f - 32) * (5/9))
  if (c % 1 == 0) {
    return +c.toFixed(0)
  }else {
    return +c.toFixed(1)
  }
};

const convertToFahrenheit = function(c) {
  f = ((c * (9/5)) + 32)
  if (f % 1 == 0) {
    return +f.toFixed(0)
  }else {
    return +f.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
