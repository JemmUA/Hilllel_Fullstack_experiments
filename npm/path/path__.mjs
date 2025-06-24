import path from 'node:path';

const filePath = "./data/file.txt"
console.log("===============================");
console.log("meta", import.meta)
console.log("===============================");
const fileName= import.meta.url;
const absolutePath = path.resolve(fileName, filePath);
console.log("File name: ", fileName);
console.log("File path: ", filePath);
console.log("Absolute path: ", absolutePath);