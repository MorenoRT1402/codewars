export const sursurungal = (txt: string): string => {
    const regex = /\b(\d+)\s([a-zA-Z]+)\b/g;

    return txt.replace(regex, (_, numberStr, word) => {
        const number = parseInt(numberStr, 10);

        if (number > 1 && word !== 'kiss' && word.endsWith('s')) word = word.slice(0, -1);

        let transformedWord = word;
        if (number === 2)
            transformedWord = `bu${word}`;
        else if (number >= 3 && number <= 9)
            transformedWord = `${word}zo`;
        else if (number > 9)
            transformedWord = `ga${word}ga`;

        return `${numberStr} ${transformedWord}`;
    });
};