import { oddest } from "./oddest";

describe("Odder than the rest -2", () => {
    it("should return the oddest", () => {
        expect(oddest([1,2])).toEqual(1);
        expect(oddest([1,3])).toEqual(3);
        expect(oddest([1,5])).toEqual(5);
    });

    // it("should return the most 'odd' number for random tests", () => {
    //     expect(oddest([51, -51, 81, -81])).toBe(51);
    //     expect(oddest([-5, -10, 3, 7, -9])).toBe(7);
    //     expect(oddest([10, 20, -30, -40, -50, -70])).toBe(-30);
    // });
})