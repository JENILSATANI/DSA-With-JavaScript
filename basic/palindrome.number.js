let string = 11112111121

function stringReverse(n) {

    let output =n;
    let revese =0


   while(n>0){
    let digit=n%10
    revese = revese * 10 + digit;
    n=Math.floor(n/10)
   }
    return output===revese;

}

let result = stringReverse(string)
console.log('result :>> ', result);

//rever return so two in one