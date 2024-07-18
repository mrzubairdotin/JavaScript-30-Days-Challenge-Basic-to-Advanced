// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
// let myNum = [1,2,3,4,5];
// Type 1
// console.log(myNum); // dirct console

// Type 2
// for(let i = 0; i < myNum.length; i++){
//     console.log(myNum[i]);
// };

// Type 3
// console.log(myNum.join(', '));

// Type 4
// myNum.forEach(function(val){
//     console.log(val);
// });


// Task 2: Access the first and last elements of the array and log them to the console.
// let cartoon = ["Chota Bheem","Moto Patlu","BEN 10","Dorimoon"];
// let firstElement = cartoon[0];
// let lastElement = cartoon[cartoon.length -1] 
// dry run : ye gya cartoon ki lenth per
// step1 : console.log(cartoon.length); jo ki hai 4
// step2 : ab ye cartoon[cartoon.length - 1] yani 4 - 1 = 3
// step3 : ab cartoon ki value ho gyi 3 index so ab ye uski cartoon me aajaye gi 
// step4 : ab lastElement ke aandar index ki 3 value cli jayegi 
// step5 : 3 index per dorimoon hai jo ki es array ki last value hai 
// console.log(`First Element : ${firstElement} || Last Element : ${lastElement}`);


// ---------------------------------------

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let studentAge = [25,21,26,19,20]
// studentAge.push(29) // push method array ke end me value ko add karta hai wo bhi orginal array me 
// console.log(studentAge);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
// studentAge.pop() // ye last element ko delet kar deta hai orginal array me se 
// console.log(studentAge);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
// studentAge.shift() // ye first element ko delete kar deta hai aur baki ke elements ko shift kar deta hai
// console.log(studentAge);


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
// studentAge.unshift(2,8,6) // Ye array ke andar yani starting me jitne bhi value doge unhe add kar dega aur jo array ke andar values hain unko bhi aage shift kar dega
// console.log(studentAge);


// ---------------------------------------

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let myNumber = [2,3,5,6,4,7];
let dobleNum = myNumber.map((val)=>{return val*val})
// console.log(dobleNum);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
var numberValues = [1,2,3,,5,6,7,8,9,10];

const evenNumber = numberValues.filter(function(val){
    if(val%2 == 0){
        return val
    }
})
// console.log(evenNumber);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfNum = numberValues.reduce(function(acc, currVal){
    return acc + currVal
},0)
// console.log(sumOfNum);


// ---------------------------------------

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
var studentMarks = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < studentMarks.length; i++){
//     console.log(studentMarks[i]);
// }

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const marks = studentMarks.forEach(function(val){
    console.log(val);
})
// console.log(marks);


// ---------------------------------------

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let twoDimArray = [
    [4,5,6],[7,8,9]
]
let arrayEntire = twoDimArray.flat(Infinity)
console.log(arrayEntire);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(twoDimArray[0][1]);
