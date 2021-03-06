// When you write something inside ${} in a 
// template literal!
// `half of 100 is ${100 / 2}`

// Unary operators
//Not all operators are symbols. Some are written as words. 
// console.log(typeof 4.5)
// // → number
// console.log(typeof "x")
// → string

// Biary Operators
// > or < take two arguments, thus: Binary
// let weather="sunny";
// switch (weather) {
//     case "rainy":
//       console.log("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//       console.log("Dress lightly.");
//     case "cloudy":
//       console.log("Go outside.");
//       break;
//     default:
//       console.log("Unknown weather type!");
//       break;
//   }

  //Write a loop that makes seven calls to console.log to output the following triangle:
  let row="*";
  for (i=0;i<7;i++){
      console.log(row);
      row=row+"*";
  }
  /*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

*/
for (i=1;i<101;i++){
    if(i%3 ==0 && i%5 ==0) {console.log("FizzBuzz"); }
    else if(i%3 ==0){console.log("Fizz"); }
    else if(i%5 ==0){console.log("Buzz"); }
    else {console.log(i); }
}