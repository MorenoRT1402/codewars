import { totalLicks } from "./80sKids";

describe("80's Kids #1: How Many Licks Does it Take?", () => {
    it("should return base number with empty env", () => {
        expect(totalLicks({}))
        .toBe("It took 252 licks to get to the tootsie roll center of a tootsie pop.");
    })
    it("should return correct solution", () => {
        expect(totalLicks({ "freezing temps": 10, "clear skies": -2 }))
        .toBe("It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps.");
        expect(totalLicks({ "happiness": -5, "clear skies": -2 }))
        .toBe("It took 245 licks to get to the tootsie roll center of a tootsie pop.");
        expect(totalLicks({"dragons": 100, "evil wizards": 110, "trolls": 50}))
        .toBe("It took 512 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was evil wizards.");
        expect(totalLicks({"white magic": -250}))
        .toBe("It took 2 licks to get to the tootsie roll center of a tootsie pop.");
    })
})