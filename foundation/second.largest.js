let arr = [-2. - 4, -5, -6, -87, -87]

function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have atlest 2 elements"
    }
    let output = -Infinity
    let secondLargestvarible = -Infinity


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > output) {
            secondLargestvarible = output
            output = arr[i]

        } else if (arr[i] > secondLargestvarible && arr[i] !== output) {
            secondLargestvarible = arr[i]
        }
    }
    return secondLargestvarible;
}


let result = secondLargest(arr)
console.log('result :>> ', result);