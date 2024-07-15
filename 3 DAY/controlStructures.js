// Tasks/Activities:
// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 5;

if(num > 0){
    console.log(`${num} : Positive`);
} else if(num < 0){
    console.log(`${num} : Negetive`);
} else if(num === 0){
    console.log(`${num} : Zero`);
}else{
    console.log(`This is ${num} not a number!`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >- 18) and log the result to the console.
let voterAge = 18;
if(voterAge >= 18){
    console.log("Voter is eligible to vote");
}else{
    console.log("Voter is not eligible to vote");
}

// ---------------------------------

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const raviMarks = 68;
const ramuMarks = 58;
const ramMarks = 63;

if(raviMarks > ramMarks){
    if(raviMarks > ramuMarks){
        console.log("Ravi achive high marks of three student");
    }
}else if(ramuMarks > raviMarks && ramuMarks > ramMarks){
        console.log("Ramu achive high marks of three student");
}else if(ramMarks > ramuMarks && ramMarks > raviMarks){
        console.log("Ram achive high marks of three stune");
}




