"use strict";

document.addEventListener("DOMContentLoaded", start);

const myArray = [];
let counter = 0;

function start() {
  console.log("start func loaded");
  counter++;
  addDelay();
}

function addDelay() {
  console.log("addDelay func loaded");

  if (counter <= 9) {
    // show counter:
    console.log(counter);

    // add counter to beginning of array:
    myArray.splice(0, 0, counter);
    console.log(myArray);

    // set timer for 1 second:
    setTimeout(start, 1000);
  } else {
    stopCounting();
  }
}

function stopCounting() {
  console.log("I'm done counting...");
}
