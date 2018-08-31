/**The ability to treat functions as values, 
 * combined with the fact that local bindings are re-created every time a function is called,
 *  brings up an interesting question. 
 * What happens to local bindings when the function call that created them is no longer active?

The following code shows an example of this.
 It defines a function, wrapValue, that creates a local binding. 
 It then returns a function that accesses and returns this local binding. */

// function wrapValue(n) {
//     let local = n;
//     return () => local;
//   }
  
//   let wrap1 = wrapValue(1);
//   let wrap2 = wrapValue(2);
//   console.log(wrap1());
//   // → 1
//   console.log(wrap2());
//   // → 2
//   console.log(`local ${local}`);
// //   ReferenceError: local is not defined

// function multiplier(factor) {
//     return number => number * factor;
//   }
  
//   let twice = multiplier(2); //wtf is this
//   console.log(multiplier(2));//function
//   console.log(twice());

function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1); //resolves to base * base * base
    }
  }

  console.log(power(2, 3));
