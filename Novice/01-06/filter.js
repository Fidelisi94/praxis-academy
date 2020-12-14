const numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter((number) => {return number % 2 === 0});

console.log(evenNumbers);

const characters = [
    {id: 1, nama: "tito", age: 88},
    {id: 2, nama: "budi", age: 22},
    {id: 3, nama: "tini", age: 28},
    {id: 4, nama: "cinta", age: 59}
];

const overTwenty = characters.filter((character) => {return character.age > 20});

console.log(overTwenty);

//untuk menyaring semua nilai dan mendapatkan kondisi tertendu denan return