/*

8 KYU kata

https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function find_average(array) {
    let sum = array.reduce((acc,c) => acc + c, 0)
    return array.length > 0 ? sum / array.length : 0
}

// OR

let find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}