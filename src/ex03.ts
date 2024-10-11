// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.

function logDetails(data) {
  
}

// Expected output:
logDetails(["Alice", 30]) // "Name: Alice, Age: 30"
logDetails([42, "Alice"]) // "ID: 42, Name: Alice"