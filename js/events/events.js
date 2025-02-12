"use strict";

const eventTestElement = document.getElementById('test');
console.log("My element for testing:", eventTestElement);

eventTestElement.addEventListener("mousemove", onMove);

function onMove() {
  console.log("You are walking through my box");
  event.target.style.backgroundColor = "grey";
}

// eventTestElement.addEventListener("click", () => console.log("You clicked my box"));
eventTestElement.addEventListener("click", function (event) {
  console.log("You clicked my box", event.clientX, event.clientY, event.target);
  eventTestElement.removeEventListener("mousemove", onMove); // remove mousemove listener
  if (event.shiftKey) {
    console.log("Don't touch shift!!!")
  }
});

eventTestElement.addEventListener("mouseover", function (event) {
  console.log("You came in my box", event.clientX, event.clientY, event.target);
  event.target.style.backgroundColor = "red";
});

eventTestElement.addEventListener("mouseout", function (event) {
  console.log("You left my box", event.clientX, event.clientY, event.target);
  event.target.style.backgroundColor = "lightgreen";
});



const inputEvent = document.getElementsByClassName("my-input")[0];
const myInputListener = inputEvent.addEventListener("change", function (event) {
  console.log("My input:", event.target.value);
  console.log("My input:", inputEvent.value);
});

const inputEvents = document.getElementsByClassName("my-input-multy");
const myInputListeners = [...inputEvents]
  .forEach(input => input.addEventListener("change", function (event) {
    console.log("My input:", event.target.value);
    if (isNaN(event.target.value)) {
      event.target.style.borderColor = "red";
      // style - власивість елемента, щоб керувати інлайн стилями, і дозволяти керувати окремо різним стилями(колір, фон ... окремо а не в цілому весь стиль як css)    }
    } else {
      event.target.style.borderColor = "green";
    }
  }));

