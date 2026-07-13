// Infering types
let val1 = "asdf";

// Explicitly defining types
let num: number = 2;

// Only defining types for the variable, not the value
let val2: string;
val2 = "asdf";

// Using the any type
let val3: any = 3;
val3 = "asdf";

// Defining types for arrays
let val4: (string | number)[] = ["asdf", 1];
val4.push(2);
// Using the Array generic type
let val5: Array<string | number> = ["asdf", 1];
val5.push(2);

// Defining types for tuples
let val6: [string, number] = ["asdf", 1];

// Defining types for objects
let user: { name: string; age: number } = {
    name: "John",
    age: 30,
};

// Inferring types for objects
let user2 = {
    name: "John",
    age: 30,
};

// This is not a object type, but a type that can be any value except null or undefined
let val7: {} = "some text";
// This is an object type
let obj = {};

// When do not know the items of an object, we can use the Record utility type
let data: Record<string, number | string>;
data = {
    key1: "value1",
    key2: 2,
};
