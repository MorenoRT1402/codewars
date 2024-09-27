export const startSmoking = (bars:number, boxes:number) :number => {
    const cigarettesPerBox = 18;
    const boxesPerBar = 10;
    
    const totalCigarettes = (bars * boxesPerBar * cigarettesPerBox) + (boxes * cigarettesPerBox);
    
    let smokedCigarettes = totalCigarettes;
    let stubs = totalCigarettes;

    while (stubs >= 5) {
        const newCigarettes = Math.floor(stubs / 5);
        smokedCigarettes += newCigarettes;
        stubs = stubs % 5 + newCigarettes;
    }

    return smokedCigarettes;
}