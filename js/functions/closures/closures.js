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

console.log("Казус із замиканням \"closures\"")
function makeThreeSummons() {
  for (var i = 0; i <= 2; i++) { // let вирішує проблему
    const showMe =function() {
      console.log(i);
    }
    setTimeout(showMe, 100);
  }
  console.log("var виходить зі свого скопу і запам'ятовує тут і =", i); //var винесе 3 аж сюди і замикання дістане трійку звідси
  console.log("Case with closure")
}
// makeThreeSummons();


// Функції call(), bind(), apply()
// function.call(object); // Одноразовий виклик функції до об'єкту без прив'язки
// якщо треба передати параметри, то передаємо через кому(скільки завгодно): function.call(object, parameter, parameter2);
// apply робить те ж саме, тільки параметри передає масивом: function.apply(object, [parameter, parameter2]);

// bind() робить нову функцію, де function назавжди прив'язана до object: const newFunction = function.bind(object);
// Через кому можна передати параметри const newFunction = function.bind(object, parameter1, parameter2, parameter3);
// Параметри прив'язуються.
// bind() вирішує проблему з втратою контексту. Додаткові параметри можна додати при виклиці
// Виклик newFunction();
// setTimeout(object.method, 1000); // втрачає контекст, бо втрачає this
// setTimeout(method.bind(object, parameter, parameter2);

// У стрілочних функцій немає this, вони не мають своєї області видимості.

const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (l) => {
  let maxValue = l[0];
  let maxOfTwo;
  // let maxOfTwo = (Math.max).apply(l, [f, s]);
  // console.log("Math.max.apply(l)", maxOfTwo);
  // console.log(l);
  for (let i = 0; i < l.length - 1; i++) {
    maxOfTwo = Math.max.apply(l, [l[i], l[i + 1]]);
    // console.log("maxOfTwo:", maxOfTwo);
    // maxValue = maxValue > Math.max(l[i],l[i + 1]) ? maxValue : maxValue = Math.max(l[i],l[i + 1]);
    maxValue = maxValue > maxOfTwo ? maxValue : maxValue = maxOfTwo;
    // console.log(maxValue);
  }
  return maxValue;
}
console.log("my max:",myMax(list)); // 233


const myMul = (a, b) => a * b;

const multObj = {
  multDouble : 2,
  multTriple : 3
}
const myBindDouble = myMul.bind(multObj, multObj.multDouble);
console.log("My double:",myBindDouble(11));

const trpl = {
  mul : 3
}
const myBindTriple = myMul.bind(multObj, multObj.multTriple);
// const myBindTriple = myMul.bind(multObj, 3);
console.log("My triple:",myBindTriple(33));
