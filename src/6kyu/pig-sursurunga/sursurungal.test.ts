import { sursurungal } from "./sursurungal";

describe('Pig Sursurunga', () => {
    it('should return correct sursurungal', () => {
        expect(sursurungal('0 tomato')).toBe('0 tomato');
        expect(sursurungal('1 tomato')).toBe('1 tomato');
        expect(sursurungal('1 ananas')).toBe('1 ananas');

        expect(sursurungal('2 tomatoes')).toBe('2 butomatoe');

        expect(sursurungal('3 tomatoes')).toBe('3 tomatoezo');
        expect(sursurungal('5 tomatoes')).toBe('5 tomatoezo');
        expect(sursurungal('7 tomatoes')).toBe('7 tomatoezo');
        expect(sursurungal('9 tomatoes')).toBe('9 tomatoezo');

        expect(sursurungal('10 tomatoes')).toBe('10 gatomatoega');

        expect(sursurungal('5 lions and 15 zebras')).toBe('5 lionzo and 15 gazebraga');
    })
})