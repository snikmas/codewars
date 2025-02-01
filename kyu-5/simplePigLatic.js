// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 1. split a str to an array of words and map => for for every word
// 2. (0) if not a symbol: do operations; else return symbol
// 2. first letter push to the end; splice + push?
// 3. add ay


function pigIt(str) {
  str = str.split(' ').map(word => {
    if (word[0].match(/[A-Za-z]/)) {
      word = word.slice(1) + word[0] + 'ay';
      return word; // return from the map
      }
    else {
      return word
      }    
    }
  )
  return str.join(' ') // return from the function
}

console.log(pigIt('Pig latin is cool !'))
console.log(pigIt('?'))
// pigIt('This is my string')