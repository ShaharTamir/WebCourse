// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.forEach((cell) => {
    if(cell.includes('John'))
    {
        console.log(cell);
    }});


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = (x) => x**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result // because it's too large.

console.log(pow100(10000));

