let objFirst = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln'

  },

  ak: [{age:'number'}, 5, {name:'number'

  }]
}

let objSecond = {
  name: "Ani",
  age: 23,
  ob: {
    m: 'ln',
    k:''
  },
  ak: [{age:'number'}, 5, {name:'number'

  }]


}


function areObjectsEqual(objectFirst, objectSecond) {

  let keysFirstObj = Object.keys(objectFirst);
  let keysSecondObj = Object.keys(objectSecond);
  let valueFirstObj = Object.values(objectFirst);
  let valueSecondObj = Object.values(objectSecond);
  let exist = true;


  if (Object.keys(keysFirstObj).length !== Object.keys(keysSecondObj).length ) {
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


function compare(firstvalue, secondvalue, exist) {

  if (!(firstvalue === secondvalue)) {

    if (typeof (firstvalue) === 'object' && typeof (secondvalue === 'object')) {

      if (Array.isArray(firstvalue) && (Array.isArray(secondvalue))) {
        // console.log('we are arrays');
        let firstObjArr = [];
        let secondObjArr = []

        for (let i = 0; i < firstvalue.length; i++) {


          if(firstvalue.length !== secondvalue.length){
            exist = false;
          }

          if (typeof firstvalue[i] === 'object') {
            firstObjArr.push(firstvalue[i]);
          }else{
            if(!secondvalue.includes(firstvalue[i])){
              exist = false;
              break;
            }
          }
        }


        for (let i = 0; i < secondvalue.length; i++) {
          if (typeof secondvalue[i] === 'object') {
            secondObjArr.push(secondvalue[i]);
          }else{
            if(!firstvalue.includes(secondvalue[i])){
              exist = false;
              break;
            }
          }
        }


        if(firstObjArr.length !== secondObjArr.length ){
          exist = false;
        }else{
          for(let i=0; i<firstObjArr.length; i++){
            for(let j = 0; j<secondObjArr.length;j++){
              let result = areObjectsEqual(firstObjArr[i], secondObjArr[i]);
              if(result === false){
                exist = false;
              }
            }
          }
        }

        //what if  multideminsional array
        //to be continued

        console.log(firstObjArr);
        console.log(secondObjArr);


        // if (JSON.stringify(fistvalue) !== JSON.stringify(secondvalue)) {
        //   exist = false;
        //}

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