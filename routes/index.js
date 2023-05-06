var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const pokemon = require('../pokemon.json')

/* GET home page. */
router.get('/', function(req, res) {
  playModel.calcDamage("charizard", "blastoise", "Flamethrower");
  res.render('index', { title: 'PokeFever' });
});

router.get('/play', function(req, res) {
  res.render('game', {title: "test", calcDamage: playModel.calcDamage("charizard", "blastoise", "Flamethrower")});
});
module.exports = router;