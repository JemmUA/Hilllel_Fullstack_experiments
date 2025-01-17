let x = 0;

if ((x > 0) && (typeof x == "number")) {
    console.log("x more than 0");
} else if (x === 0) {
    console.log("x equals 0");
} else {6
    console.log("x less then 0 or is not a number");
}

if (typeof x == "number") {
    console.log(`x == ${x} ...Number is a`, typeof x);
} else {
    console.log(`x = ${x}, is a`, typeof x);
}
if (typeof x == "number") {
    console.log(x > 0 ? "Is more than zero" : "Is not more than zero");
} else {
    console.log("Is not a number");
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}

var obj = {a: 1, b: 2, q: "what else?"};
for (const prop in obj) {
    console.log("property",prop + ": " + obj[prop]);
}

var arr = [10, 20, 30, "numbers"];
for (const value of arr) {
    console.log(value); // Виводить 10, 20, 30
}

outerLoop: for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            console.log("continue outerLoop")
            continue outerLoop;
        } else if ((i === 3) && (j === 2)) {
            console.log("break outerLoop")
            break outerLoop;
        }
        console.log("i = " + i + ", j = " + j);
    }
}