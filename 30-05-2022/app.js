/*

7 KYU kata

https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/javascript

This question is a variation on the Arithmetic Progression kata

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

*/

function missingNo(num) {
  let n = num.length;
  let sum = n * (n + 1) / 2;
  for (let i = 0; i < n; i++) {
    sum -= num[i];
  }
  return sum;
}

// OR 

function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0)
}