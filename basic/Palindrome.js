let string = "aaaaa"

function stringReverse(str) {

    let output = ""

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return output===str;

}

let result = stringReverse(string)
console.log('result :>> ', result);