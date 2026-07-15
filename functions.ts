function add(a: number, b: number): number {
    return a + b;
}

function message(name: string): void {
    console.log(`Hello, ${name}!`);
}

// The `never` type represents values that never occur.
// For example, a function that always throws an error or a function that never returns will have a return type of `never`.
function logErrorAndTrow(message: string): never {
    console.error(message);
    throw new Error(message);
}

// Regular function expression.
const logMsg = (msg: string): void => {
    console.log(msg);
};

// Define variable with a function type.
function performJob(cb: Function) {
    // ... perform some job
    cb();
}

// Define variable with a function type, more specific.
function performJob2(cb: (m: string) => void) {
    // ... perform some job
    cb("Job done!");
}
performJob2(logMsg);

// Define a class type.
type User = {
    name: string;
    age: number;
    greet: (name: string) => string;
};
let user: User = {
    name: "Alice",
    age: 30,
    greet: (name: string) => {
        console.log(`Hello, ${name}!`);
        return `Hello, ${name}!`;
    },
};
user.greet("Bob");
