const user= "Oleksiy";
let isAdmin;
let age= 41;
let acceptedAge = "41";

isAdmin = true;
console.log(user);
age=age + 1;
age+=1;


console.log("Тип данних 'user':", typeof user);
console.log("User", user, "is admin:"+" ", isAdmin);
console.log("Тип данних 'isAdmin':", typeof isAdmin);
console.log("Тип данних 'age':", typeof age);
console.log("Тип данних 'acceptedAge':", typeof acceptedAge);
console.log(age);
console.log(age++);
console.log(age);
console.log(++age);
console.log(age);
const userInfo= user + " віком " + age;
console.log(userInfo);

const numbersArr = [1,2,3];
numbersArr[5] = 5;
console.log(numbersArr[4]);
delete numbersArr[0];
console.log(numbersArr);

Object.freeze(numbersArr);
console.log("user.length: ", user.length);
console.log("-user.length: ", -user.length);
console.log("operator didn't change variable - user.length:", user.length);
console.log("Array numbersArr length: ", numbersArr.length);

console.log("acceptedAge  + 11: ", acceptedAge  + 11)
console.log("+ converts string to number if it possible - +acceptedAge  + 11: ",+acceptedAge + 11)
console.log("NaN - not a number: +user:", +user);
console.log("NaN never equals NaN - +user===+user:", +user===+user);

