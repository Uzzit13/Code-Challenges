/*

https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
  }