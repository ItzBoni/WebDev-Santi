/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

let getPrimeFactors = function () {
  "use strict";

  function isPrime(n) {
    let i;

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  //Function that returns an array of the prime factors of a number from lowest to largest
  function arrayOfPrimes(n){
    let i,
    sequence = [];
    for (i=2; i <= n; i++){
      if ((n%i === 0) && isPrime(i)){
        sequence.push(i);
      }
    } 
    return sequence
  }
  
  //I edited the function to accept only the things in the text field. (Also the HTML so it gets read as a number)
  let num = Number(document.getElementById('num').value);

  let result = arrayOfPrimes(num);

  document.getElementById('pf').innerHTML = result;
};
//Added the call to the function in the 

// the prime factors for this number are: [ 2, 3, 