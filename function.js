// 1
function typeOtherNames(names) {
  console.log(names);
}
typeOtherNames("Tasneem");

// 1: Calculator:
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
addNumbers(2, 4);

// 2 : Check even and odd number:

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("It's an even number");
  } else {
    console.log("It's an odd number");
  }
}

checkEvenOdd(7);

//3 : Convert Celsius to Fehrenheit :

function converToFehrenheit(Celsius) {
  let Fehrenheit = (Celsius * 9) / 5 + 32;
  console.log(Fehrenheit + "°F");
}

converToFehrenheit(30);

// 4 : Words count in a sentence:

function wordCount(sentence) {
  let words = sentence.trim().split("");
  console.log("Total words", words.length);
}
wordCount("I live in Pakistan.");
