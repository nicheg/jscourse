// const amountInput = Number(prompt("Wieviele Partien wurden gespielt?"))

// let i = 1, j = 1, pointsTeam1 = 0, pointsTeam2 = 0;
// while (i <= amountInput) {
//     pointsTeam1 += Number(prompt(`Bitte die Punktzahl von Team #1 aus Spiel Nr. ${i} eingeben.`))
//     i++;
// }
// while (j <= amountInput) {
//     pointsTeam2 += Number(prompt(`Bitte die Punktzahl von Team #2 aus Spiel Nr. ${j} eingeben.`))
//     j++;
// }


// const avgScoreTeam1 = pointsTeam1 / amountInput;
// const avgScoreTeam2 = pointsTeam2 / amountInput;

// if (avgScoreTeam1 === avgScoreTeam2 && avgScoreTeam1 >= 100 && avgScoreTeam2 >= 100) {
//     console.log(`Both Teams have an average score of ${avgScoreTeam1}! It's a draw!`);
// } else if (avgScoreTeam1 > avgScoreTeam2 && avgScoreTeam1 >= 100) {
//     console.log(`The Dolphins have a higher average score of: ${avgScoreTeam1}!`);
// } else if (avgScoreTeam2 > avgScoreTeam2 && avgScoreTeam2 >= 100) {
//     console.log(`The Koalas have a higher average score of: ${avgScoreTeam2}!`);
// } else {
//     console.log(`Both teams didn't reach the minimum average of 100.
//     Team #1 has a score of: ${avgScoreTeam1}
//     Team #2 has a score of: ${avgScoreTeam2}`)
// }

// const day = "monday";
// switch (day) {
//     case "monday":
//         console.log("Passt");
//         break;
//     case "tuesday":
//         console.log("passt nicht");
//         break;
//     default:
//         console.log("test");
// }

const bill = 20
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)