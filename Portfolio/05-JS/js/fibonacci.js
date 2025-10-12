/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};

var fibonacci = function () {
  "use strict";
  var n = Number(document.getElementById("num").value);
  var val = f(n);
  document.getElementById("fibonacciLbl").innerHTML = val;
}

function f(n) {
  var value;
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    //TODO: Implement the fibonacci function here!
    if(n < 0) {
      return "No se admiten negativos"
    } else if (n === 0) {
      value = 0;
      memo[n] = value;
      return value;
    } else if (n === 1) {
      value = 1;
      memo[n] = value;
      return value;
    }

    var prev = 0;
    var value = 1;

    for (let i = 2; i <= n; i++) {
      console.log("Entre al for");
      var sig = prev + value;
      prev = value;
      value = sig;
    }
    memo[n] = value;
  }
  return value;
}
console.log(f(0));
