
/*
Compute the prime factors of a given natural number.

A prime number is only evenly divisible by itself and 1.

Note that 1 is not a prime number.

Example
What are the prime factors of 60?

Our first divisor is 2. 2 goes into 60, leaving 30.
2 goes into 30, leaving 15.
2 doesn't go cleanly into 15. So let's move on to our next divisor, 3.
3 goes cleanly into 15, leaving 5.
3 does not go cleanly into 5. The next possible factor is 4.
4 does not go cleanly into 5. The next possible factor is 5.
5 does go cleanly into 5.
We're left only with 1, so now, we're done.
Our successful divisors in that computation represent the list of prime factors of 60: 2, 2, 3, and 5.

You can check this yourself:

2 _ 2 _ 3 * 5
= 4 * 15
= 60
Success!



The code you provided is checking if a number is prime or not, rather than finding all the prime factors of a given number. Let's go step by step to correct your code:

Initialize an empty array to hold the factors.
Start with the smallest prime factor, which is 2.
Use a while loop to divide the number by this factor as long as it's divisible.
If the number is no longer divisible by this factor, increment the factor.
Continue this process until the number is reduced to 1.
Return the list of factors.
Here's how you can modify your skeleton code:

export const primeFactors = (num) => {
  let factors = []; // This will store our factors
  let divisor = 2; // We start with the smallest prime factor

  while (num > 1) { // Continue until we've completely factored the number
    while (num % divisor === 0) { // While `num` is divisible by `divisor`
      factors.push(divisor); // Add `divisor` to our list of factors
      num /= divisor; // Divide `num` by `divisor`
    }
    divisor++; // Move on to the next potential factor
  }

  return factors;
};

console.log(primeFactors(60)); // Should log [2, 2, 3, 5] for example
This code will correctly compute and return an array of prime factors for a given number.

Make sure that you replace your current implementation with this corrected version and run your lab tests again on codedamn. It should now pass if everything else in your lab environment is set up correctly.


*/

export const primeFactors = (num) => {
 
    let factors = []
    let divisor = 2
    while (num !== 1) {
     if (num % divisor === 0) {
       factors.push(divisor)
       num /= divisor
       divisor = 2
     } else {
       divisor += 1;
     }
    }
   
    return factors;
   
   };
   
   console.log(primeFactors(11))
   