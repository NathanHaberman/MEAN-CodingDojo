function fib() {
    let num1 = 0;
    let num2 = 0;

    function nacci() {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;

        if (sum === 0){
            sum = 1;
            num1 = 0;
            num2 = sum;
        }

        console.log(sum)
    }
    return nacci
}
var fibCounter = fib();


fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"