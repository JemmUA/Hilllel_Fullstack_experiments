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
5
console.log("Remainder of division - age % 10 :", age % 10)

console.log("There is not  integer division")

console.log("Comparing operator == trys to cast - '10' == 10:", '10' == 10);
console.log("Comparing operator != trys to cast - '10' != 10:", '10' != 10);
console.log("Comparing operator === compares as is '10' === 10:", '10' === 10);
console.log("Comparing operator !== compares as is '10' !== 10:", '10' !== 10);
console.log("5 < 3 :", 5 < 3);
console.log("7 <= 7 :", 7 <= 7);
console.log("1==1 && 3==3 :", 1==1 && 3==3);
console.log("1==1 && 3==10 :", 1==1 && 3==10);
console.log("true && false  &&  false && false :", true && false  &&  false && false);
console.log("1 && false  &&  false && false :", 1 && false  &&  false && false);
console.log("true || false  ||  false || false :", true || false  ||  false || false);
console.log("1 || false  ||  false || false :", 1 || false  ||  false || false );

console.log("Math.max(3,4):", Math.max(3,4));
console.log("Math.min(3,4):", Math.min(3,4));
console.log("Math.PI:", Math.PI);
console.log("Math.round(35.4999):", Math.round(35.4999));
console.log("Math.round(35.5000):", Math.round(35.5000));
console.log("Math.ceil(35.0000):", Math.ceil(35.0000));
console.log("Math.ceil(35.0001):", Math.ceil(35.0001));
console.log("Math.floor(35.33333 * 100) / 100:", Math.floor(35.33333 * 100) / 100);
console.log("Math.floor(35.33333)", Math.floor(35.33333));
console.log("Math.floor(-35.33333)", Math.floor(-35.33333));
console.log("Math.trunc(35.33333)", Math.trunc(35.33333));
console.log("Math.trunc(-35.33333)", Math.trunc(-35.33333));
console.log("Math.sqrt(9):", Math.sqrt(9));
console.log("Math.pow(5, 3):", Math.pow(5,3));
console.log("5**3:", 5**3);
console.log("Math.sin(9):", Math.sin(9));
console.log("Math.cos(9):", Math.cos(9));
console.log("Math.random()", Math.random());
console.log("Math.floor(Math.random()*3)", Math.floor(Math.random()*3));
console.log("Math.ceil(Math.random()*3)", Math.ceil(Math.random()*3));

console.log("Васил\'ь\'\\");

console.log("Hello, " + user);
console.log(`Hello, ${user}`); // ${} in ``
const message = `Hello, ${user}`;
console.log("message.charAt(7):", message.charAt(7));
console.log("message[7]:", message[7]);
console.log("message.substring(7,12):", message.substring(7,12));
console.log("message.slice(-7,-2)", message.slice(-7,-2));
console.log("message.slice(7)", message.slice(7));
console.log("message.slice(-3)", message.slice(-3));

console.log("message.toUpperCase():", message.toUpperCase());
console.log("\"JiseIJLKj\".toLowerCase():", "JiseIJLKj".toLowerCase());
console.log("message.indexOf(\"Olek\")", message.indexOf("Olek"));
console.log("message.replace(\"Hello\",\"Привіт\"):", message.replace("Hello","Привіт"));
console.log("message.replaceAll(\"l\",\"LL\"):", message.replaceAll("l","LL"));
console.log(message.split(" "));
const helloMessageArray = message.split(" ");
console.log("Array:",helloMessageArray);
console.log("Amount of words: ", message.split(" ").length);
console.log("helloMessageArray.join(\"|\")", helloMessageArray.join("|"));
console.log("Chain: message.split(\" \").join(\"___\"):",message.split(" ").join("___"));
console.log("message.includes(\"Ole\"):", message.includes("Ole"));