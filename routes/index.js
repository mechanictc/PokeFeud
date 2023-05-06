var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const debug = require('../models/debugModel');
const aiModel = require('../models/aiModel')
const pokemon = require('../pokemon.json')


//EVERYBODY INSTALL THIS
//npm install select-random-file




/* GET home page. */
router.get('/', function(req, res) {
  playModel.calcDamage("charizard", "blastoise", "Flamethrower");
  res.render('index', { title: 'PokeFever' });

});

router.get('/play', function(req, res) {
  const playerTeam = aiModel.teamCreate();
  const enemyTeam = aiModel.teamCreate();
  debug.log(aiModel.teamCreate());
  res.render('game', {title: "test", bg: playModel.generateBackground(), team1: playerTeam, team2: enemyTeam, calcDamage: playModel.calcDamage("charizard", "blastoise", "Flamethrower")});
});
module.exports = router;
