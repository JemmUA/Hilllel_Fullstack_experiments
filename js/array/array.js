littleArray = [0, 1, 2, 3];
littleArray.forEach(e => console.log(e));
console.log(littleArray);
littleArray.unshift(littleArray[littleArray.length - 1]);
console.log(littleArray);

littleArray.push(littleArray[0]);
littleArray.forEach(e => console.log(e));
console.log(littleArray);