

const {strLength, reverseString, Calculator, capitalize } = require('./strLength');



// ====================================test strLength========================
test('returns the correct length', () => {
 
  expect(strLength('hello')).toBe(5);
});


test('min length should be less then 10 characters', () => {
 
  expect(strLength('hello123')).toBeLessThan(10);
});

// ====================================test reverseString========================
test('function must return reverse string ', () => {
 
  expect(reverseString('12345')).toBe('54321');
});
// ====================================test calculator========================

 
  describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test('should return the sum of two numbers', () => {
      const result = calculator.add(1, 2);
      expect(result).toBe(3);
    });
  });

  describe('subtract()', () => {
    test('should return the difference between two numbers', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });
  });

  describe('multiply()', () => {
    test('should return the product of two numbers', () => {
      const result = calculator.multiply(2, 4);
      expect(result).toBe(8);
    });
  });

  describe('divide()', () => {
    test('should return the quotient of two numbers', () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });
  });
});
//====================================test capitalize===========================

test(' the first character should be in capital letter ', () => {
  const input = 'hello';
  const expectedOutput = 'Hello';
  const result = capitalize(input);
  expect(result).toBe(expectedOutput);
});