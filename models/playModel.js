const pokemon = require('../pokemon');
const moves = require('../moves');
/**
* @param  pokemon1  a string of the attacking pokemon
* @param  pokemon2  a string of the defending pokemon; pokemon being attacked
* @param  move      a string of the move the attacking pokemon uses
* @return           the damage pokemon1 will do to pokemon2
*/
function calcDamage(pokemon1, pokemon2, move) {
    const ATK_POKEMON_INFO = pokemon[pokemon1];
    const DEF_POKEMON_INFO = pokemon[pokemon2];
    const MOVE_INFO = moves[pokemon1.charAt(0).toUpperCase() + pokemon1.slice(1)].moveset[move];
}

function isEffective(atktype, deftype) {
    console.log(atktype)
	for (let i = 0; i < type_chart[atktype].effective.length; i++) {
		if (type_chart[atktype].effective[i] == deftype) {
			//checks if super effective
			return 2.0;
		}
		else if (type_chart[atktype].resist[i] == deftype) {
			return 0.5;
		}
		else {
		}
  	}
	return 1.0;
}
module.exports = {calcDamage, isEffective};