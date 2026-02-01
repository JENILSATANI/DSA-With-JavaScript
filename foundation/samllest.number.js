let arr = [-1,1, 4, 5,5, 6, 7, 8,8]

function samllets(arr) {

    let output =Infinity


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <output) {
            output = arr[i]

        }
    }
    return output;

}

let result = samllets(arr)
console.log('result :>> ', result);