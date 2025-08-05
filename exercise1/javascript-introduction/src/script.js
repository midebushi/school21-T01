console.log(`%c${document.title} says to you Hello!`, 
    'background-color: yellow; font-size: larger')

function range(start, end) {
    const array = []
    for (; start <= end; start++) {
        array.push(start)
    }
    console.log(array);
}

range(0, 0)