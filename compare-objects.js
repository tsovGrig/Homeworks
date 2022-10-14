let objFirst = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln'

  },
  a: [1, 5, 6]
}

let objSecond = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln'
  },
  a: [1, 5, 6]


}


function areObjectsEqual(objectFirst, objectSecond) {

  let keysFirstObj = Object.keys(objectFirst);
  let keysSecondObj = Object.keys(objectSecond);
  let valueFirstObj = Object.values(objectFirst);
  let valueSecondObj = Object.values(objectSecond);
  let exist = true;


  if (keysFirstObj.length !== keysSecondObj.length) {
    exist = false;
  }


  for (let i = 0; i < keysSecondObj.length; i++) {
    if (!(keysFirstObj[i] in objectSecond)) {
      exist = false;
      break;
    } else {
      exist = compare(objectSecond[keysFirstObj[i]], valueFirstObj[i], exist);
    }
  }

  return exist;
}


function compare(fistvalue, secondvalue, exist) {

  if (!(fistvalue === secondvalue)) {

    if (typeof (fistvalue) === 'object' && typeof (secondvalue === 'object')) {

      if (Array.isArray(fistvalue) && (Array.isArray(secondvalue))) {
        // console.log('we are arrays');

        if (JSON.stringify(fistvalue) !== JSON.stringify(secondvalue)) {
          exist = false;
        }

      } else {
        let result = areObjectsEqual(fistvalue, secondvalue);
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