// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  //1. find an index of - symbol 
  //2. toUpper an index + 1
  //3. remove -, can use ''
  str = str.split('');
  for (letter in str){
    if (str[letter] == '_' || str[letter] == '-'){
      str[Number(letter) + 1] = str[Number(letter) + 1].toUpperCase();
    str.splice(Number(letter), 1);
      }
  }
  str = str.join('');
  return str;
}

console.log(toCamelCase("the-stealth-warrior"));


function camelCase(str){
 str = str.split('');
 for (let i = 0; i < str.length; i++) {
  if (!str[i].match(/[a-z]/i)){
    str[i + 1] = str[i + 1].toUpperCase();
  }};
  return str.join('').replace(/[-_]/g,'');
}


camelCase("The_Stealth-Warrior");
