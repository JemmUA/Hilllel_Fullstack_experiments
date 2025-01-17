let x = true;

if ((x > 0) && (typeof x == "number")) {
    console.log("x more then 0");
} else if (x === 0) {
    console.log("x equals 0");
} else {
    console.log("x less then 0 or is not a number");
}

if (typeof x == "number") {
    console.log(`x == ${x} ...Number is a`, typeof x);
} else {
    console.log(`x = ${x}, is a`, typeof x);
}