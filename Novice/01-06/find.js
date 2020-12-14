const numbers = [1,3,5,7,9];

const foundNumber = numbers.find((number) => {return number % 3 === 0});

console.log(foundNumber);

const characters = [
    {id: 1, name: "tito", age: 21},
    {id: 2, name: "budi", age: 42},
    {id: 3, name: "ian", age: 74},
    {id: 4, name: "tio", age: 50},
];

const foundCharacter = characters.find((character) => {return character.age === 21});

console.log(foundCharacter);

//untuk mengembalikan nilai pertama dalam array