//KATA:1

/*Write a function named "add" which takes two arguments (as input variables) and returns their sum.
 You may use built-in operators in order to finish this kata.
 For example, calling add(2, 4) should return a result of 6.*/
function add(x, y) {
    return x + y 
}
console.log('KATA:1', add(5, 4))

//KATA:2

/*Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
 You may not use built-in math operators or functions (such as the * multiplication operator). 
 Instead, you will use a FOR loop which calls your add function from the first kata.
 For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:
6 + 6 + 6 + 6 = 24*/
function multiply(x, y) {
    let total = x
    for (let index = 1; index < y; index +=1) {
        total = add(total, x);
    }
    return total
}
console.log('KATA:2', multiply(6, 4))

//KATA:3

 /*Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
 You may not use built-in math operators or functions (such as the * multiplication operator), 
 or the ** operator for power/exponentiation).
 Instead, you will re-use functions you wrote in earlier katas to write this function.
 For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
 And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:
 3 * 3 * 3 * 3 = 81*/
function power(x, n) {
    let total = x
    for (let index = 1; index < n; index += 1) {
        total = multiply(total, x);
    }
    return total
}
console.log('KATA:3', power(2, 8))
console.log('KATA:3', power(3, 4))

//KATA:4

/* Write a function named "factorial" which takes a single argument and returns the factorial of that value.
 You may not use built-in math operators or functions (such as the * multiplication operator). 
 Instead, you will re-use functions you wrote in earlier katas to write this function.
 A factorial multiplies a given number by every number below it.
 For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
 5 * 4 * 3 * 2 * 1 = 120*/
 function factorial(x) {
 let total = 1
 for (let index = x; index >= 1; index -=1) {
     if (x > 0) {
         total = multiply(index, total)
     }
}
return total
}
console.log('KATA:4', factorial(5))

//KATA:5
/*Bonus: Fibonacci (3 points)
Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.
You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.
For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:
0  1  1  2  3  5  8  [13]  21
So, the number in brackets is the 8th Fibonacci number*/
