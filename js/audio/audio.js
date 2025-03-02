// from stackoverflow
// let audio = new Audio('audio_file.mp3');
// audio.play();

const container = document.getElementById("container");
const buttonPlay = document.createElement("button");
let pourBeerSound = new Audio('sound/pouring_beer.mp3');
let openCanSound = new Audio('sound/beer-can-opening.mp3');
buttonPlay.addEventListener("click", () => {
    console.log("some beer?");
    // openCanSound.play();
    pourBeerSound.play();
});
buttonPlay.innerText = "Play sound";
container.appendChild(buttonPlay);



