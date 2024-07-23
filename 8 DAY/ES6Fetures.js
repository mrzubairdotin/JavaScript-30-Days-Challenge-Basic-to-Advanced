// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Zubair";
let age = 21;
let message = `The person's name is ${name} and they are ${age} years old.`;
// console.log(message);

// Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineStr = `
My name is Zubair
I am indian
my hobes like watch youtube videos
`
// console.log(multiLineStr);


// ---------------------------------------

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [15,25,23,58,96]
let [num1,num2,,num4] = numbers; // ye phelei value se start karta hai value lena 
// console.log(num1);
// console.log(num2);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let Library = {
    name: "Book Libraray",
    books: [
        {
            book: "book one",
            author: "Zubair Khan",
            title: "Ham aapke hai kon",
            year: 1992
        },
        {
            book: "book two",
            author: "Ahmad khan",
            title: "Dil hai ke manta nhi",
            year: 2005
        }
    ]
}

let { books } = Library; // Extract the books array
let [firstBook] = books; // Extract the first book object from the array
let { title, author } = firstBook; // Extract title and author from the first book object

// console.log(title);
// console.log(author);


// ---------------------------------------

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let myNums1 = [25,36,12,8,6,45]
let myNums2 = [69,58,55,63,47]
let storeAllNums = [...myNums1,...myNums2,55,66,77,88]
// console.log(storeAllNums);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumAll(...numbers) {
    let sum = 0;
    
    for (let number of numbers) {
      sum += number; 
    }
    
    return sum;
  }

let result = sumAll(1, 2, 3, 4); // 1+2+3+4 = 10
console.log(result);


// ---------------------------------------

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
let multiTwoNum = function(num1,num2 = 1){
    return num1*num2;
}
console.log(multiTwoNum(5,5));
console.log(multiTwoNum(10));


// ---------------------------------------

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' + this.name);
    },
    incrementAge() {
        this.age++;
    }
};

// console.log(person);

person.greet();          
person.incrementAge();
console.log(person.age);


// Task 9: Create an object with computed property names based on variables and log the object to the console.
// Variables for property names
let prop1 = 'firstName';
let prop2 = 'lastName';
let prop3 = 'age';

// Create object with computed property names
const user = {
    [prop1]: 'John',
    [prop2]: 'Doe',
    [prop3]: 30
};

// Log the object to the console
console.log(user);