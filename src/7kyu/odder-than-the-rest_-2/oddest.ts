//Incomplete
export const oddest = (a: number[]): number => {
    return a.reduce((prev, curr) => {
        const isEven = (n:number) => n % 2 === 0;
        const isCurrOdd = !isEven(curr);
        const isPrevOdd = !isEven(prev);

        const getM = (n:number) => Math.floor(n / 2);
        if (isCurrOdd && isPrevOdd)
            return getM(curr) > getM(prev) ? curr : prev;
        return isCurrOdd ? curr : prev;
    }, a[0]);
};