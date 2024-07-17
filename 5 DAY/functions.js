// Tasks/Activities:
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
const checkNum = function(num){
    if(num%2 == 0){
        console.log("Number is Even");
    } else{
        console.log("Number is Odd");
    }
}
checkNum(58)


// Task 2: Write a function to calculate the square of a number and return the result.
const numSquare = function(square){
    return square * square;
}
console.log(numSquare(5));


// ---------------------------------------

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMaxNum = function(num1 , num2){
    if(num1 > num2){
        console.log(`${num1} is max`);
    } else if(num1 < num2) {
        console.log(`${num2} is max`);
    }else{
         console.log("Both num is equal");
    }
}
findMaxNum(69,69)

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateTwoString = function(str1,str2){
    return str1.concat(str2)
}
console.log(concatenateTwoString("Zubair","Khan"));


// ---------------------------------------

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const addTowNum = (num1 , num2) => {return num1+num2}
console.log(addTowNum(15,15));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkStr = (str,char) => {
    return str.includes(char)

}
console.log(checkStr('abc','d'));

// without includes function
const checkStrTypeTwo = (str,char)=>{
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return true
        }
    }
    return false
}
console.log(checkStrTypeTwo('abc','c'));


// ---------------------------------------

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
const products = function(item1,item2 = 1){
   return item1 * item2
}
console.log(products(5,5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greetingCard = function(name, age = 18){
    return `Hello ${name}! You are ${age} years old.`;;
}
console.log(greetingCard("Zubair",21));


// ---------------------------------------

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const highOrdreFun = function(func,times){
    for(let i = 1; i <= times; i++){
        func() // agar hme funtion ke aandar argument me bhi funtion hi dena hai to usko jaise call karta hai us trike se likh do like fun()
    }
};

const sayHello = function(){
    console.log("Hii 😊");
}

highOrdreFun(sayHello,5)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const mainFun = function(value,fun1,fun2){
    const resultfun1 = fun1(value);
    const resultfun2 = fun2(resultfun1)
    return resultfun2
}

const doble = function(num){ return num + num}
const square = function(num){ return num*num}

console.log(mainFun(2,doble,square));


