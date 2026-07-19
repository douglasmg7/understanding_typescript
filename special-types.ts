// HTML forms input can be null.
let a: undefined | null | string;
a = undefined;
a = null;
a = "Hello, world!";

// HTML elements can be null if they are not found in the DOM.
let inputEl: HTMLElement | null;
inputEl = document.getElementById("myElement");
if (inputEl) {
    inputEl.innerHTML = "Hello, world!";
} else {
    console.log("Element not found.");
}

// The non-null assertion operator `!` can be used to tell TypeScript that a value is not null or undefined.
const inputEl2: HTMLElement = document.getElementById("myElement")!;

const inputEl3: HTMLElement | null = document.getElementById("myElement");
// The optional chaining operator `?.` can be used to safely access properties of an object that may be null or undefined.
// If a reference in the chain evaluates to null or undefined, the expression short-circuits and immediately returns undefined instead of throwing a runtime error.
console.log(inputEl3?.innerHTML);

// Type assertion can be used to tell TypeScript that a value is of a specific type.
const inputEl4 = document.getElementById(
    "myElement",
) as HTMLInputElement | null;
console.log(inputEl4?.innerHTML);

// Unknown type is a type-safe counterpart of the any type. It means that we don't know the type of a value, but we want to ensure that we handle it safely.
// In JavaScript, the syntax !!val coerces the variable val into a strict boolean value (true or false). It is often used to check if a value is truthy or falsy.
function process(val: unknown) {
    if (
        typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function"
    ) {
        val.log("Processing value");
    }
}
