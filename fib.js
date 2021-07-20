// NORMAL FUNCTION

const fib = (n) => {
  if (n <= 2) return 1;
  else return fib(n - 1) + fib(n - 2);
};

// HANDLING MORE COMPLEX NUMBERS

/*---------- Memoization----------*/
// A javascript object, which will be a hashmap
// Hashmap object consisting of the following: {Keys: values}
// Keys are the args of the functions
// Values are the return values of the corrosponding keys

const advancedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  let fibRes = advancedFib(n - 1, memo) + advancedFib(n - 2, memo);
  memo[n] = fibRes;
  return memo[n];
};

console.log("advanced:::", advancedFib(500));
// console.log("normal:::", fib(50));
