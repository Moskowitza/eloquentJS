const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
console.log(score.visitors)
// This isn't allowed
// score = {visitors: 1, home: 1};
Object.assign(score,{referee:"ted"})
console.log(score)