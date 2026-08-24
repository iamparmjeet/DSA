/*


Sol -> With Addition

[3,0,1] = 3+0+1 = 4
[0,1,2,3] = 0+1+2+3 = 6
6-4 = 2 [Missing Number]


*/

const missingNumber = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return nums.length * (nums.length + 1) / 2 - sum;
}

console.log(`MissingNumber: ${missingNumber(1, 2)}`)

// With Reduce

const missingNumber2 = (numbers) => {
    return numbers.length * (numbers.length + 1) / 2 - numbers.reduce((acc, num) => num + acc);
}

console.log(`MisingNumReduce: ${missingNumber2(1,2,3,4)}`)