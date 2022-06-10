/*

7 KYU kata

https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/javascript


*/

function barista(coffees){
    let sum = 0;
    let coffeesSorted = coffees.sort(function(a, b){
      return a - b
    });
    coffeesSorted.reduce((previousValue, currentValue, currentIndex) => {
      let waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
      sum += waitTime;
      return waitTime;
    }, 0);
    return sum;
}


// OR SHORTER VERSION

function barista(coffees){
    coffees.sort((a,b)=> a-b)
    return coffees.reduce((acc, cookTime, i) => acc + cookTime * (coffees.length-i) + 2*i, 0)
}

