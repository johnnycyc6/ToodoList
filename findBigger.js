function findBiggerst(arr){
    if (arr.length == 0){
        return undefined;
    }


let biggestNumber = -100000000;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
    }
}
return biggestNumber;
}

console.log(findBiggerst([12, 45, 48, 20]));

findBiggerst([12, 45, 48, 20]);
