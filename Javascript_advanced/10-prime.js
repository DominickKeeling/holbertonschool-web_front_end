function prime(num) {
  if (num <= 1) return false;
  if (num === 2) return false;
  if (num % 2 === 0) return false;
  let sqrt = Math.sqrt(num);
  for(let i = 3; i <= sqrt; i += 2) {
    if(num % i === 0) return false;
  }
  return true;
}

function countPrimeNumbers() {
  let count = 0;
  
  for(let i = 2; i <= 100; i++) {
    if(prime(i)) count++;
  }
  return count;
}

const startTime = performance.now();

for(let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const endTime = performance.now();

const executionTime = endTime - startTime;

console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`)
