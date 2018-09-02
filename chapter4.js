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

// let journal = [];

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
// }
// addEntry(["work", "touched tree", "pizza", "running","television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
let JOURNAL = require('./journal.js');
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i];
        let index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

//for ( let entry of array)
// for (let entry of JOURNAL) {
//     console.log(`Events for this entry : ${entry.events}`);
//   }

// for (let entry of JOURNAL) {
//     console.log(`length of this entry ${entry.events.length}`);
//   }
//   for (let entry of JOURNAL) {
//     console.log(`Is a squirrel? ${entry.squirrel}`);
//   }

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
console.log(`------------------------`);
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {

        console.log(event + ":", correlation);
    }
}
console.log(`------------------------`);
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
console.log(tableFor("peanut teeth", JOURNAL));
