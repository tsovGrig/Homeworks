"use strict";
//TRIM
function trim(str, searchTerm, replacement) {
    let newStr = replace(str, searchTerm, replacement);
    return newStr;
}
//console.log(trim('           lets find whitespaces and trim', '  ', ''));
//SPLIT
function split(string, splitVal) {
    const resultArr = [];
    let nextVal = '';
    const splitlength = splitVal.length;
    let i = 0;
    while (i < string.length) {
        if (string[i] === splitVal[0]) {
            let split_length_remaining = splitlength - 1;
            let split_length_passed = 1;
            let similarSplit = string[i];
            while (split_length_remaining) {
                if (string[i + split_length_passed] === splitVal[split_length_passed]) {
                    similarSplit += string[i + split_length_passed];
                    split_length_passed++;
                    split_length_remaining--;
                }
                else {
                    break;
                }
            }
            if (!split_length_remaining) {
                resultArr.push(nextVal);
                nextVal = '';
            }
            else {
                nextVal += similarSplit;
            }
            i = i + split_length_passed;
        }
        else {
            nextVal += string[i];
            i++;
        }
    }
    resultArr.push(nextVal);
    return resultArr;
}
const x = split("apple-grape-orange-banana", '-');
console.log(x);
//INDEX OF,
// added position argument
function indexOf(string, searchTerm, position = 0) {
    let index = -1;
    for (let i = position; i < string.length; i++) {
        if (string[i] === searchTerm[0]) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        for (let i = 1; i < searchTerm.length; i++) {
            if (searchTerm[i] !== string[index + i]) {
                index = -1;
            }
        }
    }
    return index;
}
console.log(indexOf('lorem ipsum number  number', 'ipsum', 3));
//REPLACE
function replace(str, searchTerm, replacement) {
    let arr = split(str, searchTerm);
    return join(arr, replacement);
}
console.log(replace('text for replacing data', 'replacing', 'nnnnnn'));
function join(arr, seperator = ',') {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i];
        }
        else {
            str += arr[i] + seperator;
        }
    }
    return str;
}
