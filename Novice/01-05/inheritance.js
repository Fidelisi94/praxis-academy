class Hewan {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("hui");
    }
    info(){
        console.log(`my name is ${this.name}`);
        console.log(`i am ${this.age} years old`);
    }
}

class Dog extends Hewan {
    
    getHumanAge (){
        return this.age *7;
    }
}

const dog = new Dog("leo",4);

const humanAge = dog.getHumanAge();

console.log(humanAge);