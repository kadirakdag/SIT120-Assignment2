let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

// find method
console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

// findIndex method
console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log(fruits.findIndex((fruit) => fruit === 'Apple1'));

// push method
console.log(fruits.push('Kiwi'));
console.log(fruits);

// pop method
console.log(fruits.pop());
console.log(fruits);

let numbers = [3, 2, 5, 4, 7];
// sorting array
console.log(numbers.sort());

// slice method
console.log(fruits.slice(1, 3));

// if one parameter is given, it will cut the rest of the array
console.log(fruits.slice(1));
console.log(fruits.slice(-1));

// forEach to iterate through the array
fruits.forEach((fruit) => console.log(fruit));
