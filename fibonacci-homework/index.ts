let first: number = 0;
let second: number = 1;
let result: number = 0;

function fibonacci(num: number): number{

    if(num < 2) {
        return num;
    }

    let i:number = 2;

    while (i<=num){
        result = first + second;
        first = second;
        second = result;
        i++;
    }
    return result;
}

console.log(fibonacci(6));

function fibonacciRec(num:number):any {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacciRec(num-1) + fibonacciRec(num - 2);
    }
}

console.log(fibonacciRec(6));