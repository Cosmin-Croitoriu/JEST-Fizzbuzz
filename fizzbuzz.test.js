const fizzBuzz = require('./fizzbuzz');

test('fizzbuzz returns 1 when given 1', () => {
 const num = 1;
 expect(fizzBuzz(num)).toBe(1);
});

test("fizzbuzz returns Fizz when given 3", () => {
    const num = 3;
    expect(fizzBuzz(num)).toBe('Fizz');
});

test("fizzbuzz returns Buzz when given 5", () => {
    const num = 5;
    expect(fizzBuzz(num)).toBe('Buzz');
});

test("fizzbuzz returns Fizzbuzz when given 15", () => {
    const num = 15;
    expect(fizzBuzz(num)).toBe('Fizzbuzz');
});

