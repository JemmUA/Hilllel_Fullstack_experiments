"use strict";

try {
    // let a=5; // No errors
    a=5; //error
  } catch (error) {
    console.error(error);
    console.log("Якщо в блоці try відбулася помилка, то виконання переходить в блок catch");
    console.log("Якщо в блоці try є декілька помилок, то після першої помилки виконання в блоці далі не йде");
} finally {
  console.log("Блок finally виконується завжди")
}

// створення помилки

throw new Error ("Це створена помилка. Зупиняє виконання програми.");

console.log("End");

// Приклад
let age = 9;
try {
  if (age < 16) {
    throw new Error("Error! Program stopped")
  } else {
    console.log("Welcome!")
  }
} catch (e) {
  console.error(e);
}