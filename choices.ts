// There is no enumeration in javascript, but TypeScript provides a way to define enumerations using the `enum` keyword. Enumerations allow you to define a set of named constants, which can be used to represent a collection of related values.
enum Role {
    User,
    Admin,
    Guest,
}

let userRole: Role = Role.User;
let guestRole: Role = Role.Guest;

if (userRole === Role.User) {
    console.log("User role");
}

// More used thean enumerations, union types are more flexible and can be used with any type, not just numbers or strings.
let postStatus: "draft" | "published" | "archived";
postStatus = "draft";

let someValue: [-1 | 1, "left" | "right"];
someValue = [1, "right"];

// Aliases can be used to create more complex types, such as objects or arrays, and can be reused throughout your codebase.
type User = "Admin" | "User" | "Guest";
let currentUser: User = "Admin";
