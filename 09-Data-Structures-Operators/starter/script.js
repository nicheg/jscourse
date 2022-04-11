'use strict';

// Test 123
const test = 1;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log('Flights String Excercise --------------------# \n');

for (const row of flights.split('+')) {
  let [event, origin, dest, time] = row.split(';');
  let output = `${event.replace('_', '').replace('_', ' ')} from ${origin
    .replace(/\d+/g, '')
    .toUpperCase()} to ${dest
    .replace(/\d+/g, '')
    .toUpperCase()} (${time.replace(':', 'h')})`;
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderText(mainMenuIndex) {
    console.log(`You just ordered ${this.mainMenu[mainMenuIndex]}!`);
  },

  getName() {
    return this.name;
  },
};

const {
  openingHours: open,
  name: restName,
  website: web = 'no website',
} = restaurant;

// let arr = [1, 2, 3, 4];
// for (const item of arr.entries()) {
//   console.log(item[0], item[1]);
// }

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// optional chaining
// for (const day of days) {
//   console.log(
//     `On ${day} the restaurant ${restaurant.name} opens at: ${
//       restaurant.openingHours[day]?.open ?? 0
//     } and closes at ${restaurant.openingHours[day]?.close ?? 24}`
//   );
// }

const users = [{ name: 'Jonas', mail: 'jonas@web.de' }];

// console.log(users[0] ?? 'Nicht vorhanden');

// for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(
//     `on ${key} we are open at the following times: ${open} until ${close}`
//   );
// }

const arr = [
  { name: 'Jonas', age: 23, grades: { math: 3, history: 1 } },
  { name: 'Nick', age: 22, grades: { math: 3, history: 1 } },
];

// for (const {
//   name,
//   age,
//   grades: { math, history },
// } of arr) {
//   console.log(
//     `${name} is ${age} years old. The grades are ${math ?? 'Not defined'} and ${
//       history ?? 'Not defined'
//     }`
//   );
// }

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1
let arrOfEvents = [...new Set(gameEvents.values())];
console.log(arrOfEvents);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
const avEventLoad = 90 / [...gameEvents.keys()].length;
console.log(`On Average an event took place every ${avEventLoad} minutes!`);

// Task 4
for (const [key, value] of gameEvents.entries()) {
  console.log(
    `${key < 45 ? '[FIRST HALF]: ' : '[SECOND HALF]:'} ${key}: ${value}`
  );
}

console.log('\nAIRLINE \n');

function checkMiddleSeat(seat) {
  console.log(
    seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1
      ? 'It is a middle seat'
      : 'Not a middle seat'
  );
}
function checkMiddleSeat2(seat) {
  console.log(
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
      ? 'It is a middle seat'
      : 'Not a middle seat'
  );
}
console.log('22B'.indexOf('B') === -1);
checkMiddleSeat('22B');
checkMiddleSeat('12A');
checkMiddleSeat('40C');
checkMiddleSeat('12C');
checkMiddleSeat('12B');

console.log('22B'.slice(-1));
checkMiddleSeat2('22B');
checkMiddleSeat2('12A');
checkMiddleSeat2('40C');
checkMiddleSeat2('12C');
checkMiddleSeat2('12B');

const checkString = 'Gate Gate';
const fixedString = checkString.replaceAll('Gate', 'Kek');
console.log(fixedString);

function delayedFlights(num) {
  console.log(`There are ${num} delayed flights ${'*'.repeat(num)}`);
}

delayedFlights(25);

console.log('Coding Challenge 4 \n');

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textAreaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function () {
  let rows = textAreaEl.value.split('\n');
  let count = 1;
  for (let row of rows) {
    const [first, second] = row.trim().toLowerCase().split('_');
    const final = first + second[0].toUpperCase() + second.slice(1);
    console.log(final.padEnd(20), '✅'.repeat(count));
    count++;
  }
});
