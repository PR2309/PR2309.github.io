// Console Methods

// 🔹console.log()
// Purpose: General output of information.
// Use Case: For debugging or showing general messages.
// Example:
console.log("This is a log message.");

// 🔹console.error()
// Purpose: Outputs error messages.
// Use Case: When something has gone wrong.
// Visual: Often displays in red in developer tools.
// Example:
console.error("This is an error message.");

// 🔹console.warn()
// Purpose: Outputs warning messages.
// Use Case: For non-critical issues or deprecations.
// Visual: Usually yellow or orange in the console.
// Example:
console.warn("This is a warning.");

// 🔹console.info()
// Purpose: Similar to log, but intended for informational messages.
// Use Case: To differentiate general info from debug logs.
// Visual: Often styled differently (varies by browser).
// Example:
console.info("This is an informational message.");

// 🔹console.debug()
// Purpose: Specifically for debugging.
// Use Case: Lower-level debug messages.
// Visual: Might be hidden by default unless console is set to show verbose logs.
// Example:
console.debug("Debugging details.");

// 🔹console.table()
// Purpose: Displays data as a table.
// Use Case: When logging arrays or objects to see structure clearly.
// Example:
console.table([{ name: "Alice" }, { name: "Bob" }]);

//🔹console.trace()
// Purpose: Outputs a stack trace to show the path through the code.
// Use Case: Useful for debugging where a function was called from.
// Example:
function test() {
  console.trace("Trace call");
}
test();


// OPtional Chaining