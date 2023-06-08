import {encrypt, decrypt, privateKey, publicKey} from '../../src/rsa';

const encrBtn = document.getElementById('encryptBtn');
const decrBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const plaintextInput = document.getElementById('plaintext');
const resultTextarea = document.getElementById('result');
const algorithmSelect = document.getElementById('algorithm');
const caesarOptions = document.getElementById('caesar-options');
const shiftInput = document.getElementById('shift');
const errorMessAlph = document.getElementById('error-mess-alph');
const errorMessNum = document.getElementById('error-mess-num');

plaintextInput.addEventListener('input', () => {
  const plaintext = plaintextInput.value;
  const regex = /^[a-zA-Z]+$/;

  if (!regex.test(plaintext)) {
    errorMessAlph.style.display = 'block';
    plaintextInput.value = plaintext.replace(/[^a-zA-Z]+/g, '');
  } else {
    errorMessAlph.style.display = 'none';
  }
});

algorithmSelect.addEventListener('change', () => {
  const algorithm = algorithmSelect.value;

  if (algorithm === 'caesar') {
    caesarOptions.style.display = 'block';
  } else {
    caesarOptions.style.display = 'none';
  }
});

encrBtn.addEventListener('click', () => {
  const plaintext = plaintextInput.value;
  const algorithm = algorithmSelect.value;
  let result = '';

  if (algorithm === 'rsa') {
    result = encrypt(plaintext, publicKey);
  } else if (algorithm === 'caesar') {
    const shift = parseInt(shiftInput.value);

    if (isNaN(shift)) {
      errorMessNum.style.display = 'block';
      plaintextInput.value = plaintext.replace(/[^a-zA-Z]+/g, '');
    } else {
      errorMessNum.style.display = 'none';
    }
    result = plaintext + ' caeser';
  }
  resultTextarea.value = result;
});

decrBtn.addEventListener('click', () => {
  const plaintext = plaintextInput.value;
  const algorithm = algorithmSelect.value;
  let result = '';

  if (algorithm === 'rsa') {
    result = plaintext + ' RSA decryption!';
  } else if (algorithm === 'caesar') {
    const shift = parseInt(shiftInput.value);

    if (isNaN(shift)) {
      errorMessNum.style.display = 'block';
      plaintextInput.value = plaintext.replace(/[^a-zA-Z]+/g, '');
    } else {
      errorMessNum.style.display = 'none';
    }
    result = plaintext + ' caeser decryption';
  }
  resultTextarea.value = result;
});

copyBtn.addEventListener('click', () => {
  console.log('copyBtn');
});
