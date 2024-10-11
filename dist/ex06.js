"use strict";
// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.
function addValues(value) {
    return value.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            return acc + curr;
        }
        else {
            return acc + curr;
        }
    });
}
// Expected output:
addValues([1, 2, 3]); // 6
addValues(["Hello", " ", "World"]); // "Hello World"
