//RECURSIVE BINARY SEARCH
function recursiveBinarySearch(arr, n) {
  return search(arr, n, 0, arr.length - 1)
}
function search(arr, n, left, right) {
    if (left > right) return -1
    let middle = Math.floor((arr[left] + arr[right]) / 2)
    if (n === arr[middle]) return middle
    if (n < arr[middle]) return search(arr, n, left, middle - 1)
    if (n > arr[middle]) return search(arr, n, middle + 1, right)
}
console.log(recursiveBinarySearch([-1, 2, 10, 4, 6, 2], 11))

//BINARY SEARCH
// function binarySearch(arr, n) {
//   arr.sort((a, b) => a - b)
//   console.log(arr)
//   let left = 0
//   let right = arr.length - 1
//   while(left <= right) {
//     let middle = Math.floor((left + right) / 2)
//     if (n === arr[middle]) return middle
//     if (n < arr[middle]) right = middle - 1
//     if (n > arr[middle]) left = middle + 1
//   }
//   return -1
// }
// console.log(binarySearch([-1, 2, 10, 4, 6, 2], 11))

// LINEAR SEARCH
// const arr = [-1, 2, 10, 4, 6, 2]
// function linearSearch(n) {
//     return arr.indexOf(n)
// }
// console.log(linearSearch(2))

// FACTORIAL
// function recursionFactorial(n) {
//     if (n < 2) return 1
//     return recursionFactorial(n-1) * n
// }
// console.log(recursionFactorial(7))

// FIBONACCI
// function recursionFibonacci(n) {
//     if (n < 2) return n
//     return recursionFibonacci(n-2) + recursionFibonacci(n-1)
// }
// console.log(recursionFibonacci(6))

// function fibonacci(n) {
//   const arr = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
//   }
//   return arr
// }
// console.log(fibonacci(6))
