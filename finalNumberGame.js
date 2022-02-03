// 終極密碼遊戲

let ans = 100 * Math.random();
ans = Math.floor(ans);
console.log(ans);
let min = 0;
let max = 99;
let guessNum; 

while (true) {
    guessNum = prompt('please guess number (' + min + '~' + max + ')');
    if (!Number(guessNum)){
        alert('please input number!');
        continue;
    }else if ((guessNum < min) || (guessNum > max)){
        alert('please input number in(' + min + '~' + max);
        continue;
    }else if (guessNum == ans){
        alert('Bingo!');
        break;
    }else if (guessNum > ans){
        max = guessNum;
    }else if (guessNum < ans){
        min = guessNum;
    }
}