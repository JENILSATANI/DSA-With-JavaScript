let arr = [12, 22, 22, 33];
let arr1= [12, 22, 22, -33];

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


let b = sumArray(arr1);
console.log('b :>> ', b);





let sequence = [1, 2, 3, 4];

function aaa(n) {
    let a = n[n.length - 1];
    return (a * (a + 1)) / 2;
}

let call = aaa(sequence);
console.log('call :>> ', call);
