const none = require('./trueForNone');
const { describe } = require("node:test");

describe('Enumerable Magic #4 - True for None?', () => {
    it('Params Required', () => {
        expect(() => none(null, () => {})).toThrow('expected (Array, function)');
        expect(() => none({}, () => {})).toThrow('expected (Array, function)');
        expect(() => none(1, () => {})).toThrow('expected (Array, function)');
        expect(() => none(null, true)).toThrow('expected (Array, function)');
    })
    it('Solution', () => {
        expect(none([1,2,3,4,5],function(item){ return item > 5 })).toBe(true);
        expect(none([1,2,3,4,5],function(item){ return item > 4 })).toBe(false);
    })
})