"use strict";
const newArr = [1, 2, 3];
const sum = newArr.reduce((one, two) => {
    return one + two;
});
console.log(sum);
let newUser = { firstName: 'John', lastName: 'Do' };
console.log(newUser);
newUser.lastName = 'Doe';
console.log(newUser);
newUser.age = 30;
console.log(newUser);
