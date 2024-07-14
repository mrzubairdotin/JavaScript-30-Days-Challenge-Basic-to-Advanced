// Tasks/Activities:
// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let addNum1 = 55; 
let addNum2 = 45;
let addition = addNum1 + addNum2; // Add 1st value and 2nd value in addition variable
console.log(addition); // Logging the result of addition

// Task 2: Write a program to subtract two numbers and log the result to the console.
let sub1 = 25;
let sub2 = 10;
console.log(sub1 - sub2); // direct console subtract output : 15

// Task 3: Write a program to multiply two numbers and log the result to the console.
let mul1 = 5, mul2 = 5; // Same line assig value 
console.log(mul1 * mul2);

// Task 4: Write a program to divide two numbers and log the result to the console.
console.log(14 / 2); // Direct without varible declear log value

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(15 % 2); // This is % opertor is use for remiander

// ---------------------------------

// Activity 2: Assignment Operators

// Task 6: Use the  += operator to add a number to a variable and log the result to the console.
let plus = 6;
plus += 4; // Add 4 to the current value of 'plus', making it 10
console.log(plus);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let mines = 10;
mines -=  5;
console.log(mines);

// ---------------------------------

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

const ramAge = 18;
const syamAge = 21;
console.log(ramAge < syamAge); // yha per ram chota hai syam se tho esliye ye true hoga
console.log(ramAge > syamAge); // yha per ram chota hai hai syam se eslye false hoga 

// Write a program to compare two numbers using >= and <= and log the result to the console.
const ravi = 25;
const ravies = 25;
const ravan = 26;

console.log(ravi >= ravies); // eshme chota hai ya bda ye tho dhketa hi hai or sath hi ye bhi dketa hai brabar bhi hai ya nhi show eshme ravi or ravies ki age brabar hai tho output : true hoga
console.log(ravan <= ravi); // yha per ravi ki age ravan se choti hai or tir ka nisan ravi ki trf hai yani ravi bda hai ravan hai lekin ehsa nhi or na hi brabar hai to eshme false hoga

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

const zubairMark = 55;
const zunadMark = 60;
const zavedMark = '55';

console.log(zubairMark == zunadMark); // esme kya zubar ke marks brabar hai zunad marks se tho ye false hai kyki zunad ke marks jyda hai tho ye false hai
console.log(zubairMark == zavedMark); // eshme zubair or zavad ke marks tho brabar hai per zavad ek string ke aandar hai fir bhi ye true dega q ki ye varible ka type check nhi karta

console.log(zubairMark === zavedMark); // eshme === hme vareble type bhi check karta hai or value bhi tho eshme value to same hai per type alag hai tho ye false output dega

// ---------------------------------

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// NOTE : && opertar dono condition shi hone per hi chlta hai ya true or false deta hai
const sachinAge = 21;
const siwamAge = 23;
const sagarAge = 21;

console.log(sachinAge == sagarAge && sagarAge == sachinAge); // && opertar dono condition shi hone per hi chlta hai ya true or false deta hai eshme sahinAge btabar hai sagarAge se or sagarAge brabar hai sachingAge se to ye dono condition shi hai tho ye true dega
console.log(sachinAge > siwamAge && sagarAge == sachinAge); // ye hme false dega k ki jo phli condition hai sachinAge bda hai siwam se so esme sachin chota hai siwam se to ye codition false hai per dosri conditon right hai per fir bhi false dega q ki dono condition right honi chaye 

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// || OR opertar dono me se ya multiople condition me se ek bhi codition shi hone per true deta hai 
console.log(sachinAge > siwamAge || sachinAge == sagarAge); // ye true dega q ki eshme ek condition shi hai sachinAge == sagarAge se 

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// ye ! tab use karte hai jab value not equal check karna ho 
console.log(sachinAge != siwamAge && sachinAge >= sagarAge); // tho esme sachinAge not equal yani brabar nhi hai siwamAge ke tho ye condition right hai or && opertor dono conditonn right hone per hi true deta hai or esme dosri condition sachinnAge >= sagarAge yani sachinAge bda hai ra brabar hai sagarAge se to eshme brabar hai tho ye condition bhi correct hai tho ye OUTPUT : TRUE 
console.log(!(sachinAge == siwamAge && sachinAge >= sagarAge)); // Ye shi trike hai ! ko use karne ka 

// ---------------------------------

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
// ternary opertory ka kaam condition check karke true me kya reslut dena or false me kya reult dena hai syntax (condtion) ? true : false 

let myNum = 0;
(myNum >= 0) ? console.log("Number is positive ") : console.log("Number is negitive"); // eshem ham check kar rhe hai condition me ki agar myNum 0 se bda or ya brabar ho tho aage ki true codition do or agar nhi hai tho : se aagi ki false codition ka reulst do 