// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 1. split it and foreach
// 2. replace [0] and lenght - 1 letter
// 3. add ay and join it
//


function pigIt(str) {
  str = str.split(' ').map((word) => {
    word = word.split('');
    let temp = word[0];
    word += temp;
    return word
  })
  return str;
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))