function factorial(n) {
  let result = 1;
  while (n) {
    if (n == 0 || n == 1) break;
    result = result * n;
    n = n - 1;
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
