// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// }
// hummus(3);

// console.log("The future says:", future());
// //Functions are Hoisted
// function future() {
//   return "You'll never have flying cars";
// }
//Power Expression
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 8))

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
const horn = () => {
    console.log("Toot");
  };
console.log(`function square1 passing in 3 ${square1(3)}`)
console.log(`function square2 passing in 2 ${square2(2)}`)
horn();

function greet(who) {
    console.log("Hello " + who);
  }
  greet("Harry");
  console.log("Bye");

  function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  
  console.log(`power of 4 and exponenet is default ${power(4)}`);
  // → 16
  console.log(`power of 2 and exponenet is 6 ${power(2, 6)}`);
  // → 64