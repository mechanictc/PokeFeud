// const playModel = require('./playModel');
// const pokemon_btype = require('../pokemon_type');
// const moves = require('../moves');

// function teamForm() {
//     let teamformation = [];
//     const keys = Object.keys(pokemon_btype);
//     const listLength = keys.length;
//       teamformation = keys[Math.floor(Math.random() * listLength)];
//     return teamformation;
// }

// // function isSwitchLowHP(team2, hp) {
// //   if (hp /((team2[0].hp + 15) * 2 * 100 / 100) + 110 <= 0.2) {
// //     return true;
// //   }
// //   return mainguy;
// // }

// // function lowhpSwitch(team, hp) {
// //   let mainguy = team[0];
// //   let chooser = Math.floor(Math.random() * team.length); 
// //   if ((hp <= 0.2)){
// //     team.mainguy = team[chooser];
// //   }
// // }

// // function superEffectiveMove(moves, playerType) {
// //     const keys = Object.keys(moves.moveset);
// //     let results = {};
// //     for (let x = 0; x < 4; x++) {
// //       let move = keys[x];
// //       let type = moves.moveset[keys[x]].type;
// //       let lower = type.toLowerCase();
// //       let effective = playModel.isEffective(lower, playerType);
// //       results[move] = effective;
// //     }
// //     return results;
// // }

// // function move(team1, team2, t1hp, t2hp) {
// //   try {
// //     let mainguy = team2[0];
// //     let name = team2[0].substring(0, 1).toLocaleUpperCase() + team2[0].substring(1);
// //     let moveset = moves[name];
// //     let move;
// //     var dmg = 0;
// //     for (var key in superEffectiveMove(moveset, pokemon_btype[team1[0]])) {
// //       if (superEffectiveMove(moveset, pokemon_btype[team1[0]])[key] == 2) {
// //         move = key;
// //         dmg = playModel.calcDamage(team2[0], team1[0], moveset.moveset[move].power, moveset.moveset[move].type.toLowerCase());
// //         t1hp -= dmg;
// //       }
// //     }
// //     if (isSwitchLowHP(team2, t2hp)) {
// //       mainguy = team2[Math.floor(Math.random() * team2.length)];
// //       if (mainguy == team2[0]) {
// //         mainguy = team2[1];
// //       }
// //       console.log(name + " switched out to: " + mainguy + " because of low HP");
// //     }
// //     else {
// //       var i = 0;
// //       for (var key in moveset) {
// //         var random = Math.floor(Math.random * (4 - i));
// //         if (random == 2) {
// //         move = key;
// //         dmg = playModel.calcDamage(team2[0], team1[0], moveset.moveset[move].power, moveset.moveset[move].type.toLowerCase());
// //         t1hp -= dmg;
// //         }
// //         else {
// //           i++;
// //         }
// //       }
// //     }
// //   }
// //   catch (err) {

// //   }
// //   return {t1hp, t2hp};
// // }

// //module.exports = {teamForm, isSwitchLowHP, superEffectiveMove, move};