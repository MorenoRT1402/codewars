export const solve = (alice: number[], bob: number[]): string => {
    const wins = { alice: 0, bob: 0 };

    alice.forEach((score, i) => {
        if (score > bob[i]) {
            wins.alice++;
        } else if (score < bob[i]) {
            wins.bob++;
        }
    });

    const phrases = {
        draw: 'that looks like a "draw"! Rock on!',
        alice: 'Alice made "Kurt" proud!',
        bob: 'Bob made "Jeff" proud!'
    };

    let result = `${wins.alice}, ${wins.bob}: `;
    if (wins.alice === wins.bob) {
        result += phrases.draw;
    } else {
        result += wins.alice > wins.bob ? phrases.alice : phrases.bob;
    }

    return result;
};