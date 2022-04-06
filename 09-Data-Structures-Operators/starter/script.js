'use strict';

// Test 123
const test = 1;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

let arr = [1, 2, 3, 4];
// for (const item of arr.entries()) {
//   console.log(item[0], item[1]);
// }

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// optional chaining
for (const day of days) {
  console.log(
    `On ${day} the restaurant ${restaurant.name} opens at: ${
      restaurant.openingHours[day]?.open ?? 0
    } and closes at ${restaurant.openingHours[day]?.close ?? 24}`
  );
}

const users = [{ name: 'Jonas', mail: 'jonas@web.de' }];

console.log(users[0] ?? 'Nicht vorhanden');
