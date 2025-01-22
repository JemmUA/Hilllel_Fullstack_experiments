"use strict";
// import {greetings} from './functions_lib.js';
//
// greetings("Привііііііт!!!!!");



console.log("Callbacks");
console.log("Callbacks");
console.log("Callbacks");

function makeTea (sugarSpoons) {
  if (sugarSpoons && sugarSpoons > 0) {
    if (sugarSpoons === 1) {
      console.log(`I made tea for you with ${sugarSpoons} spoon of sugar.`);
    } else {
      console.log(`I made tea for you with ${sugarSpoons} spoons of sugar.`);
    }
  } else {
    console.log(`I made tea for you with no sugar.`);
  }
}

function makeCoffee (sugarSpoons) {
  if (sugarSpoons && sugarSpoons > 0) {
    if (sugarSpoons === 1) {
      console.log(`I made coffee for you with ${sugarSpoons} spoon of sugar.`);
    } else {
      console.log(`I made coffee for you with ${sugarSpoons} spoons of sugar.`);
    }
  } else {
    console.log(`I made sugar free coffee for you.`);
  }
}

function cook (cb, sugarAmount) {
  cb(sugarAmount)
  console.log("Bon appetit!");
}

cook(makeTea, 3);
cook(makeCoffee, 1);
cook(makeCoffee, -10);
cook(makeTea);