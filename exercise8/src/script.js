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

console.log(mergeSort([38, 27, 43, 3, 9, 82]));
