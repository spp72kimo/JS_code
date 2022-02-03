// 從 1 + 2 + 3 + ... + n = 

function addUpTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++){
        result += i;
    }   
    return result;
}

console.log(addUpTo(5));
console.log(addUpTo(100));
console.log(addUpTo(5000));
console.log(addUpTo(100000));