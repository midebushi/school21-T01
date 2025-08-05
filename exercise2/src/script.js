function getNumbersIdBySum(arrayOfNumbers, sum) {
    let result = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let x = 0; x < (arrayOfNumbers.length / 2); x++) {
            if (arrayOfNumbers[i] + arrayOfNumbers[x] === sum 
                && arrayOfNumbers[i] !== arrayOfNumbers[x]) {
                
                result.push([i, x])
            }
        }
    }
    if (result.length === 0) {
        return null
    }
    return result
}

getNumbersIdBySum([1, 2, 3, 4, 5], 0)