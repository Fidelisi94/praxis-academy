//const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];
//console.log(animals.length);

//for (let i = 0; i < animals.length; i++) {
    //console.log(animals[i]);
  //}  

const animals = [
    {nama: "babi", umur: 21},
    {nama: "anjing", umur: 22},
    {nama: "kucing", umur: 25},
];

for (let i = 0; i < animals.length; i++ ){
    
     console.log(animals[i].nama)

     console.log(`nama saya adalah ${animals[i].nama}`);
    console.log(`umur saya adalah ${animals[i].umur}`);
}
