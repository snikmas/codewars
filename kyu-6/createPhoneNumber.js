/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// 1. use regex
// 2. return `({list[0], list})`... too long
// 3. let number = [] for (int i = 0; i < list.length; i++) -> if i == 0 -> add... too long
// 4. input symbols inside the array! -> use splice(start, position, element)

// my first try. I think it can be solved much faster using regex
function createPhoneNumber(numbers){
  numbers.splice(-4, 0, '-');
  numbers.splice(3, 0, ') ');
  numbers.unshift('(');

  return(numbers.join(''));
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


// other solutions: interesting!

// person A, like it

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// person B, like it because he uses reduce
function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}