export const differentLengthsError = 'Guess & correct word has different lengths';
export const countCorrectCharacters = (correctWord: string, guess: string): number => {
    if (correctWord.length !== guess.length) throw new Error(differentLengthsError);
    return [...correctWord].reduce((count, char, index) => count + (char === guess[index] ? 1 : 0), 0);
}
