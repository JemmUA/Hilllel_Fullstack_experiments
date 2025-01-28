console.log("Замикання")

function outerFunc() {
  const outerVAr = "Outer";
  console.log("Зовнішня функція");
  function innerFunc() {
    const innerVar = "inner";
    console.log("Внутрішня функція" , innerVar, outerVAr);
  }
  return innerFunc;
}

const outerRes = outerFunc();

// outerFunc();
outerRes();

const secondRes = outerFunc();

secondRes();

const thirdRes = function() {
  console.log("Анонімна функція")
  function catchMe() {
    console.log("You have found me!")
  }
  return catchMe;
}();

thirdRes();