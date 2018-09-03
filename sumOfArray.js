// Solved
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(arr){
    let ourSum=0;
for(i=0;i<arr.length;i++){
    ourSum=ourSum+arr[i]
}
return ourSum;
}

// console.log(array)
// console.log(array.length)
console.log(sum(array))