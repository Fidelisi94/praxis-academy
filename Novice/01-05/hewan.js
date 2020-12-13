class Hewan{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hi");
    }
    info() {
        this.greet() ;
        console.log(`nama saya ${this.name}`);
        console.log(`umur saya adalah ${this.age}`);
    }
}
export default Hewan;