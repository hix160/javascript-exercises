const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
  let sum = 0;
	for(i=0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for(i=0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
};

const power = function(number, power) {
  let result = 1;
	for(i=0; i<power; i++) {
     result = result *number;
  }
  return result;
};

const factorial = function(factorial) {
  let result = 1;
	for(;factorial > 0; factorial--) {
    result = result * factorial
  }
  return result;
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
