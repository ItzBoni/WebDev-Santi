/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

var sieve = function () {
  "use strict";
    function addToSieve(n) {
    var array = []
    var boolArray = new Array(n).fill(false);
    let i;
    for (i = 2; i <= Math.sqrt(n); i++) {
      let j;
      for (j = i+i; j < n; j+=i){
        boolArray[j] = true;
      }
    }
    
    for(i = 2; i < boolArray.length; i++){
      if (!boolArray[i]){
        array.push(i);
      }
    }

    return array
  }

  let num = Number(document.getElementById("num").value);
  let primes = addToSieve(num);
  document.getElementById("primes").innerHTML = primes;

  console.log(primes)
  // TODO: Implement the sieve of eratosthenes algorithm to find all the prime numbers under the given number.
};

