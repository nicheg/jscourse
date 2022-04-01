// function isCountry(country) {
//     let land;
//     country.charAt(0) === "G" ? land = true : land = false;
// }
// console.log(isCountry("Germany"));

// function square(number) {
//     return number ** 2;
// }

// console.log(square(4));

// const squareroot = function (number) {
//     return number ** 2;
// }
// console.log(squareroot(4));
// const square2 = number => number ** 2;
// console.log(square2(4));

// function yearsUntilRetirement(currentAge, retirementAge) {
//     yearsToGo = retirementAge - currentAge;
//     return yearsToGo;
// }
// console.log(yearsUntilRetirement(25, 63));

// calcAverage = (score1, score2, score3) => {
//     return ((score1 + score2 + score3) / 3);
// }
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(score1, score2) {
//     if (score1 >= score2 * 2) return `Dolphins win (${score1}) vs. (${score2})`;
//     else if (score2 >= score1 * 2) {
//         return `Koalas win (${score2}) vs. (${score1})`;
//     } else {
//         return `no winner`
//     }
// }
// console.log(checkWinner(avgDolphins, avgKoalas));

// const names = ["John", "James", "Leopold"];
// names.push("Kristina");
// names.unshift("Kristina");
// console.log(names.indexOf("Kristina"));
// const bills = [125, 555, 44];

// function calcTip(bill) {
//     return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// }

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const sum = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips, sum);

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: "25",
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicence: true,
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age} year old ${this.job} and he ${this.hasDriversLicence ? "has a drivers license" : "doesnt have a drivers License"}`
//     }
// };

// console.log(jonas.getSummary());
// jonas.hasDriversLicence = false;
// console.log(jonas.getSummary())

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     getBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     getBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// mark.getBMI();
// john.getBMI();
// console.log(mark.bmi);
// if (mark.bmi > john.bmi) {
//     console.log(`Marks BMI (${mark.bmi}) is higher than Johns BMI (${john.bmi})`);
// } else {
//     console.log(`Johns BMI (${john.bmi}) is higher than Johns BMI (${mark.bmi})`);
// }

// for (let a = 0; a < 10; a++) {
//     console.log(`Round ${a}`);
// }

function calcTip(bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (a = 0; a < bills.length; a++) {
  tips[a] = calcTip(bills[a]);
  totals[a] = bills[a] + calcTip(bills[a]);
  console.log(bills[a] + " " + tips[a] + " " + totals[a]);
}
