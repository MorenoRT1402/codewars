const gooseFilter = birds => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(bird => !geese.includes(bird));
};

//#------------------------------------------------------------#

console.log(gooseFilter((["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])));
console.log((gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])));
console.log((gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])));