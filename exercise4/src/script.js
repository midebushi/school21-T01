function getSimpleNumbers(touple) {
    let array = []

    for (let i = touple[0]; i <= touple.at(-1); i++) {
        if ((i === 2 || i % 2 !== 0) && (i === 3 || i % 3 !== 0) && (i < 10)) {
            array.push(i)  
        }
    }
    return array
}

getSimpleNumbers([5, 8])