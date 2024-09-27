import { anyOdd } from "./anyOdd";

describe('Any Odd', () => {
    it('should return correct byte', () => {
        expect(anyOdd(2863311530)).toBe(1);
        expect(anyOdd(128)).toBe(1);
        expect(anyOdd(131)).toBe(1);
        expect(anyOdd(2)).toBe(1);
        expect(anyOdd(24082)).toBe(1);
        expect(anyOdd(0)).toBe(0);
        expect(anyOdd(85)).toBe(0);
        expect(anyOdd(1024)).toBe(0);
        expect(anyOdd(1)).toBe(0);
        expect(anyOdd(1365)).toBe(0);
    })
})