/*
    Fibonacci = denoted F(n)
    Each number is the sum of the two preceding ones, 
    F(1) = 1, F(2) = 2
    F(n) = F(n-1) + F(n-2), for n > 1

    Calculate F(n)
*/




let fibNum = (num) => {
    let prev = 0, curr = 0, next;
    
    if (num < 0) {
        return num
    }

    for (let i = 0; i <= num; i++) {
        next = prev + curr;
        console.log(`Prev: ${prev}, Current: ${curr}, Next: ${next}`)
        
        prev = curr;
        console.log(`Prev: ${prev}, Current: ${curr}, Next: ${next}`)
        
        curr = next
        console.log(`Prev: ${prev}, Current: ${curr}, Next: ${next}`)
    }
    return next
}

console.log(`Fib Num: ${fibNum(5)}`)
// console.log(fibNum(5))