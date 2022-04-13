'use strict';

const bookings = [];

function booking(flightNum = 'invalid', numPassengers = 0, price = 'invalid') {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
}

booking('LH233', 250);
console.log(bookings);
