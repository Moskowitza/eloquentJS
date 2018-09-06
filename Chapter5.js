// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }

// console.log(total);

//range and sum functions from previous chapter exercises
// function range(start,end){
//     let arr=[];
//     do {
//        arr.push(start)
//        start = start+1;
//     }  while(start<= end)
//     return arr;
// }
// function sum(arr){
//     let ourSum=0;
// for(i=0;i<arr.length;i++){
//     ourSum=ourSum+arr[i]
// }
// return ourSum;
// }
// console.log(sum(range(1, 10)));

// //abstraction
// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(i);
//     }
//   }
//   repeatLog(5)

//repeat function takes a fucntion as second argument
//   function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }
// //   repeat(3,console.log)
//   let labels=[];
//   repeat(5,i=>{labels.push(`Unit ${i+1}`)});
//   console.log(labels)

// function greaterThan(n){
//     return m=>m>n;
// }
// let greaterThan10=greaterThan(10);
// console.log(greaterThan10(11)) // can we do this differently? no I could not

function noisy(f){
    return(...args)=>{
        console.log("calling with",args);
        let result = f(...args);
        console.log("called with", args, ", returned", result)
        return result
    }
}
noisy(Math.min)(3,2,1);