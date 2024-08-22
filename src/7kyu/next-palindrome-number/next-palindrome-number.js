const isPal = number => {
    const numStr = number.toString();
    const middle = (numStr.length - 1) / 2;
    for (let c = 0; c <= middle; c++) {
        if(numStr[c] != numStr[numStr.length - 1 - c])
            return false;
    }
    return true;
}

const nextPal = number => {
    let nextNum = number;
    let nextNumIsPal = false;
    while(!nextNumIsPal)
        nextNumIsPal = isPal(++nextNum);
    return nextNum;
}

console.log(nextPal(11));
console.log(nextPal(188));
console.log(nextPal(191));
console.log(nextPal(2541));