const pokemon = require('../pokemon.json');

function teamCreate() {
	const names = Object.keys(pokemon);
	let finalTeam = []
	for (let i = 0; i < 6; i++) {
		let randomSelect = Math.floor(Math.random() * 75);
		finalTeam.push(names[randomSelect]);
	}
	return finalTeam;
}

module.exports = {teamCreate};