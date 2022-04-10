function confirmEnding(base,ending){
    let j = base.length - ending.length;
    for (let i = 0; i < ending.length; i++){
        if(ending[i] != base[j]){
            return false;
        }
        j++;
    }
    if (j == base.length){
        return true;
    }else{
        return false;
    }
}

str1 = "hello i am steven";
str2 = "steven";

console.log(confirmEnding(str1,str2));