let objFirst = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln',
    ar:[1,2,[2,1],{
      u:[3, {test:2}]
    }]

  }
}

let objSecond = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln',
    ar:[1,2,[2,1], {
      u:[3, {test:1}]
    }],

  }
}


function areObjectsEqual(objectFirst, objectSecond) {

  let keysFirstObj = Object.keys(objectFirst);
  let keysSecondObj = Object.keys(objectSecond);
  let valueFirstObj = Object.values(objectFirst);
  let exist = true;


  if (keysFirstObj.length !== keysSecondObj.length) {
    exist = false;
  }


  for (let i = 0; i < keysFirstObj.length; i++) {
    if (!(keysFirstObj[i] in objectSecond)) {
      exist = false;
      break;
    } else {
      exist = compare(objectSecond[keysFirstObj[i]], valueFirstObj[i], exist);
    }
  }

  return exist;
}


function compare(firstvalue, secondvalue, exist) {


  if (firstvalue.length !== secondvalue.length) {
    exist = false;
  }



  if (!(firstvalue === secondvalue)) {
    if (typeof (firstvalue) === 'object' && typeof (secondvalue === 'object')) {
      if (Array.isArray(firstvalue) && (Array.isArray(secondvalue))) {
        let firstObjArr = [];
        let secondObjArr = [];
        let firstArr = [];
        let secondArr = [];


        for (let i = 0; i < firstvalue.length; i++) {
          if (typeof firstvalue[i] === 'object') {
            if (Array.isArray(firstvalue[i])) {
              firstArr.push(firstvalue[i]);
            } else {
              firstObjArr.push(firstvalue[i]);
            }

          } else {
            if (!secondvalue.includes(firstvalue[i])) {
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
            if (!firstvalue.includes(secondvalue[i])) {
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
                let result = areObjectsEqual(firstObjArr[i], secondObjArr[i]);
                if (result === false) {
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
                  let result = compare(firstArr[i], secondArr[j], exist);
                  if (result === false) {
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
        let result = areObjectsEqual(firstvalue, secondvalue);
        if (result === false) {
          exist = false;
        }
      }
    } else {
      exist = false;
    }
  }
  return exist;
}

let result = areObjectsEqual(objFirst, objSecond);
console.log(result);