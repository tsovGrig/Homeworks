var first = 0;
var second = 1;
var result = 0;
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    var i = 2;
    while (i <= num) {
        result = first + second;
        first = second;
        second = result;
        i++;
    }
    return result;
}
console.log(fibonacci(6));
function fibonacciRec(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacciRec(num - 1) + fibonacciRec(num - 2);
    }
}
console.log(fibonacciRec(6));
