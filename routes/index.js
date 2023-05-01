var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const ai = require('../models/aiModel');
const pokemon = require('../pokemon.json')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(playModel.calcDamage("charizard", "mewtwo", "Solar Beam"));
});

// router.get('/play', function(req, res) {
//   //pick teams
//   var team1 = [];
//   var team2 = [];
//   team1 = ai.teamForm();
//   team1 = team1.charAt(0).toUpperCase() + team1.slice(1);
//   console.log(team1)
//   team2 = ai.teamForm();
//   var t1hp = ((team1.hp + 15) * 2 * 100 / 100) + 110;
//   var t2hp = ((team2.hp + 15) * 2 * 100 / 100) + 110;
//   var moveset;
//   var info;
//   var move1, move2, move3, move4;
  
//   try {
//     moveset = moves[team1].moveset;
//     info = Object.keys(moveset);
//     move1 = info[0];
//     move2 = info[1];
//     move3 = info[2];
//     move4 = info[3];
//   }
//   catch (err) {
//   }
//   console.log(moveset)

//   if (team1.length != 0 && team2.length != 0) {
//     res.render('game', { title: "PokeFront Battle V.S. CPU", team1: team1, team2: team2, move1: move1, move2: move2, move3: move3, move4: move4, moves: moves});
//     }
// });


module.exports = router;