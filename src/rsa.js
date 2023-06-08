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
    p = genRandomInt(10, 100);
  } while (!isPrime(p));

  do {
    q = genRandomInt(10, 1000);
  } while (!isPrime(q) || p === q);

  return {p, q};
};

const gcd = (e, z) => {
  if (z === 0) {
    return e;
  }

  return gcd(z, e % z);
};

const modInverse = (a, m) => {
  let [m0, x, y] = [m, 1, 0];
  if (m === 1) {
    return 0;
  }
  while (a > 1) {
    const q = Math.floor(a / m);
    [a, m] = [m, a % m];
    [x, y] = [y, x - q * y];
  }
  if (x < 0) {
    x += m0;
  }
  return x;
};

const checkExp = (z) => {
  let e = 2;
  while (e < z) {
    if (gcd(e, z) === 1) {
      break;
    }
    e++;
  }

  return e;
};

const primes = getPrimeNumber();
const n = primes.p * primes.q;
const z = (primes.p - 1) * (primes.q - 1);
const e = checkExp(z);
const d = modInverse(e, z);

const privateKey = {n, d};
const publicKey = {n, e};

const encrypt = (message, publicKey) => {
  const {e, n} = publicKey;
  let ciphertext = '';
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const encryptedCharCode = BigInt(charCode) ** BigInt(e) % BigInt(n);
    ciphertext += String.fromCharCode(Number(encryptedCharCode));
  }
  return ciphertext;
};

const decrypt = (ciphertext, privateKey) => {
  const {d, n} = privateKey;
  let message = '';
  for (let i = 0; i < ciphertext.length; i++) {
    const charCode = ciphertext.charCodeAt(i);
    const decryptedCharCode = BigInt(charCode) ** BigInt(d) % BigInt(n);
    message += String.fromCharCode(Number(decryptedCharCode));
  }
  return message;
};

module.exports = {encrypt, decrypt, publicKey, privateKey};
