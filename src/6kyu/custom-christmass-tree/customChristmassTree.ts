export const customChristmasTree = (chars: string, n: number): string => {
    if (n < 3) {
        throw new Error('Height must be greater than 2.');
    }

    const leaves: string[] = [];
    let index = 0;

    for (let i = 0; i < n; i++) {
        const charsInRow = i + 1;
        const rowChars: string[] = [];

        for (let j = 0; j < charsInRow; j++) {
            rowChars.push(chars[index % chars.length]);
            index++;
        }

        const row = rowChars.join(' ');
        const spaces = ' '.repeat(n - i - 1);
        leaves.push(spaces + row);
    }

    const trunkHeight = Math.floor((n - 1) / 3) + 1;
    const trunkSpace = ' '.repeat(n - 1);
    const trunk = trunkSpace + '|';

    const tree = [...leaves, ...Array(trunkHeight).fill(trunk)].join('\n');
    return tree;
};
