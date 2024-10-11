// Create a function `transformInput` that accepts either a string or a number. 
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.

function transformInput(x: string):string
function transformInput(x: number):number
function transformInput(x:any):any {
  if(typeof x === "string"){
    return x.split("").reverse().join("");
  }else if(typeof x === "number"){
    return factorial(x)
  }else {
    throw new Error("Unsupported input type. Please provide a string or a non-negative integer.");
}
}

function factorial(x:number):number{
  let ans = 1; 
    
  if(x === 0)
      return 1;
  for (let i = 2; i <= x; i++){
    ans = ans * i; 
  }
  return ans; 
}

// Expected output:
transformInput("TypeScript") // "tpircSepyT"
transformInput(5) // 120
