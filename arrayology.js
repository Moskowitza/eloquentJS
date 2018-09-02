//shift, unshift, lastIndexOf, indexOf, push, slice
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
remember("brush teeth")
remember("pet cat")
rememberUrgently("buy bananas")
getTask("brush teeth")
console.log(todoList)

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
let array = [1, 2, 3, 2, 1]
array=array.slice()
console.log(array);

function remove(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1));
  }
  console.log(remove("abcdefg", 2));
  // → ["a", "b", "d", "e"]

  function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  console.log("rest ... example 'spread'" + max(4, 1, 9, -2));

  function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle),
          angle: angle};
  }
  console.log(randomPointOnCircle(2));
  // → {x: 0.3667, y: 1.966}

  //floor rounds down
  console.log(Math.floor(Math.random() * 10));