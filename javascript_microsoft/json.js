const book = Object({
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
});
console.log("\n ----- ");
console.log(typeof book);
console.log(book);

const myBooks = [
    new Object({ title: "1984", author: "George Orwell" }),
    new Object({ title: "Becoming", author: "Michelle Obama" }),
    new Object({ title: "Snow Crash", author: "Neal Stephenson" }),
    new Object({ title: "Predictably Irrational", author: "Dan Ariely" }),
];

console.log("\n ----- ");
console.log(typeof myBooks);
console.log(myBooks);

console.log("\n ----- ");
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);

console.log("\n ----- ");
let myBookJSON = JSON.stringify(myBooks);
console.log(myBookJSON);

let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n ----- ");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);

data = myBookJSON;
parsed = JSON.parse(data);
console.log("\n ----- ");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);
console.log("Author of 2nd book: " + parsed[1].auth);
