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

function cook (cb, sugarAmount, wish= "Bon appetit!") {

  console.log(cb(sugarAmount), wish);
}

cook(makeTea, 3, "Have a nice day!");
cook(makeCoffee, 1);
cook(makeCoffee, -10, "Don't get upset!!");
cook(makeTea, 0, "Don't worry, be happy!!!");
cook(function() {
  return("Anonymous function test!");
}, 5, "Drink some tap water ;))");