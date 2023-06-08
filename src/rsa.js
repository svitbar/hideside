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
console.log(`n: ${n}`);

const z = (primes.p - 1) * (primes.q - 1);
console.log(`z: ${z}`);

const e = 65537;

const gcd = (e, z) => {
  if (z === 0) {
    return e;
  }

  return gcd(z, e % z);
};

console.log(gcd(e, z));

const modInverse = (a, m) => {
  let [m0, x, y] = [m, 1, 0];
  if (m === 1) {
    return 0;
  }
  while (a > 1) {
    const q = Math.floor(a / m);
    [a, m] = [m, a % m];
    [x, y] = [y - q * x, x];
  }
  if (x < 0) {
    x += m0;
  }
  return x;
};

const d = modInverse(e, z);

console.log(`d: ${d}`);
