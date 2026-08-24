/*
Q1 - Sum of all Natural Numbers from 1 to n

Sum of 1 to 5: 1 + 2 + 3 + 4 + 5 = 15

*/


function sumOfNaturalNumber(num) {
    let sum = 0;
    for (let index = 1; index <= num; index++) {
        sum += index;
    }
    return sum;
}

console.log(`Sum of all Digit Without Formula = ${sumOfNaturalNumber(5)}`)

function sumOfNaturalNumberWithFormula(num) {
    return num * (num + 1) / 2;
}
console.log(`Sum of all Numbers with formula = ${sumOfNaturalNumberWithFormula(5)}`)



/* 
Que2: Sum of digits of a number

1234 = 1+2+3+4 => 10

1st Way - Division Method with Remainder

*/

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum
}

console.log(`Sum Of Digits ${sumOfDigits(1234)}`)


/* 
Que3: Count the number of digits of a number

3452 = 4

// Division Method 

*/

function countTheDigits(num) {
    // For Negative num
    num = Math.abs(num)
    let count = 0
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0)
        return count;
}

console.log(`Count Digits: ${countTheDigits(-12356)}`)
