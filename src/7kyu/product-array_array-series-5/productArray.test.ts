import { invalidSizeMessage, onlyPositiveNumbersMessage, productArray } from "./productArray";

describe("Product Array (Array Series #5)", () => {
    it("Validation", () => {
        expect(() => productArray([1])).toThrow(invalidSizeMessage);
        expect(() => productArray([1, -2])).toThrow(onlyPositiveNumbersMessage);
    });
    it("should return prod of all elements except prod[i]", () => {
        expect(productArray([12,20])).toEqual([20,12]);
        expect(productArray([3, 27, 4, 2])).toEqual([216, 24, 162, 324]);
        expect(productArray([13, 10, 5, 2, 9])).toEqual([900, 1170, 2340, 5850, 1300]);
        expect(productArray([16, 17, 4, 3, 5, 2])).toEqual([2040, 1920, 8160, 10880, 6528, 16320])
    });
})