import { errors, findSpecPartition, modes } from "./findSpecPartition";

describe('Find the integer Partition of k-Length With Maximum or Minimum Value For Its Product Value', () => {
    it('should accept only positive parameters', () => {
        const errorMessage = errors.onlyPositives;
        expect(() => findSpecPartition(0, 3, modes.Min)).toThrow(errorMessage);
        expect(() => findSpecPartition(3, 0, modes.Min)).toThrow(errorMessage);
    });

    it('should return small values of n', () => {
        expect(findSpecPartition(10, 4, modes.Max)).toStrictEqual([3, 3, 2, 2]);
        expect(findSpecPartition(10, 4, modes.Min)).toStrictEqual([7, 1, 1, 1]);
    });

    it('should return partitions for larger n values', () => {
        expect(findSpecPartition(45, 14, modes.Min)).toStrictEqual([32, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });

    it('should throw an error for invalid mode', () => {
        const errorMessage = errors.incorrectMode;
        expect(() => findSpecPartition(10, 4, 'invalid' as modes)).toThrow(errorMessage);
    });
});
