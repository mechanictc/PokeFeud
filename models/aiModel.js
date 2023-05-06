const pokemon = require('../pokemon.json')
const moves = require('../moves');

function teamCreate(){
	const names = Object.keys(pokemon)
	let finalTeam = []
	for(let i=0; i<6; i++){
		let randomSelect = Math.floor(Math.random() * 75);
		const add = finalTeam.push(names[randomSelect])
	}
	return finalTeam
}

function teamSwitch(team){
	const kia = team.shift()
	return team[0]
}

module.exports = {teamCreate};
