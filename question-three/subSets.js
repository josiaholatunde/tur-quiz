const subsets = (elements) => {
    // todo
    if (elements === null || elements.length === 0) return [[]];
    
    const firstElement = elements[0];
    const resultWithoutFirst =  subsets(elements.slice(1));
    
    const resultWithFirst = [];
    for (let item of resultWithoutFirst) {
      resultWithFirst.push([firstElement, ...item]);
    }
    
    return [...resultWithFirst, ...resultWithoutFirst];
};

console.log(subsets(['a', 'b'])); // -> [ [], [ 'b' ], [ 'a' ], [ 'a', 'b' ] ]
console.log(subsets(['a', 'b', 'c'])); // -> [ [], [ 'c' ], [ 'b' ],[ 'b', 'c' ], [ 'a' ],[ 'a', 'c' ], [ 'a', 'b' ], [ 'a', 'b', 'c' ]]
console.log(subsets([])); // -> // [[]]