let arrayLength = 5;
let arr1 = [];
let arr2 = Array(arrayLength);
console.log(arr1.length);
console.log(arr1 instanceof Array);
console.log(arr2.length);

let arr3 = ["A", true, 2];
console.log(arr3[0]);
console.log(arr3[1]);

let arrayLength2 = 2;
let arr4 = Array(arrayLength2);
arr4[0] = "Value at index 0";
console.log(arr4[0]);
console.log(arr4[1]);

let arr5 = ["A", true, 5];
console.log(arr5.length);
console.log(arr5[3]);
console.log(arr5[2]);
console.log(arr5[arr5.length - 1]);

let arr6 = Array(2);
arr6[1] = "Adding a value!";
console.log(arr6[1]);
console.log(arr6[arr6.length - 1]);
console.log(arr6[0]);

console.log("\n- Adding data during creation -");
let arr7 = ["A", true, 2];
console.log(arr7[0]);
console.log(arr7[1]);

console.log("\n- Adding data after creation -");
let arrayLength3 = 2;
let arr8 = Array(arrayLength3);
arr8[0] = "Value at index 0";
console.log(arr8[0]);
console.log(arr8[1]);


console.log('- Length and index part 2');
let arr9 = Array(3);
arr9[2] = "Adding a value!";
console.log(arr9[2]);
console.log(arr9[arr9.length -1]);
console.log(arr9[0]);
console.log(arr9[1]);