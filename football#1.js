const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",

  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Lwandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// #1:
const [player1, player2] = game.players;
const [playergk] = game.players;
console.log(playergk[0]);
console.log(player1);
console.log(player2);

// #2:
let [gk, ...fieldPlayers] = player1;
console.log(fieldPlayers);

// #3:
const allPlayers = player1.concat(player2);
console.log(allPlayers);

// #4:
const substitute = ["Thiago", "Coutinho", "Perisic"];
let players1Final = player1.concat(substitute);
console.log(players1Final);

// #5:
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

// #6:
const printGoals = function (...players) {
  console.log(...players, players.length);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// #7:
team1 < team2 && console.log("Team 1 is more likely to win.");
team1 > team2 && console.log("Team 2 is more likely to win.");