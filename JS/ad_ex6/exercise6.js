//Evaluate these:
//#1
[2] === [2] // false
{} === {} // err

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // --> 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4; // 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


class Animal {
    constructor(type, color, name) {
        this.type = type;
        this.color = color;
        this.name = name;
    }
}

class Mamal extends Animal {
    constructor(type, color, name, sound) {
        super(type, color, name);
        this.sound = sound;
    }

    Sound() {
        console.log(`I'm a ${this.type}!, my name is ${this.name} and this is my sound: ${this.sound}`);
    }
}

const cow = new Mamal("cow", "black", "jessy", "moooooo");
cow.Sound();