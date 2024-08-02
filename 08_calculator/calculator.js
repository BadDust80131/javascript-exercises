const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	let value = 0
  for (let i = 0; i < a.length; i++) {
    value += a[i]
  }
  return value
};

const multiply = function(a) {
  let value = 1
  for (let i = 0; i < a.length; i++) {
    value *= a[i]
  }
  return value
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let value = 1
  for (let i = a; i > 0; i--) {
    value *= i
  }
  return value
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
