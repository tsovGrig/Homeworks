//TRIM
function trim(str, searchTerm, replacement) {
    var newStr = replace(str, searchTerm, replacement);
    return newStr;
}
//console.log(trim('           lets find whitespaces and trim', '  ', ''));
//SPLIT
function split(string, splitVal) {
    var resultArr = [];
    var nextVal = '';
    var splitlength = splitVal.length;
    var i = 0;
    while (i < string.length) {
        if (string[i] === splitVal[0]) {
            var split_length_remaining = splitlength - 1;
            var split_length_passed = 1;
            var similarSplit = string[i];
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
var x = split("apple-grape-orange-banana", '-');
console.log(x);
//INDEX OF,
// added position argument
function indexOf(string, searchTerm, position) {
    if (position === void 0) { position = 0; }
    var index = -1;
    for (var i = position; i < string.length; i++) {
        if (string[i] === searchTerm[0]) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        for (var i = 1; i < searchTerm.length; i++) {
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
    var arr = split(str, searchTerm);
    return join(arr, replacement);
}
console.log(replace('text for replacing data', 'replacing', 'nnnnnn'));
function join(arr, seperator) {
    if (seperator === void 0) { seperator = ','; }
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i];
        }
        else {
            str += arr[i] + seperator;
        }
    }
    return str;
}
