/*
Palindrome -> Reverse is same
*/


/*
Method01 - Reverse the Num with Division and remainder
*/

let isPalindrome1 =  (num) => {
    let reverseNum = 0
    let copyNum = num
    while (copyNum > 0) {
        const lastDigit = copyNum % 10;
        console.log(`CopyNum:${copyNum}, ReverseNum: ${reverseNum}, LastDigit: ${lastDigit}`)

        reverseNum = reverseNum * 10 + lastDigit
        console.log(`CopyNum:${copyNum}, ReverseNum: ${reverseNum}, LastDigit: ${lastDigit}`)

        copyNum = Math.floor(copyNum / 10)
        console.log(`CopyNum:${copyNum}, ReverseNum: ${reverseNum}, LastDigit: ${lastDigit}`)
    }

    return num === reverseNum;

}

console.log(`Palindrome1: ${isPalindrome1(122)}`)

// console.log(isPalindrome1(121))