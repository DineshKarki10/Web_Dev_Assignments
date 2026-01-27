// Write a JavaScript function that takes a number as input and checks whether it is even or odd using an if-else statement.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7));

//Write a JavaScript function that takes a number as input and prints its multiplication table (up to 10) using a for loop.
function M_Table(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
console.log(M_Table(5));

// FizzBuzz Clallenge
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        // Divisible by both 3, and 5 = "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        // Divisible by 3 = "Fizz"
        } else if (i % 3 === 0) {
            console.log("Fizz");
        // Divisible by 5 = "Buzz"
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz());

// Right-angled Triangle Pattern
function trianglePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}
console.log(trianglePattern(4));