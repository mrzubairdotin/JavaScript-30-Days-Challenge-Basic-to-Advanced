// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// let week = 8;

// switch(week){
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("THUSDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//         break;
//     case 7:
//         console.log("SUNDAY");
//         break;
//     default:
//         console.log("Incorrect Key");
// }

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E') based on a score and log the grade to the console.

// Answer Type 1
// let score = 'A';

// Answer Type 2
// switch(score){
//     case 'A':
//         console.log("Score is (90-100)");
//         break;
//     case 'B':
//         console.log("Score is (70-89)");
//         break;
//     case 'C':
//         console.log("Score is (50-69)");
//         break;
//     case 'D':
//         console.log("Score is (33-49)");
//         break;
//     case 'E':
//         console.log("Score is (1-32)");
//         break;
//     default:
//         console.log("Incorrect Key");
// }

// Answer Type 3 
// let score = 85;

// switch(score){
//     case 90:
//     case 91:
//     case 92:
//     case 93:
//     case 94:
//     case 95:
//     case 96:
//     case 97:
//     case 98:
//     case 99:
//     case 100:
//         console.log("Grade: A");
//         break;
//     case 80:
//     case 81:
//     case 82:
//     case 83:
//     case 84:
//     case 85:
//     case 86:
//     case 87:
//     case 88:
//     case 89:
//         console.log("Grade: B");
//         break;
//     case 70:
//     case 71:
//     case 72:
//     case 73:
//     case 74:
//     case 75:
//     case 76:
//     case 77:
//     case 78:
//     case 79:
//         console.log("Grade: C");
//         break;
//     case 60:
//     case 61:
//     case 62:
//     case 63:
//     case 64:
//     case 65:
//     case 66:
//     case 67:
//     case 68:
//     case 69:
//         console.log("Grade: D");
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 24:
//     case 25:
//     case 26:
//     case 27:
//     case 28:
//     case 29:
//     case 30:
//     case 31:
//     case 32:
//     case 33:
//     case 34:
//     case 35:
//     case 36:
//     case 37:
//     case 38:
//     case 39:
//     case 40:
//     case 41:
//     case 42:
//     case 43:
//     case 44:
//     case 45:
//     case 46:
//     case 47:
//     case 48:
//     case 49:
//         console.log("Grade: E");
//         break;
//     default:
//         console.log("Invalid score");
// }

// Answer Type 4
let score = 85;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 70 && score <= 89):
        grade = "B";
        break;
    case (score >= 50 && score <= 69):
        grade = "C";
        break;
    case (score >= 33 && score <= 49):
        grade = "D";
        break;
    case (score >= 1 && score <= 32):
        grade = "E";
        break;
    default:
        console.log("Invalid score");
}

if (grade) {
    console.log("Grade:", grade);
}


