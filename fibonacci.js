function fib(n){
    let seq = [0,1];
    for (let i = 2; i <= n+1; i++){
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    console.log(seq);
    return(seq[n]);
}

console.log(fib(100));