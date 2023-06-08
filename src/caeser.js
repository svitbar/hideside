const caesarShift = (text, shift) => {
  if (typeof(shift) !== 'number') {
    throw new Error('Shift value should be a number.');
  }
  if (shift < -25 || shift > 25) {
    throw new Error('Shift value should be between -25 and 25.');
  }

  const chars = text.split('');

  const shiftedCh = chars.map((char) => {
    if (!char.match(/[a-zA-Z]/)) {
      throw new Error('It should be a string using Latin alphabet');
    }
    const charCode = char.charCodeAt() - 97;

    const shiftedCharCode = (charCode + shift) % 26;

    const shiftedChar = String.fromCharCode(shiftedCharCode + 97);

    return shiftedChar;
  });

  const shiftedText = shiftedCh.join('');

  return shiftedText;
};

console.log(caesarShift('hello', -13));

module.exports = caesarShift;
