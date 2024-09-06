const createArray = number => {
    let newArray = [];
    
    for(let counter = 1; counter <= number; counter++)
      newArray.push(counter);
    
    return newArray;
}

//#------------------------------------#

console.log(createArray(1));
console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));