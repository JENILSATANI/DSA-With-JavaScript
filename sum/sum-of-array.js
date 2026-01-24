let arr = [12, 22, 22, 33];

function sumArray(arr) {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output += arr[i];
    }

    return output;
}

function sumArrayusingwhileloop(arr) {
    let sum = 0;
    let i = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }

    return sum;
}


let b = sumArray(arr);
console.log('b :>> ', b);
