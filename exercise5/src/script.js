const dayStart = "07:30" // начало дня
const dayEnd = "17:45" // конец дня

function scheduleMeeting(startTime, durationMinutes) {
    if (parseTime(startTime) >= parseTime(dayStart) 
        && (parseTime(startTime) + durationMinutes) <= parseTime(dayEnd)) {
        return true
    } else {
        return false
    }
}

console.log(scheduleMeeting("18:00", 15));


function parseTime(time) {
    let array = time.split(':')

    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i])
    }
    array[1] = array[1] + (array[0] * 60)
    return array[1]
}