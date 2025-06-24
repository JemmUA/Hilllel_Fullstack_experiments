// console.log("Star - beginning");

const star = functionStar();
const moon = functionMoon();
const infinity = endless();

console.log("summon star first time: ", star.next().value);
console.log("summon star second time: ", star.next().value);
console.log("summon star third time: ", star.next().value);
console.log("summon star forth time: ", star.next());
console.log("summon moon: ", moon);

console.log("Endless:", infinity.next().value);
console.log("Endless:", infinity.next().value);
console.log("Endless:", infinity.next().value);
console.log("Endless:", infinity.next().value);

function* functionStar() {
  console.log("before yield 1");
  yield "yield 1";
  console.log("between yield 1 and yield 2");
  yield "yield 2";
  console.log("between yield 2 and yield 3");
  yield "yield 3";
  console.log("after yield 3");
  return "It's a return!";
}

function functionMoon() {
  return "It's a moon! There is nobody here!";
}

function* endless() {
  let index = 0;

  while (true) {
    yield index++;
  }
}