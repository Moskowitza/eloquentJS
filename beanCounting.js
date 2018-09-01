// Bean counting
function countBs(arg) {
    let count = 0;
    for (i = 0; i <= arg.length; i++) {
        if (arg[i] === "B") {
            count++;
        }
    }
    return count;
}
function countChar(arg,let) {
    let count = 0;
    for (i = 0; i <= arg.length; i++) {
        if (arg[i] === let) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4