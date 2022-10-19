var objFirst = {
    name: "Ani",
    age: 23,
    ob: {
        m: 'ln',
        ar: [1, 2, [2, 1], {
                u: [3, { test: 2 }]
            }]
    }
};
var objSecond = {
    name: "Ani",
    age: 23,
    ob: {
        m: 'ln',
        ar: [1, 2, [2, 1], {
                u: [3, { test: 2 }]
            }]
    }
};
function areObjectsEqual(objectFirst, objectSecond) {
    var keysFirstObj = Object.keys(objectFirst);
    var keysSecondObj = Object.keys(objectSecond);
    var valueFirstObj = Object.values(objectFirst);
    var exist = true;
    if (keysFirstObj.length !== keysSecondObj.length) {
        exist = false;
    }
    for (var i = 0; i < keysFirstObj.length; i++) {
        if (!(keysFirstObj[i] in objectSecond)) {
            exist = false;
            break;
        }
        else {
            exist = compare(objectSecond[keysFirstObj[i]], valueFirstObj[i], exist);
        }
    }
    return exist;
}
function compare(firstvalue, secondvalue, exist) {
    if (!(firstvalue === secondvalue)) {
        if (typeof firstvalue === 'object' && typeof secondvalue === 'object') {
            if (Array.isArray(firstvalue) && (Array.isArray(secondvalue))) {
                var firstObjArr = [];
                var secondObjArr = [];
                var firstArr = [];
                var secondArr = [];
                for (var i = 0; i < firstvalue.length; i++) {
                    if (typeof firstvalue[i] === 'object') {
                        if (Array.isArray(firstvalue[i])) {
                            firstArr.push(firstvalue[i]);
                        }
                        else {
                            firstObjArr.push(firstvalue[i]);
                        }
                    }
                    else {
                        if (!secondvalue.includes(firstvalue[i])) {
                            exist = false;
                            break;
                        }
                    }
                }
                for (var i = 0; i < secondvalue.length; i++) {
                    if (typeof secondvalue[i] === 'object') {
                        if (Array.isArray(secondvalue[i])) {
                            secondArr.push(secondvalue[i]);
                        }
                        else {
                            secondObjArr.push(secondvalue[i]);
                        }
                    }
                    else {
                        if (!firstvalue.includes(secondvalue[i])) {
                            exist = false;
                            break;
                        }
                    }
                }
                if (firstObjArr.length !== 0 && secondObjArr.length !== 0) {
                    if (firstObjArr.length !== secondObjArr.length) {
                        exist = false;
                    }
                    else {
                        for (var i = 0; i < firstObjArr.length; i++) {
                            for (var j = 0; j < secondObjArr.length; j++) {
                                var result_1 = areObjectsEqual(firstObjArr[i], secondObjArr[i]);
                                if (!result_1) {
                                    exist = false;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (firstArr.length !== 0 && secondArr.length !== 0) {
                    if (firstArr.length !== secondArr.length) {
                        exist = false;
                    }
                    else {
                        for (var i = 0; i < firstArr.length; i++) {
                            for (var j = 0; j < secondArr.length; j++) {
                                var result_2 = compare(firstArr[i], secondArr[j], exist);
                                if (!result_2) {
                                    exist = false;
                                    break;
                                }
                            }
                        }
                    }
                }
                // console.log(firstArr);
                // console.log(secondArr);
            }
            else {
                var result_3 = areObjectsEqual(firstvalue, secondvalue);
                if (!result_3) {
                    exist = false;
                }
            }
        }
        else {
            exist = false;
        }
    }
    return exist;
}
var result = areObjectsEqual(objFirst, objSecond);
console.log(result);
