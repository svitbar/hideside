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

const num = genRandomInt(10, 1000);
console.log(num);
console.log(isPrime(num));
