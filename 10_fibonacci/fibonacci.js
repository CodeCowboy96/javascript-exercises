//Fib Funx  (n) = F(n-1) + F(n-2)
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34


const fibonacci = function(n) {
        n = parseInt(n, 10);
        if (n === 0) {
            return 0; // Base case: Fibonacci(0) = 0
        } else if (n === 1) {
            return 1; // Base case: Fibonacci(1) = 1
        } else if (n < 0) {
            return "OOPS";
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
        }
    };





// Do not edit below this line
module.exports = fibonacci;
