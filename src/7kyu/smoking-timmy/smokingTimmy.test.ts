import { startSmoking } from "./smokingTimmy";

describe("Smoking Timmy", () => {
    it('should calculate correctly', () => {
        expect(startSmoking(0,1)).toBe(22);
        expect(startSmoking(1,0)).toBe(224);
        expect(startSmoking(1,1)).toBe(247);
        expect(startSmoking(10,2)).toBe(2294);
    })
})