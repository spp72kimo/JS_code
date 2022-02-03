/*
Write a function called "stars2" which prints out layers of stars in the following pattern:

stars2(1);
// *
stars2(2);
// *
// **
// *
stars2(3);
// *
// **
// ***
// **
// *
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *

*/

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