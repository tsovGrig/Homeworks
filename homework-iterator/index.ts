const object:any = {
    first: 10,
    second: 20,
    third:30,
    forth:40,
    [Symbol.iterator]:  ()=> {
        const numberArray:number[] = Object.values(object);
        let i = 0;
        let old:number = numberArray[i];
        let newOne:number = numberArray[i+1];
        return {
            next: () => {
                if(i++ < numberArray.length -1 ){
                    old = old + newOne;
                    return {
                        value:old,
                        done:false,
                    };

                }else{
                    return{
                        done: true,
                    };
                }

            }
        };
    }
};


for (let item of object) {
    console.log(item);
}