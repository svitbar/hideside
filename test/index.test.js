const sum = require('../src/index.js');

describe('Sum:', () => {
  it('should return a sum', () => {
    expect(sum(10, 2)).toBe(12);
  });
});
