export const removeSmallest = (numbers : number[]) : number[] => {
    if (numbers.length <= 1) return [];
  
    const min = Math.min(...numbers);
    const minIndex = numbers.indexOf(min);
  
    return numbers.filter((_, index) => index !== minIndex);
}
  