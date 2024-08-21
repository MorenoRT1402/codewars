const map = {
    'X': 'daughter',
    'Y': 'son',
    'U': 'i don`t know'
};

const offspringSexSperm = (chromosome = Object.keys(map)[2]) => `Congratulations! You're going to have a ${map[chromosome]}.`;

const chromosomeCheck = (sperm = 'U') => offspringSexSperm(sperm[sperm.length -1]);

console.log(chromosomeCheck('XX'));  // Output: Congratulations! You're going to have a daughter.
console.log(chromosomeCheck('XY'));  // Output: Congratulations! You're going to have a son.
console.log(chromosomeCheck());     // Output: Congratulations! You're going to have a idk. ('U' by default)
