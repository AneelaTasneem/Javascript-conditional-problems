/*1 : Write a Javascript programme to find maximum between two numbers using conditional operator. */

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("Num 1 is greater");
} else {
  console.log("Num 2 is greater");
}

/*2: Write a programme to find Maximum among three numbers using conditional opeartions*/

let num3 = 10;
let num4 = 40;
let num5 = 50;

if (num3 > num4 && num3 > num5) {
  console.log("10 is greatest");
} else if (num4 > num3 && num4 > num5) {
  console.log("40 is greatest");
} else if (num5 > num3 && num5 > num4) {
  console.log("50 is greatest");
} else {
  console.log("All numbers are equal");
}

/* 3: Write a javascript programme to check weather a number is even or odd by using conditional operator.*/

let number = 6;

if (number % 2 === 0) {
  console.log("It is an even number");
} else {
  console.log("It is an odd number");
}

/* 4: Write a javascript programme to check weather a year is leap year or not by using conditional operator.*/

let year = 1999;

if (year % 4 === 0) {
  console.log("Its Leap year");
} else {
  console.log("It's not a leap year");
}

/*5: Write a javascript programme to check weather character  is alphabet or not by using conditional operator.*/

let alphabet = "qw";

if (alphabet.length === 1) {
  if (
    (alphabet >= "A" && alphabet <= "Z") ||
    (alphabet >= "a" && alphabet <= "z")
  ) {
    console.log("It is an alphabet");
  } else {
    console.log("It is not an alphabet");
  }
} else {
  console.log("Enter a single character");
}

/*6: Write Javascript programme to check whether a number is positive, negative or zero*/

let num = 0;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

/*7: Write a javascript programme to check whether a number is divisible by 5 and 11 or not*/

let num6 = 75;

if (num6 % 5 === 0 && num6 % 5 === 0) {
  console.log("NUmber is divisible by 5 and 11");
} else {
  console.log("Number is not divisible by 5 and 11");
}

/* 8:Write a javascripr programme to to check vowel or consonant*/

let word = "b";

if (
  word === "a" ||
  word === "e" ||
  word === "i" ||
  word === "o" ||
  word === "u"
) {
  console.log("WORD IS VOWEL");
} else {
  console.log("WORD IS CONSONANT");
}

/* 9: Write a javascript programme to check  whether a character is alphabet, digit or special character*/

let input = "8";

if (input.length === 1) {
  if ((input >= "A" && input <= "Z") || (input >= "a" && input <= "z")) {
    console.log("It is an alphabet");
  } else if (input >= "0" || input <= "9") {
    console.log("It is a number");
  } else {
    console.log("It is a special character");
  }
} else {
  console.log("Enter a single entity");
}

/* 10: Write a javascript programme to check whether a character is uppercase or lowercase*/

let character = "*";

if (character.length === 1) {
  if (character >= "A" && character <= "Z") {
    console.log("Character is uppercase");
  } else if (character >= "a" && character <= "z") {
    console.log("Character is lowercase");
  } else {
    console.log("Neither its upper not lowercae");
  }
} else {
  console.log("Enter valid character");
}

/* 11: Write a javascript programme to to enter week number and print day of week*/

let week = 7;

if (week == 1) {
  console.log("🍿 Monday");
} else if (week == 2) {
  console.log("🍗 Tuesday");
} else if (week == 3) {
  console.log("🍣 Wednesday");
} else if (week == 4) {
  console.log("🥚 Thursday");
} else if (week == 5) {
  console.log("🌮 Friday");
} else if (week == 6) {
  console.log("🍫 Saturday");
} else if (week == 7) {
  console.log("🥨 Sunday");
} else {
  console.log("Invalid Input: Enter numbers from 1-7");
}

/* 12: Write a javascript programme to find number of days in a month*/

let month = 15;

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log("This month have 31 days");
} else if (month == 2) {
  console.log("This month have 28/29 days");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("This month have 30 days");
} else {
  console.log("Invalid number : Enter numer from 1-12 only ");
}

/* 13:  Write a javascript programe to count total number of notes in given amount*/

/* 14: Write a javascript programe program to check whether triangle is valid or not if angles are given*/

let angle1 = 40;
let angle2 = 80;
let angle3 = 80;

let sumofAngles = angle1 + angle2 + angle3;

if (sumofAngles === 180) {
  console.log(" 🔼 Triangle is valid");
} else {
  console.log(" 🔽 triangle is invalid");
}

/* 15: write javascript program  to check whether triangle is equilateral, scalene or isosceles*/ 

let side1 = 40;
let side2 = 30;
let side3 = 60;

if (side1 == side2 && side2 == side3) {
  console.log("Triangle is Equilateral");
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("Triangle is scalene");
} else {
  console.log("Triangle is Isoceles");
};

/* 16: Write javascript programme to  find all roots of a quadratic equation*/ 


/*17: write javascript programme to  calculate profit or loss*/ 


let costPrice = 500;
let sellPrice = 2500;

if (sellPrice > costPrice) {
  let profit = sellPrice - costPrice;
  console.log(`You made a profit of ${profit}`);
} else if (costPrice > sellPrice) {
  let loss = costPrice - sellPrice;
  console.log(`You made a loss of ${loss}`);
} else {
  console.log("No profit no loss");
};


/* 18: Write javascript programe to enter student marks and find percentage and grade
If percentage >= 90% : Grade A
If percentage >= 80% : Grade B
If percentage >= 70% : Grade C
If percentage >= 60% : Grade D
If percentage >= 40% : Grade E
If percentage < 40% : Grade F*/ 

let maths = 90;
let bio = 95;
let physics = 75;
let chemistry = 82;
let english = 75;

let totalMArks = maths + bio + physics + chemistry + english;
let percentage = (totalMArks / 500) * 100;

console.log(`Percentage: ${percentage}%`);

if (percentage >= 90) {
  console.log("Secured A grade");
} else if (percentage >= 80) {
  console.log("Secured B grade");
} else if (percentage >= 70) {
  console.log("Secured C grade");
} else if (percentage >= 60) {
  console.log("Secured D grade");
} else if (percentage >= 40) {
  console.log("Secured E grade");
} else {
  console.log("Secured F grade");
}

/* 19: Write javascript programe program to input electricity unit charge and calculate the total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill.*/ 


