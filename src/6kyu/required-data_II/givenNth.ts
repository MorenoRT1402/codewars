export const errors = {
    invalidK : 'Incorrect value for k',
    kHigherThanArr : 'No way',
    invalidMode : "Valid entries: 'max' or 'min'",
    invalidEntryList : 'Invalid entry list',
    emptyArray : 'No values in the array',
}

export enum modes { Min = 'min', Max = 'max' }

export const givenNthValue = (arr:(number | string)[], k:number | string, str_:string) :number|string => {
    if(arr.length === 0) return errors.emptyArray;
    if(typeof(k) !== 'number' || k < 0) return errors.invalidK;

    const mode = str_.toLowerCase();
    if(mode !== modes.Min && mode !== modes.Max) return errors.invalidMode;

    if(arr.some(el => typeof el !== 'number')) return errors.invalidEntryList;

    let sortedArr = [...new Set(arr)];
    if(sortedArr.length < k) return errors.kHigherThanArr;
    
    sortedArr.sort((a, b) => mode === modes.Min ? (a as number) - (b as number) : (b as number) - (a as number));
    return sortedArr[k - 1];
}
