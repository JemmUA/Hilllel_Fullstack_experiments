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
      return `I made tea for you with ${sugarSpoons} spoon of sugar.`;
    } else {
      return `I made tea for you with ${sugarSpoons} spoons of sugar.`;
    }
  } else {
    return `I made tea for you with no sugar.`;
  }
}

function makeCoffee (sugarSpoons) {
  if (sugarSpoons && sugarSpoons > 0) {
    if (sugarSpoons === 1) {
      return `I made coffee for you with ${sugarSpoons} spoon of sugar.`;
    } else {
      return `I made coffee for you with ${sugarSpoons} spoons of sugar.`;
    }
  } else {
    return `I made sugar free coffee for you.`;
  }
}

function cook (cb, sugarAmount) {

  console.log(cb(sugarAmount), "Bon appetit!");
}

cook(makeTea, 3);
cook(makeCoffee, 1);
cook(makeCoffee, -10);
cook(makeTea);
cook(function() {
  return("Anonymous function test! Drink some tap water ;))");
}, 5);