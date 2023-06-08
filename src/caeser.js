const caesarShift = (text, shift) => {
  const chars = text.split('');

  const shiftedCh = chars.map((char) => {
    const charCode = char.charCodeAt() - 97;

    const shiftedCharCode = (charCode + shift) % 26;

    const shiftedChar = String.fromCharCode(shiftedCharCode + 97);

    return shiftedChar;
  });

  const shiftedText = shiftedCh.join('');

  return shiftedText;
};

module.exports = caesarShift;
