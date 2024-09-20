export const towerCombination = (n: number): bigint => n <= 1 ? 1n : BigInt(n) * towerCombination(n - 1);
  