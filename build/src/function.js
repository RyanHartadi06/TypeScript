"use strict";
function perkalian(val1, val2) {
    return val1 * val2;
}
const result = perkalian(2, 5);
// default params
const fullName = (first, last = "Hartadi") => {
    return first + " " + last;
};
console.log(fullName("Ryan"));
// optional params
const hello = (first, last) => {
    return first + " " + last;
};
console.log(hello("Ryan"));
