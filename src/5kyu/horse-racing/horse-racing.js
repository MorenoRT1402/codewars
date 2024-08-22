const optimumRival = (noble, tianJi) => {
    for (let i = 0; i < tianJi.length; i++) {
        if (tianJi[i] > noble[0])
            return i
    }
    return 0;
}

const horseRacing = (noble = [1, 2, 3], tianJi = [1, 2, 3]) => {
    const sureVictory = (posibleLoser, posibleWinner) => Math.max(...posibleLoser) < Math.min(...posibleWinner);
    if(sureVictory(noble, tianJi)) return tianJi.length;
    if(sureVictory(tianJi, noble)) return 0;

    let wins = 0;
    const nobleAux = noble.sort((a, b) => a - b);
    const tianJiAux = tianJi.sort((a, b) => a - b);

    while (nobleAux.length > 0) {
        const tianJiHorse = optimumRival(nobleAux, tianJiAux);
        if(tianJiAux[tianJiHorse] > nobleAux[0]) wins++;
        nobleAux.splice(0, 1);
        tianJiAux.splice(tianJiHorse, 1);
    }

    return wins;
}

console.log(horseRacing());
console.log(horseRacing([1,2,3],[4,5,6]));
console.log(horseRacing([4,5,6],[1,2,3]));
console.log(horseRacing([1,3,5],[2,4,6]));
console.log(horseRacing([2,4,6],[1,3,5]));
console.log(horseRacing([1,7,8,6,100],[2,37,10,5,8]));
console.log(horseRacing([19,73,15,54,50],[4,19,21,35,95]));

var long1=[82,57,86,48,55,23,100,88,99,88,13,83,80,28,28,66,56,100,82,61,63,22,86,38,48,69,34,64,82,43,75],
    long2=[70,44,22,64,78,90,38,55,16,80,63,100,29,60,43,98,35,32,80,56,34,78,5,65,63,5,32,87,77,69,17];
console.log(horseRacing(long1, long2));

//--------------------Extra (show in detail)--------------------------------------------------------------------------
const showResults = races => {
    let results = '';
    let wins = 0;
    races.forEach(race => {
        if (race.noble < race.tianJi) {
            results += `${race.tianJi}vs${race.noble}, `
            wins++;
        }
    });
    results += `win ${wins} times`

    return results;
}

const horseRacingText = (noble = [1, 2, 3], tianJi = [1, 2, 3]) => {
    const sureVictory = (posibleLoser, posibleWinner) => Math.max(...posibleLoser) < Math.min(...posibleWinner);
    if(sureVictory(noble, tianJi)) return 'all win';
    if(sureVictory(tianJi, noble)) return 'all lose';

    const races = [];
    const nobleAux = noble.sort((a, b) => a - b);
    const tianJiAux = tianJi.sort((a, b) => a - b);

    while (nobleAux.length > 0) {
        const tianJiHorse = optimumRival(nobleAux, tianJiAux);
        races.push({ noble: nobleAux[0], tianJi: tianJiAux[tianJiHorse] });
        nobleAux.splice(0, 1);
        tianJiAux.splice(tianJiHorse, 1);
    }

    return showResults(races);
}

console.log('extra case 1', horseRacingText());