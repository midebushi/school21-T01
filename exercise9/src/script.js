function mergeSort(arrayOfNumbers) {

    if (arrayOfNumbers.length < 2) {
        return arrayOfNumbers
    }

  const mid = Math.floor(arrayOfNumbers.length / 2)
  const left = arrayOfNumbers.slice(0, mid)
  const right = arrayOfNumbers.slice(mid)

  function merge(left, right) {
    const result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left, right)
  }
  return merge(mergeSort(left), mergeSort(right))
}

function binarySearch(arrayOfNumbers, num) {
    let left = 0;
    let right = arrayOfNumbers.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arrayOfNumbers[mid] === num) {
            return mid;
        } else if (arrayOfNumbers[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

function getMaxZeroCount(raw) {
    let maxCount = 0;
    let currentCount = 0;
    
    for (let char of raw) {
        if (char === '0') {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    
    return maxCount;
}
getMaxZeroCount("1010010001")