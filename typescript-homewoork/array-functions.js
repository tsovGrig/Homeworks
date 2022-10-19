//FIND
function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
var findFunc = find([3, 7, 5, 2], function (val, i, arr) {
    return val === 7;
});
//console.log(findFunc);
//FIND INDEX
function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
var findIndexFunc = findIndex([9, 'test1', 2], function (val, i, arr) {
    return val > 100000;
});
console.log(findIndexFunc);
//FOR EACH
function foreach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
foreach([3, 7, 5, 2], function (val, i, arr) {
    //console.log(val);
});
//SOME
function some(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
var resul = some([3, 7, 5, 2], function (val, i, arr) {
    return val > 4;
});
//console.log(result);
//JOIN
function joinn(arr, seperator) {
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
//console.log(joinn(['cat', 2, 'frog'], '----'));
//REVERSE
function reverse(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
// console.log(reverse( [3,8,'x',1]));
module.exports = {
    find: find,
    findIndex: findIndex,
    foreach: foreach,
    some: some,
    joinn: joinn,
    reverse: reverse
};
