export const totalLicks = (env: { [key: string]: number }): string => {
    const BASE_NUMBER = 252;
    const result = { licks: BASE_NUMBER, challenge: '' };

    if (Object.keys(env).length > 0) {
        const values = Object.values(env);
        result.licks += values.reduce((add, current) => add + current, 0);

        const moreChallengingValue = Math.max(...values);

        if (moreChallengingValue > 0) {
            const challengeEntry = Object.entries(env).find(([, value]) => value === moreChallengingValue);

            result.challenge = challengeEntry ? ` The toughest challenge was ${challengeEntry[0]}.` : '';
        }
    }

    return `It took ${result.licks} licks to get to the tootsie roll center of a tootsie pop.${result.challenge}`;
}