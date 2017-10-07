function addArr(arr) {
    var sum = 0;
    for (var i = 2; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

let result = addArr(process.argv);
console.log(result);