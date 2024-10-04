export const flipNumber = (n: string): string => {
    const length = n.length;
    const flippedChars: string[] = [];
    const middle = Math.floor(length / 2)

    for (let i = 0; i < middle; i++) {
        flippedChars.push(n[length - 1 - i]);
        flippedChars.push(n[i]);
    }

    if (length % 2 !== 0) flippedChars.push(n[middle]);

    return flippedChars.join('');
};
