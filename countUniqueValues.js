function countUniqueValues(values) {
    if (values.length === 0) {
        return 0
    }
    let i = 0;
    let j = 1;
    while(j < values.length) {
        if ( values[i] === values[j]) {
            j++;
        } else {
            i++;
            values[i] = values[j]
        }
    }
    return i + 1;

}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4