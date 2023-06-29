const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const Calculator = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
const analyzeArray = require('./analyzeArray.js');

it('works', () => {
    expect(1).toBe(1);
});

//capitalization
it('capitalize', () => {
    expect(capitalize("test string")).toBe("Test string");
});

//reversing a string
it('reverse string', () => {
    expect(reverseString("test string")).toBe("gnirts tset");
});

//calculator functions
it('calculator add', () => {
    expect(Calculator.add(39, 51)).toBe(90);
});

it('calculator subtract', () => {
    expect(Calculator.subtract(600, 45)).toBe(555);
});

it('calculator multiply', () => {
    expect(Calculator.multiply(70, 11)).toBe(770);
});

it('calculator divide', () => {
    expect(Calculator.divide(22, .5)).toBe(44);
});

//caesar cipher
it('wraps z to a', () => {
    expect(caesarCipher("z", 1)).toBe("a");
});

it('doesnt shift spaces or punctuation', () => {
    expect(caesarCipher("a b!", 1)).toBe("b c!");
});

it('doesnt change cases', () => {
    expect(caesarCipher("AbC", 1)).toBe("BcD");
});

//analyzeArray
it('average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
})

it('minimum', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it('maximum', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it('length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
})