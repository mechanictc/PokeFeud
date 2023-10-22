var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const debug = require('../models/debugModel');
const aiModel = require('../models/aiModel')
const pokemon = require('../pokemon.json')
const randomFile = require('select-random-file');
var currPoke = null


//EVERYBODY INSTALL THIS
//npm install select-random-file




/* GET home page. */
router.get('/', function(req, res) {
  playModel.calcDamage("charizard", "blastoise", "Flamethrower");
  res.render('index', { title: 'POKEFEUD' });

});

router.get('/play', function(req, res) {
  const playerTeam = aiModel.teamCreate();
  playerTeam[0].split("")[0] = playerTeam[0].split("")[0].toUpperCase()
  const enemyTeam = aiModel.teamCreate();
  enemyTeam[0].split("")[0] = enemyTeam[0].split("")[0].toUpperCase()
  const directory = './public/images/backgrounds';
	randomFile(directory, (err, file) => {
		debug.log("selected file: " + file);
    debug.log(aiModel.teamCreate());
    res.render('game', {title: "POKEFEUD", bg: file, team1: playerTeam, team2: enemyTeam, playModel: playModel, pokemon:pokemon, aiModel: aiModel});
	});
 
});

router.get('/lose', function(req, res) {
	res.render('lose')
});

router.get('/win', function(req, res) {
	res.render('win')
});

module.exports = router;
