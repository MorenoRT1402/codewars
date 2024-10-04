import { invalidLengthMessage, lengths, switchLights } from "./switchLights";

describe("Simple Fun #39: Switch Lights", () => {
    const fillArray = (length:number) :number[] => {
        let array:number[] = [];
        for (let i = 0; i < length; i++) {
            array.push(0);  
        }
        return array;
    }

    it("It should have a certain length", () => {
        expect(() => switchLights([])).toThrow(invalidLengthMessage);
        const smallLength = fillArray(lengths[0] -1);
        expect(() => switchLights(smallLength)).toThrow(invalidLengthMessage);
        const bigLength = fillArray(lengths[1] + 1);
        expect(() => switchLights(bigLength)).toThrow(invalidLengthMessage);
    })
    it("It should works for basic tests", () => {
        expect(switchLights([1, 1, 1, 1, 1])).toEqual([0, 1, 0, 1, 0]);
        expect(switchLights([0, 0])).toEqual([0, 0]);
        expect(switchLights([1, 0, 0, 1, 0, 1, 0, 1])).toEqual([1, 1, 1, 0, 0, 1, 1, 0]);
        expect(switchLights([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1])).toEqual([1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]);
    })
})