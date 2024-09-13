const saleHotdogs = number => {
    if (number < 0) throw new Error('Number must be positive');
    let mult = 90;
    if (number < 5) mult = 100;
    else if (number < 10) mult = 95
    return number * mult;
}

module.exports = saleHotdogs;