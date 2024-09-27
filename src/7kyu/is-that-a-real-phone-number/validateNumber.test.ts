import { invalidString, validateNumber, validString } from "./validateNumber";

describe('Is that a real phone number? (British version)', () => {
    const chance = validString;
    it('should verify if is a real number', () => {
        expect(validateNumber('07454876120')).toBe(chance);
        expect(validateNumber('0754876120')).toBe(invalidString);
        expect(validateNumber('0745-487-61-20')).toBe(chance);
        expect(validateNumber('+447535514555')).toBe(chance);

    })
})