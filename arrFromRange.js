//The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start,end){
    let arr=[];
    do {
       arr.push(start)
       start = start+1;
    }  while(start<= end)
    return arr;
}
console.log(range(1,10));