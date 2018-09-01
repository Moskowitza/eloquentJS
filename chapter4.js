// let array = ["a", "b", "c"];
// console.log(array.pop());
// console.log(array);

// let journal = [
//     {
//         events: ["work", "touched tree", "pizza", "running", "television"],
//         squirrel: false
//     },
//     {
//         events: ["work", "icecream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "cycling", "break", "peanuts", "beer"],
//         squirrel: true
//     },
// ]

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(` object1 == object2 ${object1 == object2}`);
// // → true
// console.log(`object1 == object3 ${object1 == object3}`);
// // → false

// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value);
// // → 10

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }
  
  console.log(phi([76, 9, 4, 1]));