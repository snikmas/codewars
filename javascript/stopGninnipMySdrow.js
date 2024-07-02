// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// // "This is another test" --> "This is rehtona test"
// function spinWords(string){
//   //TODO Have fun :)
//   let stringArray = string.split(' ');
//   for (let indexArr = 0; indexArr < stringArray.length; indexArr++) {
//     if (stringArray[indexArr].length > 4) {
//       stringArray[indexArr]  = stringArray[indexArr].split('').reverse().join('');
//     }
//   }
//   console.log(stringArray.join(' '));
// }

// function spinWords_2(string) {
//   return string.split(' ').map(function(word) {
//     return (word.length > 4 ? word.split('').reverse().join('') : word)
//   }).join(' ');
// };


function spinWords_3(string) {

  //string.split(' ').map((element) => element = element.length < 5 ? element : element.split('').reverse().join(''));
  //string.split(' ').map((element) => element = element.length < 5 ? element : element.split('').reverse().join(''));
  //  string.forEach((words) => words = words.length < 5 ? words : words.words.split('').map(letters => letters.reverse().join('')));
  
  string = string.split(' ');
  for (let word = 0; word < string.length; word++){
    if (string[word].length > 4){
      string[word] = string[word].split('').map((string[word] => reverse()));
    }
  }
  console.log(string);
}

function go(string) {
  string = string.split(' ').map((word) => {
    if (word.length > 4){
      word = word.split('').reverse().join('');
      return word;
    }
    else return word
  })
  return string.join(' ');
}


return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');

//srring = string.split('').forEach((word.split('')) => {word = word.length > 4 ? word.reverse() : word} return word


//1. split string to words
//2. check length
//3. a word = 
//3.1. if it is true: nochanges; otherwise:
//4. split again and reverse it. and join again




(spinWords_3('I like really doggy Poemo'));




