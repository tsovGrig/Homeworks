"use strict";
var AnimalType;
(function (AnimalType) {
    AnimalType["MAMALS"] = "mamals";
    AnimalType["BIRDS"] = "birds";
    AnimalType["REPTILES"] = "reptiles";
    AnimalType["AMPHIBANS"] = "amphibans";
    AnimalType["INVERTEBRATES"] = "invertebrates";
    AnimalType["FISH"] = "fish";
})(AnimalType || (AnimalType = {}));
var DogType;
(function (DogType) {
    DogType["Hasky"] = "hasky";
    DogType["Pekines"] = "pekines";
})(DogType || (DogType = {}));
var SizeEnum;
(function (SizeEnum) {
    SizeEnum["SMALL"] = "Small";
    SizeEnum["MEDIUM"] = "Medium";
    SizeEnum["BIG"] = "Big";
})(SizeEnum || (SizeEnum = {}));
class Animal {
    constructor(type, name, meals) {
        this._animalType = type;
        this._name = name;
        this._meals = meals;
    }
    eat() {
    }
    makeNoise() {
    }
    sleep() {
    }
}
class Parrot extends Animal {
    constructor(type, name, meals, voice) {
        super(type, name, meals);
        this._voice = voice;
    }
    makeNoice() {
        console.log(`Parrot says ${this._voice}`);
    }
}
let parrot = new Parrot(AnimalType.BIRDS, 'Picky', ['corn', 'apple', 'vigitable'], 'click-click');
console.log(parrot);
class Dog extends Animal {
    constructor(type, name, meals, size, voice, loyal, clean, color) {
        super(type, name, meals);
        this.loyal = loyal;
        this.clean = clean;
        this.color = color;
        this._size = size;
        this._voice = voice;
    }
    makeNoise() {
        console.log(`Dog says ${this._voice}`);
    }
    run() {
        console.log(`${this._size} size ${this.color} dog named  ${this._name} is running.`);
    }
}
const dog = new Dog(AnimalType.MAMALS, 'Sunny', ['meat', 'bread', 'milk'], SizeEnum.MEDIUM, 'huf-huf', true, true, 'white');
dog.makeNoise();
dog.run();
console.log(dog);
class Hasky extends Dog {
}
