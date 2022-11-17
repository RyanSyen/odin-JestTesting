const { capitalize, reverse, calculator, analyzeArr } = require('./testFunctions');

test('capitalize "hi"', () => {
    expect(capitalize('hi')).toBe('Hi');
});

test('reverse "hi"', () => {
    expect(reverse('hi')).toBe('ih');
});

test('calculate "1+2"', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculate "2-1"', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test('calculate "2/1"', () => {
    expect(calculator.divide(2, 1)).toBe(2);
});

test('calculate "2*1"', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
});

const arr = [1, 8, 3, 4, 2, 6];
const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};

test('analyze arr', () => {
    expect(analyzeArr(arr)).toStrictEqual(object);
});