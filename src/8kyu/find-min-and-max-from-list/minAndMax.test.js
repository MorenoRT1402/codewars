const { describe } = require('node:test');
const { min, max } = require('./minAndMaxFromList');

describe('Find Maximum and Minimum Values of a List', () => {
    it('Input must be an array', () => {
        expect(() => min(1)).toThrow('Input must be a number array');
        expect(() => min(['foo', 'bar'])).toThrow('Input must be a number array');
        expect(() => max(100)).toThrow('Input must be a number array');
        expect(() => max(['john', 'doe'])).toThrow('Input must be a number array');
    })
    it('Solution', () => {
        expect(min([14, 2, 99])).toBe(2);
        expect(max([14, 2, 99])).toBe(99);
    })
})