var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const aiModel = require('../models/aiModel')
const pokemon = require('../pokemon.json')
const randomFile = require('select-random-file');


//EVERYBODY INSTALL THIS
//npm install select-random-file




/* GET home page. */
router.get('/', function(req, res) {
  playModel.calcDamage("charizard", "blastoise", "Flamethrower");
  res.render('index', { title: 'PokeFever' });

});

router.get('/play', function(req, res) {
  const directory = './public/images/backgrounds';
  let selected_file = "bg-city";
  const team1 = aiModel.teamCreate()
  const team2 = aiModel.teamCreate()
  console.log(team1)

  randomFile(directory, (err, file) => {
    console.log(file);
    selected_file = file;
    console.log(selected_file)
    res.render('game', {title: "test", bg: selected_file, team1: team1, team2: team2, calcDamage: playModel.calcDamage("charizard", "blastoise", "Flamethrower")});
  });
  // selected_file = selected_file.substring(0, selected_file.indexOf("."));
  // console.log(selected_file)
  console.log(aiModel.teamCreate())
});
module.exports = router;