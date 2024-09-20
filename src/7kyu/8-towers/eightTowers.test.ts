import { towerCombination } from "./eightTowers";

describe('8 Towers', () => {
    it('should return 0 if negative input', () => {
        expect(towerCombination(-1)).toBe(1n);
    })
    it('should return valid solution', () => {
        expect(towerCombination(0)).toBe(1n);
        expect(towerCombination(1)).toBe(1n);
        expect(towerCombination(2)).toBe(2n);
        expect(towerCombination(3)).toBe(6n);
        expect(towerCombination(8)).toBe(40320n);  // Real chessboard
    })
})