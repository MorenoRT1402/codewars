import { removeSmallest } from "./removeTheMinimum";

describe("removeSmallest", function() {
    it("works for the examples", function() {
        expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
        expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
        expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
    });
    
    it("returns [] if the list has only one or less elements", function() {
        expect(removeSmallest([1])).toEqual([]);
        expect(removeSmallest([])).toEqual([]);
    });
    
    function randomArray(length : number) {
      return Array.from({length: length}, () => ~~(Math.random() * 400));
    }
    
    it("returns a list that misses only one element", () => {
        for (let i = 0; i < 10; ++i) {
          let arr = randomArray(~~(Math.random() * 10) + 1);
          let l = arr.length;
          const result = removeSmallest(arr);
          if (result.length !== l - 1)
            throw new Error(`Expected length ${l - 1} but got ${result.length} for input ${arr}`);
        }
    });
});