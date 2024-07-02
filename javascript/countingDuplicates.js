// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// way to approach:
// 1. using map/foreach to create an array or obj which counts letters and their occurence
// 2. return quantity (?) and the most occurences

function duplicateCount(text){
  // 1. str to an array
  text = text.split('');
  let object = {};

  // for(let letter of text){
  //   if(!object[letter]){
  //     object[letter] = 1;
  //   }
  //   else {
  //     object[letter]++;
  //   }
  // }

  let countDuplicates = 0;
  let letterMax = '';
  text.map((letter) => {
    letter = letter.toLowerCase();
    if(!object[letter]) {
      object[letter] = 1;
    }
    else {
      object[letter]++;
      countDuplicates++;
      indexMax = object[letter] > object[letterMax] ? letter : letterMax;
    }
  })

  let answer = [Object.keys(object).length, letterMax];

  return countDuplicates;
  if (!letterMax) return answer[0]
  return answer;

}

console.log(duplicateCount(""))
console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("Indivisibility"))
console.log(duplicateCount("Indivisibilities"))