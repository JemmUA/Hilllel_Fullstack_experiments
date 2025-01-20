console.log("Loops!");

for (let i=0; i<3; console.log(i), i++, console.log(i)) {
    console.log("Loop for, i =",i);
}


for (let i=0; i<3; i++, eatPie()) {
    console.log("Loop #2, i =",i);
}


function eatPie () {
    console.log("I/'m eating delicious Pie!");
}