function findDuplicate(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (i == j){
                continue;
            }
            else{
                if(arr[i] == arr[j]){
                    return true;
                }
            }
        }
    }
    return false;
}
list = [1,2,3,4,5,6,7,2];
console.log(findDuplicate(list));