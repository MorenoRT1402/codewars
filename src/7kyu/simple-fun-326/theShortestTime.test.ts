import { shortestTime } from "./theShortestTime";

describe('Simple Fun #326 - The Shortest Time', () => {
    it('should works for basic tests', () => {
        expect(shortestTime(5,6,[1,2,3,10])).toBe(12);
        expect(shortestTime(1,6,[1,2,3,10])).toBe(0);
        expect(shortestTime(5,5,[1,2,3,10])).toBe(11);
        expect(shortestTime(2,2,[1,2,3,10])).toBe(8);
        expect(shortestTime(2,2,[2,3,4,10])).toBe(10);
        expect(shortestTime(5,4,[1,2,3,10])).toBe(12);
        expect(shortestTime(5,4,[2,3,4,5])).toBe(20);
    })
})