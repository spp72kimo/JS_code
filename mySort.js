let min;
let ptr;
let sorted = [];

function mySort(arr){
    min = 10000;
    if (sorted.length == arr.length){
        console.log('finish!');
    }else{
        for (let i = 0; i <= arr.length; i++){
            if (arr[i] <= min){
                min = arr[i];
                ptr = i;
            }
        }
        sorted.push(min);
        // console.log(sorted);
        arr[ptr] = 10001;
        mySort(arr);
    }
}

let list = [-3,5,-4,6.7,874,345,-345];
console.log(list);
mySort(list)
console.log(sorted);