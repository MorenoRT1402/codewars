import { testit } from "./testit"

//return s.toUpperCase() ?

describe("Thinking & Testing : Something capitalized", () => {
    it("should return correct", () => {
        expect(testit("")).toEqual("");
        expect(testit("a")).toEqual("A");
        expect(testit("b")).toEqual("B");
        expect(testit("a a")).toEqual("A A");
        expect(testit("a b")).toEqual("A B");
        expect(testit("a b c")).toEqual("A B C");
    });
    it('should return correct in hiden tests', () => {
        expect(testit("aa")).toEqual("aA");
        expect(testit("ab ab")).toEqual("aB aB");
    })
})