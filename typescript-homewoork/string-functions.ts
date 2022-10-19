//TRIM
function trim(str:string, searchTerm:string, replacement:string) {
    let newStr  = replace(str, searchTerm, replacement);
    return newStr;
}
//console.log(trim('           lets find whitespaces and trim', '  ', ''));




//SPLIT
function split(string:string, splitVal:string):any[] {
    const resultArr:any[] = [];
    let nextVal:string = '';
    const splitlength:number = splitVal.length;
    let i:number = 0;

    while (i < string.length) {
        if (string[i] === splitVal[0]) {
            let split_length_remaining:number = splitlength - 1;
            let split_length_passed:number = 1;
            let similarSplit:string = string[i];
            while (split_length_remaining) {
                if (string[i + split_length_passed] === splitVal[split_length_passed]) {
                    similarSplit += string[i + split_length_passed];
                    split_length_passed++;
                    split_length_remaining--;
                } else {
                    break;
                }
            }
            if (!split_length_remaining) {
                resultArr.push(nextVal);
                nextVal = '';
            } else {
                nextVal += similarSplit;
            }
            i = i + split_length_passed;
        } else {
            nextVal += string[i];
            i++;
        }
    }

    resultArr.push(nextVal);
    return resultArr;
}
const x = split("apple-grape-orange-banana",'-');
console.log(x);




//INDEX OF,
// added position argument
function indexOf(string:string, searchTerm:string, position:number = 0):number {
    let index:number = -1;

    for (let i:number = position; i < string.length; i++) {
        if (string[i] === searchTerm[0]) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        for (let i:number = 1; i < searchTerm.length; i++) {
            if(searchTerm[i] !== string[index+i]){
                index = -1;
            }
        }
    }
    return index;
}
console.log(indexOf('lorem ipsum number  number', 'ipsum', 3));




//REPLACE
function replace(str:string, searchTerm:string, replacement:string):string{
    let arr:any[] = split(str,searchTerm);
    return join(arr, replacement);
}
console.log(replace('text for replacing data', 'replacing', 'nnnnnn'));



function join(arr:any[],seperator:string =','):string{
    let str:string = '';

    for(let i=0; i< arr.length; i++){
        if(i === arr.length-1){
            str +=arr[i];
        }else{
            str+= arr[i]+ seperator;
        }

    }
    return str;
}