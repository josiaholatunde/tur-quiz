const toDecimal = (base, baseNumber) => {
    if (!base || base < 0 || baseNumber == null) return;
    let power = 0;
    let result = 0;
    for (let i = baseNumber.length - 1; i >= 0; i--) {
        result += (+baseNumber[i]) * Math.pow(base, power);
        power++;
    }
    return result;
}


const fromDecimal = (base, decimalNumber) => {
    if (!base || base <= 0 || decimalNumber === null) return [];

    const result = [];
    while(decimalNumber > 0){
        const remainder = decimalNumber % base;
        result.push(remainder);
        decimalNumber = Math.floor(decimalNumber/ base);
    }
    return result.reverse();
}

console.log(fromDecimal(2, 5));
console.log(fromDecimal(7, 619649));
console.log(fromDecimal(2, 11));
console.log(toDecimal(2, [1, 0, 1]));
console.log(toDecimal(7, [5, 1, 6, 0, 3, 6, 2]));
console.log(toDecimal(0, 5));
