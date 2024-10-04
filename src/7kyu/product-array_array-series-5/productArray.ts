export const invalidSizeMessage = "Array/list size is at least 2 .";
export const onlyPositiveNumbersMessage = "Array/list's numbers Will be only Positives";
export const productArray = (nums: number[]): number[] => {
    if(nums.length < 2) throw new Error(invalidSizeMessage);
    if(nums.some(n => n < 0)) throw new Error(onlyPositiveNumbersMessage);

    const total = nums.reduce((prev, curr) => prev * curr, 1);
    return nums.map(n => total / n);
}