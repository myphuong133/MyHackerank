function checkConvention(name, typeFile) {
    if (typeFile.toUpperCase() === "package".toUpperCase()) {
        return /^[a-z_][a-z0-9_]*$/.test(name); // snake_case
    } else if (typeFile.toUpperCase() === "class".toUpperCase()) {
        return /^[A-Z][a-zA-Z0-9]*$/.test(name); // PascalCase
    } else if (typeFile.toUpperCase() === "field".toUpperCase() || typeFile.toUpperCase() === "method".toUpperCase()) {
        return /^[a-z][a-zA-Z0-9]*$/.test(name); // camelCase
    } else {
        return false; // Unknown type
    }
}
// if (typeFile.localeCompare("package")) {
//     return /^[a-z_][a-z0-9_]*$/.test(name); // snake_case
// } else if (typeFile.localeCompare("class")) {
//     return /^[A-Z][a-zA-Z0-9]*$/.test(name); // PascalCase
// } else if (typeFile.localeCompare("field") || typeFile.localeCompare("method")) {
//     return /^[a-z][a-zA-Z0-9]*$/.test(name); // camelCase
// } else {
//     return false; // Unknown type
// }
console.log(checkConvention("my_package", "package")); // true
console.log(checkConvention("MyClass", "class")); // true
console.log(checkConvention("myField", "field")); // true
console.log(checkConvention("myMethod", "method")); // true

console.log(checkConvention("this_is_my_variable", "field")); // true (underscore)
console.log(checkConvention("thisIsMyVariable", "field")); // true (camelCase)
console.log(checkConvention("ThisIsMyVariable", "class")); // true (PascalCase)

console.log(checkConvention("Invalid-package", "package")); // false
console.log(checkConvention("invalid_Class", "class")); // false
console.log(checkConvention("Invalid_Field", "field")); // false
console.log(checkConvention("invalid_Method", "method")); // false
console.log(checkConvention("invalidName", "unknown")); // false
