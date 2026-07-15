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
