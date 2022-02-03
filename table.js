/*
table(3);
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 9 = 27
```
*/

function table(n){
    for(let i = 1; i <= 9; i++){
        let ans = n * i
        console.log(n + ' x ' + i + ' = ' + ans);
    }
}

table(5);