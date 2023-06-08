const {encrypt, decrypt, publicKey, privateKey} = require('../src/rsa');

describe('RSA encryption and decryption', () => {
  const message = 'Hello, World!';

  it('should encrypt and decrypt a message correctly', () => {
    const encrypted = encrypt(message, publicKey);
    const decrypted = decrypt(encrypted, privateKey);
    expect(decrypted).toEqual(message);
  });

  it('should not decrypt a message with an incorrect private key', () => {
    const anotherPrivateKey = {n: privateKey.n, d: privateKey.d + 1};
    const encrypted = encrypt(message, publicKey);
    const decrypted = decrypt(encrypted, anotherPrivateKey);
    expect(decrypted).not.toEqual(message);
  });
});
