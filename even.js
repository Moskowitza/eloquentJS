// isEven=n=>{
//     return n%2==0;
// }

 function isEven(n) {
    if (n < 0) {
        return isEven(-n);
    }
    else if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
       return isEven(n - 2);
    }
}

    console.log(`is the following even or not? show true or false`)
    console.log(`0 ${isEven(0)}`)
    console.log(`75 ${isEven(75)}`)
    console.log(`-1 ${isEven(-1)}`)