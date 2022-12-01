const toDecimal = (base, baseNumber) => {

}


const fromDecimal = (base, decimalNumber) => {
    if (!base || base === 0) return [];
    
    const result = [];
    while(decimalNumber > 0){
        const remainder = decimalNumber % base;
        result.push(remainder);
        decimalNumber = Math.floor(decimalNumber/ base);
    }
    return result.reverse();
}

console.log(fromDecimal(2, 1000));
