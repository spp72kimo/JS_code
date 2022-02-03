function table9x9(){
    let ans;
    for (let i = 1; i <= 9; i++){
        for (let j = 1; j <=9; j++){
            ans = i * j;
            console.log(i + ' x ' + j + ' = ' + ans);
        }
    }
}

table9x9()