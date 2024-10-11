import { errors, givenNthValue, modes } from "./givenNth";

describe('Required Data II (Easy One)', () => {
    it('should validate', () => {
        let arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31, 34, - 16, -16, 8 , 8]; 
        expect(givenNthValue(arr, 13, modes.Max)).toBe(errors.kHigherThanArr);
        const arrWithString = [3, 3, -1, 10, 6, 8, -5, 'Yes', 4, 22, 31];
        expect(givenNthValue(arrWithString, 4, modes.Max)).toBe(errors.invalidEntryList);
        expect(givenNthValue([], 4, modes.Max)).toBe(errors.emptyArray);
        arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31];
        expect(givenNthValue(arr, 2, 'mix')).toBe(errors.invalidMode);

    })
    it('should return k position in arranged array without duplicates', () => {
        let arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31, 34, - 16, -16, 8 , 8];  
        expect(givenNthValue(arr, 5, modes.Min)).toBe(4);
        arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31, 34, - 16, -16, 8 , 8]; 
        expect(givenNthValue(arr, 6, modes.Max)).toBe(6);
        arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31];
        expect(givenNthValue(arr, 2, 'MaX')).toBe(22);
    })
})

