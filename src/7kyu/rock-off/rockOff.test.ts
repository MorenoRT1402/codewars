import { solve } from "./rockOff";

describe('Rock Off', () => {
    it('should returns correct result', () => {
        expect(solve([47, 7, 2], [47, 7, 2])).toBe('0, 0: that looks like a "draw"! Rock on!');
        expect(solve([47, 67, 22], [26, 47, 12])).toBe('3, 0: Alice made "Kurt" proud!');
        expect(solve([25, 50, 22], [34, 49, 50])).toBe('1, 2: Bob made "Jeff" proud!');
    })
})
