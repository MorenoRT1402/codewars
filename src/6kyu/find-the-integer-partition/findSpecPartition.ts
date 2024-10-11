export const errors = {
    onlyPositives: 'Only positive parameters are accepted',
    incorrectMode: "Invalid mode, choose 'max' or 'min'",
};

export enum modes { Min = 'min', Max = 'max' };

export const findSpecPartition = (n: number, k: number, com: modes): number[] => {
    if (n <= 0 || k <= 0) throw new Error(errors.onlyPositives);
    if (com !== modes.Max && com !== modes.Min) throw new Error(errors.incorrectMode);

    let partition: number[] = [];

    if (com === modes.Max) {
        const base = Math.floor(n / k);
        const remainder = n % k;

        for (let i = 0; i < k; i++)
            partition.push(base + (i < remainder ? 1 : 0));
        
    } else {
        partition = Array.from({ length: k }, () => 1);
        partition[0] = n - (k - 1); 
    }

    return partition.sort((a, b) => b - a);
};
