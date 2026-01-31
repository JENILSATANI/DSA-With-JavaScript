let arr = [1, 4, 5, 6, 7, 8]

function Largest(arr) {

    let output = -Infinity


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > output) {
            output = arr[i]

        }
    }
    return output;

}

let result = Largest(arr)
console.log('result :>> ', result);