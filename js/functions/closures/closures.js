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
    setTimeout(showMe, 1000);
  }
  console.log("var виходить зі свого скопу і запам'ятовує тут і =", i); //var винесе 3 аж сюди і замикання дістане трійку звідси
  console.log("Case with closure")
}
makeThreeSummons();


// Функції call(), bind(), apply()
// function.call(object); // Одноразовий виклик функції до об'єкту без прив'язки
// якщо треба передати параметри, то передаємо через кому(скільки завгодно): function.call(object, parameter, parameter2);
// apply робить те ж саме, тільки параметри передає масивом: function.apply(object, [parameter, parameter2]);

// bind() робить нову функцію, де function назавжди прив'язана до object: const newFunction = function.bind(object);
// Через кому можна передати параметри const newFunction = function.bind(object, parameter1, parameter2, parameter3);
// Параметри прив'язуються.
// bind() вирішує проблему з втратою контексту. Додаткові параметри можна додати при виклиціє
// Виклик newFunction();
// setTimeout(object.method, 1000); // втрачає контекст, бо втрачає this
// setTimeout(method.bind(object, parameter, parameter2);

// У стрілочних функцій немає this, вони не мають своєї області видимості.