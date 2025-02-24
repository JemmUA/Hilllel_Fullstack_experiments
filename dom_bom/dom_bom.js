document.getElementById("myDiv").addEventListener("click", element => console.log("clicked"));
console.log(document.body.innerHTML);
document.body.innerHTML += '<div>шо хочеш?</div>';
document.getElementById("myDiv").addEventListener("click", element => console.log("clicked"));
console.log(document.body.innerHTML);
