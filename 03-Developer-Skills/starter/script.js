// Remember, we're gonna use strict mode in all scripts now!
"use strict";
function printForecast(arr) {
  let forecast = "";
  for (let i = 0; i < arr.length; i++) {
    forecast += `...${arr[i]} in ${i + 1} days`;
  }
  return forecast;
}
console.log(printForecast([17, 21, 23]));
