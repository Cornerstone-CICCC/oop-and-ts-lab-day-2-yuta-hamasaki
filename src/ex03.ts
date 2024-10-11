// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.

function logDetails(data:[string, number]):void
function logDetails(data:[number, string]):void
function logDetails(data: any):void {
  if(typeof data[0] === "string"){
    const [name, age] = data;
    console.log(`Name: ${name}, Age: ${age}`);
  }

}

// Expected output:
logDetails(["Alice", 30]) // "Name: Alice, Age: 30"
logDetails([42, "Alice"]) // "ID: 42, Name: Alice"