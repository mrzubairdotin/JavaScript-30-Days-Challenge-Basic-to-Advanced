// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var age; // Declare a variable using var
age = 21; // Assign Number
console.log(age); // Log the value of console

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name;
name = "Zubair"
console.log(name);

// -----------------------------

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// const userLogin; // const me variable assign karte smy hi value assign karte hai varna error show hoga
const userLogin = true;
console.log(userLogin);

// -----------------------------

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let myName = "Mr Zubair"; // ye varible string ko store karta hai becouse of this => "" and '' same work
console.log(typeof myName); // Output : string

const phoneNumber = 917865238968;
console.log(typeof phoneNumber); // Output : number

let taskComplete = false;
console.log(typeof taskComplete); // Output : boolean

let myObj = {
    name: 'zubair',
    age: 21
}
console.log(typeof myObj); // Output : object

let studentMarks = [58, 65, 39, 80, 55];
console.log(typeof studentMarks); // Output : object

// -----------------------------

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let bankBalance = 100.00;
console.log(bankBalance);
bankBalance = 130.00;
console.log(bankBalance);

// -----------------------------

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const myPhoneNumber = 58668;
console.log(myPhoneNumber);
myPhoneNumber = 78556;
console.log(myPhoneNumber); // Output : TypeError: Assignment to constant variable because ham constant ki value ko change nhi kar sakte 