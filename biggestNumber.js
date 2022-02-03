function findBiggest(arr) {
    let biggestNumber;
    if (arr == undefined){
        return undefined;
    }
    biggestNumber = arr[0];
    for (i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] > arr[i]){
            biggestNumber = arr[i + 1];
        }
    }
    return biggestNumber;
  }

console.log(findBiggest([15,20,33,21,65]));
console.log(findBiggest());
  