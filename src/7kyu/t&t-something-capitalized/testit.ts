export const testit = (s: string): string => {
    const words = s.split(" ");
    
    const modifiedWords = words.map(word => {
        if (word.length === 0) return word;
        const lastLetter = word[word.length - 1].toUpperCase();
        return word.slice(0, -1) + lastLetter;
    });

    return modifiedWords.join(" ");
};
