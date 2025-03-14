const { sum } = require('../../src/example');

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(1, -2)).toBe(-1);
  });
});
