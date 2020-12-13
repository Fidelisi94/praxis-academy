//class Hewan{
  //  constructor(name, age){
    //    this.name = "cicak";
     //   this.age = 5;
    //}
    //greet(){
      //  console.log("hola");
    //}
//}
//const hewan = new Hewan("cicak", 5);
//hewan.greet();

//class Hewan{
  //  constructor(name, age){
    //    this.name = "jerapah";
      //  this.age = 96;
    //}
    //info(){
      //  console.log(`nama saya adalaha ${this.name}`);
    //}
//}
//const hewan = new Hewan("jerapah", 96);
//hewan.info();
class Hewan{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("hae");
    }
    info(){
        console.log(`nama saya adalah ${this.name}`);
        console.log(`umurku sudah ${this.age}`);
    }
}
const hewan = new Hewan("kijang", 55);
hewan.greet();
hewan.info();