const caesarShift = require('../src/caeser');

const error = {
  range: 'Shift value should be between -25 and 25.',
  string: 'It should be a string using Latin alphabet',
  number: 'Shift value should be a number.',
};

describe('caesar cipher', () => {
  it('positive rot', () => {
    expect(caesarShift('hello', 13)).toBe('uryyb');
  });

  it('negative rot', () => {
    expect(caesarShift('hello', -13)).toBe('[X__b');
  });

  it('throws an error if the shift value is less than -25', () => {
    expect(() => caesarShift('hey', -30)).toThrowError(error.range);
  });

  it('throws an error if the shift value is greater than 25', () => {
    expect(() => caesarShift('hey', 30)).toThrowError(error.range);
    expect(() => caesarShift('h', 78)).toThrowError(error.range);
  });

  it('throws an error if non-Latin alphabet characters', () => {
    expect(() => caesarShift('привіт', 12)).toThrow(error.string);
    expect(() => caesarShift('안녕하세요', 2)).toThrow(error.string);
  });

  it('throws an error if shift is not a number', () => {
    expect(() => caesarShift('sleep', '12')).toThrow(error.number);
    expect(() => caesarShift('always', '!')).toThrow(error.number);
  });
});
