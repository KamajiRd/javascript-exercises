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

const multiply = function(array) {
  let multiplyTotal = 1
  for(i = 0; i < array.length ; i++) {
  multiplyTotal *= array[i]
  }
  return multiplyTotal
};

const power = function(num1, power1) {
  let powerTotal = Math.pow(num1, power1)
  return powerTotal
};

const factorial = function(num1) {
  let factorialTotal = num1
  if (num1 === 0 || num1 ===  1)
  return 1;
  while(num1 > 1) {
    num1--;
    factorialTotal *= num1
  }
  return factorialTotal
	
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
