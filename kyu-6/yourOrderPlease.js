/*
0. if 0 words -> return 0
1. divide by words
2. we can compare numbers using bubble sort or etc: use regex to find numbers
*/


// my solution, 1st try 
function order(array){
  array = array.split(' ');
  if (array.length == 0){
    return 0;
  }
  else {
    let temp;
    for(let i = 0; i < array.length - 1; i++){
      for(let ii = i + 1; ii < array.length; ii++){
        if (array[i].match(/[1-9]/) > array[ii].match(/[1-9]/)) // or (/\d/) <- find a digit
          {
            temp = array[i];
            array[i] = array[ii];
            array[ii] = temp;
          }
        }
    }
  }

  return array.join(' ');
}


console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))


// another person's solution is much clearer
function orderTwo(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' '); 
}