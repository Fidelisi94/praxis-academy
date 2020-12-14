const numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map((number) => {return number *9} );

console.log(doubledNumbers);

const names = [
    {firstName: "fidelis", lastName: "tito"},
    {firstName: "budi", lastName: "mulya"},
    {firstName: "laut", lastName: "biru"}
];

const fullNames = names.map((name) => {return name.firstName+""+name.lastName});

console.log(fullNames);