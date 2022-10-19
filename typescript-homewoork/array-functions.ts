//FIND
function find(arr: any[], callback:(val:any, i:number, arr:any)=>{}):any{
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i];
        }
    }
    return undefined;
}

let findFunc = find([3,7,5,2], (val, i, arr)=>{
    return val === 7;
});
//console.log(findFunc);



//FIND INDEX
function findIndex(arr:any[], callback:(val:any, i:number, arr:any[])=>{}):number{
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}
let findIndexFunc:number = findIndex([9,'test1',2], (val, i, arr)=>{
    return val>100000;
});
console.log(findIndexFunc);



//FOR EACH
function foreach(arr:any[], callback:(val:any, i:number, arr:any[])=>void):void{
    for(let i=0; i<arr.length; i++){
        callback(arr[i], i, arr)
    }
}

foreach([3,7,5,2], (val, i, arr)=>{
    //console.log(val);
});



//SOME
function some(arr:any[], callback:(val:any, i:number, arr:any[])=>{}):boolean{
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}


let resul:boolean= some([3,7,5,2], (val, i, arr)=>{
    return val > 4;
});
//console.log(result);






//JOIN
function joinn(arr:any[],seperator =','): string{
    let str = '';

    for(let i=0; i< arr.length; i++){
        if(i === arr.length-1){
            str+=arr[i];
        }else{
            str+=arr[i]+ seperator;
        }

    }
    return str;
}
//console.log(joinn(['cat', 2, 'frog'], '----'));




//REVERSE
function reverse(arr:any[]): any[]{
    let start = 0
    let end = arr.length -1;
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
// console.log(reverse( [3,8,'x',1]));


module.exports = {
    find,
    findIndex,
    foreach,
    some,
    joinn,
    reverse
}
