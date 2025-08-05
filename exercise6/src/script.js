function alphabetMap(rawString, mapCount) {
    const array = rawString.split('')
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'a':
                array[i] = 'def'
                break
            case 'b':
                array[i] = 'efc'
                break
            case 'c':
                array[i] = 'abe'
                break
            case 'd':
                array[i] = 'cba'
                break
            case 'e':
                array[i] = 'fba'
                break
            case 'f':
                array[i] = 'dcb'
                break
        }
    }

    mapCount--
    let result = array.join('')
    
    if (mapCount !== 0) {
        alphabetMap(result, mapCount)
    } else {
        return result
    }
    
}

console.log(alphabetMap('bad', 1));
