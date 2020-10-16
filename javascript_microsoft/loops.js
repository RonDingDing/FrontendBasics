const names = ["Justin", "Sarah", "Christopher"];

console.log("\n- while loop -");
let whileIndex = 0;
while (whileIndex < names.length) {
    const name = names[whileIndex];
    console.log(name);
    whileIndex++;
}

console.log("\n- for loop -");
for (let forIndex = 0; forIndex < names.length; forIndex++) {
    const name = names[forIndex];
    console.log(name);
}

console.log("\n- for ... of loop -");
for (const name of names) {
    console.log(name);
}
