//The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start,end){
    let ourSum=start;
    do {
       start = start + 1;
       ourSum= ourSum+start;
    }  while(start< end)
    return ourSum;
}
console.log(range(1,10));