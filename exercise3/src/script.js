function getNOD(first, second) {
    while (first !== 0 && second !== 0) {
        if (first > second) 
            first = first % second
        else 
            second = second % first
    }
    return first + second
}

getNOD(0, 0)