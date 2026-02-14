let sum = [1, 4, 5, 6, 7]


function sumArray(ele) {

    let totalSum = 0

    for (i = 0; i < ele.length; i++) {
        totalSum += ele[i]
    }

    return totalSum
}

let callFunction = sumArray(sum)
console.log('callfunct6ion :>> ', callFunction);

let finSconedLargest = [1, 3, 4, 4, 5]

function finSconedLargestVlaue(ele) {
    let larget = -Infinity
    let secondLargest = -Infinity

    for (let i = 1; i < ele.length; i++) {
        if (ele[i] > larget) {
            secondLargest = larget
            larget = ele[i]
        }
        else if (ele[i] > secondLargest) {
            secondLargest = ele[i]
        }
    }
    return secondLargest

}

let finalOutut = finSconedLargestVlaue(finSconedLargest)
console.log('finalOutut :>> ', finalOutut);