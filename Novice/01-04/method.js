class Hewan {
    constructor(name,age) {
        this.name = name,
        this.age = age
    }

    greet(){
        console.log("halo");
    }

    info(){
        console.log(`nama saya adalah ${this.name}`);
        console.log(`umur saya adalah ${this.age}`);
    }

}

const hewan = new Hewan("leo",3);
hewan.greet();

hewan.info();