function stars2(n){
    for(let i = 1; i <= n; i++){
        let star = '';
        for (let j = 1; j <= i; j++){
            star += '*'; 
        }
        console.log(star);
    }
    for (let i = n-1; i > 0; i--){
        let star = '';
        for (let j = 1; j <= i; j++){
            star += '*';
        }
        console.log(star);
    }
}

stars2(5);