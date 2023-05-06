const pokemon = require('../pokemon.json');
const moves = require('../moves');

function teamCreate() {
	const names = Object.keys(pokemon);
	let finalTeam = [];
	for(let i = 0; i < 6; i++) {
		let randomSelect = Math.floor(Math.random() * 75);
		if (!finalTeam.includes(names[randomSelect]))
			finalTeam.push(names[randomSelect]);
	}
	return finalTeam;
}

function teamSwitch(team){
	const kia = team.shift()
	return team[0]
}
function chooseMove(aiPokemon, playerPokemon){
	// ARGUMENTS SHOULD BE CURRENTLY SELECTED POKEMON
	const aiMoves = moves[aiPokemon].moveset;
	const playerMoves = moves[playerPokemon].moveset;
	let strongestMove = aiMoves[0];
	for(move in aiMoves){
		if(calcDamage(aiPokemon, playerPokemon, move) > calcDamage(aiPokemon, playerPokemon, strongestMove)){
			strongestMove = move;
		}
	}
	return strongestMove;
}
module.exports = {teamCreate, teamSwitch, chooseMove};
