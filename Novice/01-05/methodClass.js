//class Hewan {
  //  constructor() {
    //    console.log("halo");
    //}
//}
//const hewan1 = new Hewan();
//const hewan2 = new Hewan();

//class Hewan {
  //  constructor() {
    //    this.name = "katak";
    //}
//}
//const hewan = new Hewan();

//console.log(hewan.name);

class Hewan {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const hewan = new Hewan("leo",3);
console.log(hewan.name);
console.log(hewan.age);