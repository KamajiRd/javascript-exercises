const add = function(num1, num2) {
	let addTotal = parseInt(num1) + parseInt(num2)
  return addTotal
};

const subtract = function(num1, num2) {
  let substractTotal = parseInt(num1) - parseInt(num2)
  return substractTotal
};

const sum = function(array) {
  let sumTotal = 0
  for (i = 0; i < array.length ; i++) {
    sumTotal += array[i]
  }
  return sumTotal
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
