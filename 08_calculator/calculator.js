//Add 2 + 2
const add = function(a,b) {
	return a + b
};

//subtract 
const subtract = function(c,d) {
	return c-d
};

const sum = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	
};

const multiply = function(mArr) {
  return mArr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(x,y) {
	return x ** y
};

const factorial = function(num) {
	if (num < 0) 
    return -1;
else if (num == 0) 
  return 1;
else {
  return (num * factorial(num - 1));
  }
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
