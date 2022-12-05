function addUpTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

// console.log(addUpTo(20));

// function addUpTo(n) {
//     let result = ((1 + n) * n) / 2;
//     return result;
// }
//等差級數