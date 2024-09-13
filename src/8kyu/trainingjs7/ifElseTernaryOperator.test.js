const { describe } = require('node:test');
const saleHotDogs = require('./ifElseTernaryOperator');

describe('Training Js 7 - If...Else & Ternary Operator', () => {
    it('Number must be positive', () => {
        expect(() => saleHotDogs(-1)).toThrow('Number must be positive');
    });
    it('Solutions', () => {
        expect(saleHotDogs(4)).toBe(4*100);
        expect(saleHotDogs(5)).toBe(5*95);
        expect(saleHotDogs(9)).toBe(9*95);
        expect(saleHotDogs(10)).toBe(900);
        expect(saleHotDogs(36)).toBe(36*90);
    })
})