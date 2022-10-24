enum AnimalType{
    MAMALS= 'mamals',
    BIRDS = 'birds',
    REPTILES = 'reptiles',
    AMPHIBANS = 'amphibans',
    INVERTEBRATES = 'invertebrates',
    FISH = 'fish'

}

enum DogType{
    Hasky='hasky',
    Pekines='pekines'
}


enum SizeEnum{
    SMALL='Small',
    MEDIUM='Medium',
    BIG='Big'
}

interface characteristics{
    loyal:boolean,
    clean:boolean,
    color:string,
    run:()=>void

}




class Animal {
    protected _animalType!:AnimalType;
    protected _name!:string;
    protected _meals!:string[];

    constructor(type:AnimalType, name:string, meals:string[]){
        this._animalType = type;
        this._name = name;
        this._meals = meals;

    }


    public eat(){

    }

    public makeNoise(){

    }

    public sleep(){

    }
}





class Parrot extends Animal{
    protected _voice!:string;

    constructor(type:AnimalType, name:string, meals:string[], voice:string){
        super(type, name, meals);
        this._voice = voice;
    }

    public makeNoice(){
        console.log(`Parrot says ${this._voice}`)
    }


}

let parrot = new Parrot(AnimalType.BIRDS, 'Picky', ['corn', 'apple', 'vigitable'], 'click-click');
console.log(parrot);



class Dog extends Animal implements characteristics{
    public loyal!:boolean;
    public clean!:boolean;
    public color!:string;
    protected _size!:SizeEnum;
    protected _voice!: string;
    protected _type!:AnimalType;
    protected _name!:string;
    protected _meals!:string[];


    constructor(type:AnimalType, name:string, meals:string[],size:SizeEnum, voice:string, loyal:boolean, clean:boolean,color:string ){
        super(type, name, meals);
        this.loyal = loyal;
        this.clean = clean;
        this.color = color;
        this._size = size;
        this._voice =voice;

    }
    public makeNoise(){
        console.log(`Dog says ${this._voice}`)
    }

    public run():void{
        console.log(`${this._size} size ${this.color} dog named  ${this._name} is running.`)
    }
}

const dog = new Dog(AnimalType.MAMALS, 'Sunny', ['meat', 'bread', 'milk'], SizeEnum.MEDIUM, 'huf-huf', true, true, 'white');
dog.makeNoise();
dog.run();
console.log(dog);

class Hasky extends Dog{
    private dogtype:DogType;
}