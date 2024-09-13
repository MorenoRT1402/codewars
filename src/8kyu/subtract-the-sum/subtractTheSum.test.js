const subtractSum = require('./subtractTheSum');

describe("Subtract The Sum", () => {

    it("Input Out Of Range", () => {
        expect(subtractSum(9)).toBe('Input must be between 9 and 10001');
        expect(subtractSum(10001)).toBe('Input must be between 9 and 10001');
    });

    it("Valid Inputs", () => {
        expect(subtractSum(10)).toBe('apple');
        expect(subtractSum(10000)).toBe('apple');
    });

    it("Solution", () => {
        expect(subtractSum(20)).toBe('apple');
        expect(subtractSum(999)).toBe('apple');
    });
});
