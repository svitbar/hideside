const genRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getPrimeNumber = () => {
  let p;
  let q;
  do {
    p = genRandomInt(10, 1000);
  } while (!isPrime(p));

  do {
    q = genRandomInt(10, 1000);
  } while (!isPrime(q) || p === q);

  return {p, q};
};


const primes = getPrimeNumber();
console.log(primes);

const n = primes.p * primes.q;
console.log(n);
