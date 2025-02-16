// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1, 1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL)

// recalling fibo:
// first = 0;
// second = arr[0]
// for(int i = 0; i < n; i++){
//  int next = second + first 
//  first = second
//  second = next
// }


function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

// hard code
function tribonacci(signature,n){
  //your code here
  if (n <= 3) {
    return signature.slice(0, n);
  }

  let first = signature[0];
  let second = signature[1];
  let third = signature[2];

  for(let i = 0; i <= n - 4; i++){
    let next = first + second + third;
    signature.push(next)
    first = second;
    second = third;
    third = next;
  }

  return signature;
}

console.log(tribonacci([1,1,1], 10))
// tribonacci([ [0,0,1], 10])
// tribonacci([ [0,1,1], 10])
// tribonacci([ [1,0,0], 10])
// tribonacci([ [0,0,0], 10])
// tribonacci([ [1,2,3], 10])
// tribonacci([ [3,2,1], 10])
tribonacci([1,1,1],  1)
// tribonacci([[300,200,100], 0])