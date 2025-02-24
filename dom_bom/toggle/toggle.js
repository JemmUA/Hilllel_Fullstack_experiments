const button = document.getElementById("button");
button.addEventListener("click", toggle);
console.log(button);

function toggle() {
    console.log("крутяк");
    const divchik = document.getElementById("switcher");
    console.log(divchik.classList);
    divchik.classList.toggle("green");
    divchik.classList.toggle("red");
    console.log("toggle green, toggle red")
    console.log(divchik.classList);
}