// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(values: number[]): number;
function addValues(values: string[]): string;
function addValues(value:any):any {
  type strNum = string | number
  return value.reduce((acc:strNum, curr:strNum) => {
    if (typeof curr === 'number') {
      return acc as number + curr;
    } else {
      return acc + curr;
    }
  })
}

// Expected output:
addValues([1, 2, 3]) // 6
addValues(["Hello", " ", "World"]) // "Hello World"