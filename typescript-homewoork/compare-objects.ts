let objFirst = {
    name: "Ani",
    age: 23,
    ob: {
        m: 'ln',
        ar: [1, 2, [2, 1], {
            u: [3, {test: 2}]
        }]

    }
}

let objSecond = {
    name: "Ani",
    age: 23,
    ob: {
        m: 'ln',
        ar: [1, 2, [2, 1], {
            u: [3, {test: 1}]
        }],

    }
}


function areObjectsEqual(objectFirst: object, objectSecond: object) {

    let keysFirstObj:string[] = Object.keys(objectFirst);
    let keysSecondObj: string[] = Object.keys(objectSecond);

    let valueFirstObj = Object.values(objectFirst);
    let exist:boolean = true;


    if (keysFirstObj.length !== keysSecondObj.length) {
        exist = false;
    }


    for (let i = 0; i < keysFirstObj.length; i++) {
        if (typeof objectSecond === 'object') {
            if (!(keysFirstObj[i] in objectSecond)) {
                exist = false;
                break;
            }
        } else {
            exist = compare(objectSecond[keysFirstObj[i]], valueFirstObj[i], exist);
        }
    }

    return exist;
}


function compare(firstvalue: any, secondvalue: any, exist: boolean) {


    if (firstvalue.length !== secondvalue.length) {
        exist = false;
    }


    if (!(firstvalue === secondvalue)) {

        if(!(isNaN(firstvalue) && isNaN(secondvalue))){
            exist = false;
        }
        if (typeof (firstvalue) === 'object' && typeof (secondvalue === 'object')) {
            if (Array.isArray(firstvalue) && (Array.isArray(secondvalue))) {
                let firstObjArr:any[] = [];
                let secondObjArr:any[] = [];
                let firstArr:any[] = [];
                let secondArr:any[] = [];


                for (let i = 0; i < firstvalue.length; i++) {
                    if (typeof firstvalue[i] === 'object') {
                        if (Array.isArray(firstvalue[i])) {
                            firstArr.push(firstvalue[i]);
                        } else {
                            firstObjArr.push(firstvalue[i]);
                        }

                    } else {
                        if (secondvalue.indexOf(firstvalue[i]) === -1) {
                            exist = false;
                            break;
                        }
                    }
                }


                for (let i = 0; i < secondvalue.length; i++) {
                    if (typeof secondvalue[i] === 'object') {
                        if (Array.isArray(secondvalue[i])) {
                            secondArr.push(secondvalue[i]);
                        } else {
                            secondObjArr.push(secondvalue[i]);
                        }
                    } else {

                        if (firstvalue.indexOf(secondvalue[i]) === -1) {
                            exist = false;
                            break;
                        }
                    }
                }

                if (firstObjArr.length !== 0 && secondObjArr.length !== 0) {
                    if (firstObjArr.length !== secondObjArr.length) {
                        exist = false;
                    } else {
                        for (let i = 0; i < firstObjArr.length; i++) {
                            for (let j = 0; j < secondObjArr.length; j++) {
                                let result:boolean = areObjectsEqual(firstObjArr[i], secondObjArr[i]);
                                if (!result) {
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
                    } else {
                        for (let i = 0; i < firstArr.length; i++) {
                            for (let j = 0; j < secondArr.length; j++) {
                                let result:boolean = compare(firstArr[i], secondArr[j], exist);
                                if (!result) {
                                    exist = false;
                                    break;
                                }
                            }
                        }
                    }
                }

                // console.log(firstArr);
                // console.log(secondArr);
            } else {
                let result: boolean = areObjectsEqual(firstvalue, secondvalue);
                if (!result) {
                    exist = false;
                }
            }
        } else {
            exist = false;
        }
    }
    return exist;
}

let result:boolean = areObjectsEqual(objFirst, objSecond);
console.log(result);