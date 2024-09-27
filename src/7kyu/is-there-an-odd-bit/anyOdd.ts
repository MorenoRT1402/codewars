export const anyOdd = (x:number):number => {
    const mask = 0xAAAAAAAA;
    return (x & mask) !== 0 ? 1 : 0;
}