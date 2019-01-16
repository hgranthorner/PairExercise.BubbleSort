function bubbleSort(arr) {
  let sorted = false
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1] //?
        arr[j + 1] = arr[j] //?
        arr[j] = temp
        sorted = false
      }
    }
    if (sorted === true) break
  }
  return arr
}

let arr = [3, 1, 2, 8, 6, 4, 5, 15, 11, 13, 27, 24, 100, 8]

bubbleSort(arr) //?
