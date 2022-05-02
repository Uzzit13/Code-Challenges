/*

7 KYU kata

https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// ANOTHER OPTION


function reverseWords(str) {
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}
