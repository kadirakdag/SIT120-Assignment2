var helloworld = 'Hello World';
console.log(helloworld[0]);

// Comparing string
let a = 'a';
let b = 'b';
if (a < b) {
    //true
    console.log(a + 'is less than' + b);
} else if (a > b) {
    console.log(a + 'is greater than' + b);
} else {
    console.log(a + 'and' + b + 'are equal');
}

// lowercase and uppercase
let c = "C";
let d = "D";

console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c + d);

// how to write long string
let longString =
    'This is a very long string which needs' +
    'to wrap across multiple lines because' +
    'otherwise my code is unreadable.';

console.log(longString);
longString =
    'This is a very long string which needs \
                    to wrap across multiple lines because \
                    otherwise my code is unreadable.';

console.log(longString);

// replacing string content
let text = "Hello World!";
let newText = text.replace("World", "People");
console.log(newtext);
