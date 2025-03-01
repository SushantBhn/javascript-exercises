const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => {
    return product * current;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let facto = 1;
  for(let i = n; i > 0; i--) {
    facto *= i;
  }
  return facto;
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
