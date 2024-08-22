const isPerfectSquare = n => {
    const sqrt = Math.sqrt(n);
    return Math.floor(sqrt) === sqrt;
}

const off = switches => {
    const offSwitches = []
    for (let s = 1; s <= switches; s++) {
        if(isPerfectSquare(s))
            offSwitches.push(s);
    }
    return offSwitches;
}

console.log(off(1));
console.log(off(2));
console.log(off(4));
console.log(off(9));