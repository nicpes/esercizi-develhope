function memoize(fn) {
  let cache = {};
  return (...args) => {
    let i = args[0];
    if (i in cache) {
      console.log("Fetching from cache for", i);
      return cache[i];
    } else {
      console.log("Calculating result for", i);
      let result = fn(i);
      cache[i] = result;
      return result;
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
