// ? indicates an optional parameter.
function generateMessageError(msg?: string): string {
    if (msg) {
        return `Error: ${msg}`;
    } else {
        return "Error: An unknown error occurred.";
    }
}

// greet is an optional property of the UserG type. It may or may not be present in an object of that type.
type UserG = {
    name: string;
    age: number;
    greet?: (name: string) => string; // ? indicates an optional property.
};

let user4: UserG = {
    name: "Alice",
    age: 30,
};

let input = "";
// Return "default value" if falsy value is provided for input, otherwise return the value of input.
let receivedInput = input || "default value";
// Return "default value" if null or undefined is provided for input, otherwise return the value of input.
let receivedInput2 = input ?? "default value";
