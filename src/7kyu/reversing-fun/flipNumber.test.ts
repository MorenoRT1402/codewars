import { flipNumber } from "./flipNumber";

describe("Reversing Fun", () => {
    it("should flip by steps", () => {
        expect(flipNumber("012")).toBe("201");
        expect(flipNumber("012345")).toBe("504132");
        expect(flipNumber("0123456789")).toBe("9081726354");
    })
})