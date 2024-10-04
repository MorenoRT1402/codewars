export const lengths = [2, 5000];
export const invalidLengthMessage = `array length must be beetween ${lengths[0]} and ${lengths[1]} (both included)`;
export const switchLights = (a:number[]) :number[] => {
    if(a.length < lengths[0] || a.length > lengths[1]) throw new Error(invalidLengthMessage);

    let invertTimes = 0;
    let lastCandleInvertedIndex = -1;
    for (let i = 0; i < a.length; i++) {
        const inverted = a[i] === 1;
        if(inverted){
            invertTimes++;
            lastCandleInvertedIndex = i;
        }
    }
    if(lastCandleInvertedIndex === - 1) return a;
    let invertedArray = [...a];
    for (let i = 0; i <= lastCandleInvertedIndex; i++) {
        if(invertTimes % 2 != 0){
            const toPush = 1 - a[i];
            invertedArray[i] = toPush;
        }
        if(a[i] === 1) invertTimes--;
    }
    return invertedArray;
}