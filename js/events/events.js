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
const myInputListener = inputEvent.addEventListener("change", function (event) {// для події keydown event cpde повертає клавішу.
  console.log("My input:", event.target.value);
  console.log("My input:", inputEvent.value);
  console.log("event.target.code", event.code);
  // console.log("event.target.code", event.code); // для події keydown
});

const inputEvents = document.getElementsByClassName("my-input-multy");
const myInputListeners = [...inputEvents]
  .forEach(input => input.addEventListener("change", function (event) {
    console.log("My input:", event.target.value);
    if (isNaN(event.target.value)) {
      event.target.style.borderColor = "red";
      event.target.style.backgroundColor = "orange";
      event.target.style.borderWidth = "5px";
      // style - власивість елемента, щоб керувати інлайн стилями, і дозволяти керувати окремо різним стилями(колір, фон ... окремо а не в цілому весь стиль як css)    }
      event.stopPropagation(); // зупинка спливання.
    } else {
      event.target.style.borderColor = "green";
      event.target.style.backgroundColor = "lightgreen";
      event.target.style.borderWidth = "5px";
    }
  }));

const elementsForClick = document.querySelectorAll(".clickable");

[...elementsForClick].forEach(element => element.addEventListener("click", function (event) {
  console.log(event.target, "|", this, event.target === this);
  // if (event.target === this) {
  //   console.log("Clicked element with listener", event.target, "|", this, event.target === this);
  // }
}));


// Спливання по DOM, делегування подій

const containerElement = document.getElementById("container");

containerElement.addEventListener("click", function (event) {
  if (event.target.matches("#container>div")) { // перевірка таргету, що він є сином контейнера
    event.target.style.backgroundColor = "orange";
  }
});

// Запобігання дефолту

const linkElement = document.getElementById("link");
linkElement.addEventListener("click", function (event) {
  event.target.innerText = event.target.innerText.toUpperCase();
  if (!event.shiftKey) {
    event.target.innerText = event.target.innerText.toUpperCase();
    event.preventDefault(); // Запобігання дефолту
    event.stopPropagation();
  }
});


// Modal window

const showModalElement = document.getElementById("showModal");
const modalWindow = document.getElementById("cover");
const closeModalButton = document.getElementById("closeModal");
const agreeCheckBox = document.getElementById("agree");

function showModal() {
  modalWindow.classList.remove("hidden");
}

function hideModal(event) {
  if (event.target === this) {
    modalWindow.classList.add("hidden");
  }
}

showModalElement.addEventListener("click", showModal);

closeModalButton.addEventListener("click", hideModal);

modalWindow.addEventListener("click", hideModal);

agreeCheckBox.addEventListener("change", (event) => {
  if (this.checked) {
    closeModalButton.removeAttribute("disabled");
  } else {
    closeModalButton.toggleAttribute("disabled");
  }
});
