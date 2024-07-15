// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 4;
(num%2 == 0) ? console.log("Even") : console.log("Odd");

// ------------------------------

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let leapYear = 2024;

((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) ? console.log(`${leapYear} is Leap year`) : console.log(`${leapYear} is not leap year`);
