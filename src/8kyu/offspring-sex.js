/*  [8kyu - Determine offspring sex based on genes XX and XY chromosomes]

The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. 
They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, 
the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y 
chromosome, return "Congratulations! You're going to have a son.";
*/

const map = {
    'X': 'daughter',
    'Y': 'son',
    'U': 'i don`t know'
};

const offspringSexSperm = (chromosome = Object.keys(map)[2]) => `Congratulations! You're going to have a ${map[chromosome]}.`;

const offspringSex = (chromosomes = 'U') => offspringSexSperm(chromosomes[chromosomes.length -1]);

console.log(offspringSex('XX'));  // Output: Congratulations! You're going to have a daughter.
console.log(offspringSex('XY'));  // Output: Congratulations! You're going to have a son.
console.log(offspringSex());     // Output: Congratulations! You're going to have a idk. ('U' by default)
