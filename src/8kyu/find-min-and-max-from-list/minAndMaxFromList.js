const validation = list => {
    const AllNumbers = list => {
        for (const element of list) {
            if (typeof element !== 'number' || Number.isNaN(element)) {
                return false;
            }
        }
        return true;
    }
        
    if(list === null || !Array.isArray(list) || !AllNumbers(list)) throw new Error('Input must be a number array');
}

const min = list => {
    validation(list);
    return Math.min(...list);
};

const max = list => {
    validation(list);
    return Math.max(...list);
};

module.exports = { min, max }