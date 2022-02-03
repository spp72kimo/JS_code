/*
Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.
fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
*/
function fib(n){
    let seq = [0,1];
    for (let i = 2; i <= n+1; i++){
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    console.log(seq);
    return(seq[n]);
}

console.log(fib(100));