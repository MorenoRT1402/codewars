const none = (array, func) => {
    if (array === null || !Array.isArray(array) || func === null || typeof func !== 'function')
        throw new Error('expected (Array, function)');

    for (let element of array)
        if (func(element))
            return false;
    
    return true;
}

module.exports = none;