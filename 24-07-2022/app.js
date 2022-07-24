/*

8 KYU kata

https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

*/

function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
      return `Hello, World!`;
    } else {
      return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
}


// OR


const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;