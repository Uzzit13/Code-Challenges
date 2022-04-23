/*

https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

function binToDec(bin){
    return bin.split("").reverse().reduce((total, val, index)=>val==="1" ? total + 2**index:total, 0)
}

// SHORTER VERSION

function binToDec(bin){
    return parseInt(bin,2);
}