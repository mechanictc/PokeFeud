/**
 * File that contains all mechanical calculations of the pokemon game
 * 
* @author      Nathan Kwok
* @since       2023-05-02
*/
const pokemon = require('../pokemon');
const pokemon_type = require('../pokemon_type.json');
const moves = require('../moves');
const type_chart = require('../type_chart')
const debug = require('./debugModel');
/**
 * Calculates the damage dealt from pokemon1 to pokemon2 including modifiers
 * 
* @param  pokemon1  a string of the attacking pokemon
* @param  pokemon2  a string of the defending pokemon; pokemon being attacked
* @param  move      a string of the move the attacking pokemon uses
* @see              https://bulbapedia.bulbagarden.net/wiki/Damage#Damage_formula
* @see              https://bulbapedia.bulbagarden.net/wiki/Critical_hit#Core_series
* @return           the damage pokemon1 will do to pokemon2
*/
function calcDamage(pokemon1, pokemon2, move) {
	try {
		const ATK_POKEMON_INFO = pokemon[pokemon1];
		const DEF_POKEMON_INFO = pokemon[pokemon2];
		const MOVE_INFO = moves[pokemon1.charAt(0).toUpperCase() + pokemon1.slice(1)].moveset[move];
		const CATEGORY = MOVE_INFO.category == "Special" ? true : false;
		const ATK = (CATEGORY == true ? ATK_POKEMON_INFO.special_attack : ATK_POKEMON_INFO.attack);
		const DEF =  (CATEGORY == true ? DEF_POKEMON_INFO.special_defense : DEF_POKEMON_INFO.defense);
		debug.log("==========\natk: " + ATK + "\ndef: " + DEF);
		const LEVEL = 100;
		const CRITICAL = Math.floor(Math.random() * 255) < ATK_POKEMON_INFO.speed / 2 ? ((2 * LEVEL) + 5) / (LEVEL + 5) : 1;
		debug.log(CRITICAL == 1 ? "no crit" : "CRITICAL HIT");
		const RANDOM = Math.floor(Math.random() * 39 + 217) / 255;
		const MOVE_TYPE = MOVE_INFO.type.charAt(0).toLowerCase() + MOVE_INFO.type.slice(1);
		const DEF_POKEMON_TYPE_1 = pokemon_type[pokemon2][0];
		const DEF_POKEMON_TYPE_2 = pokemon_type[pokemon2][1];
		const EFFECTIVE_1 = isEffective(MOVE_TYPE, DEF_POKEMON_TYPE_1);
		debug.log("type effective vs 1: " + EFFECTIVE_1);
		let EFFECTIVE_2;
		if (DEF_POKEMON_TYPE_2 !== "undefined")
			EFFECTIVE_2 = isEffective(MOVE_TYPE, DEF_POKEMON_TYPE_2);
		debug.log("type effective vs 2: " + EFFECTIVE_2);
		const STAB_1 = (pokemon_type[pokemon1][0] == MOVE_TYPE ? 1.5 : 1);
		let STAB_2;
		if (pokemon_type[pokemon1][1] !== "undefined")
			STAB_2 = (pokemon_type[pokemon1][1] == MOVE_TYPE ? 1.5 : 1)
		let damage = ((((2 * LEVEL * CRITICAL) / 5 + 2) * MOVE_INFO.power * (ATK/DEF)) / 50) + 2;
		damage *= RANDOM * EFFECTIVE_1 * EFFECTIVE_2 * STAB_1 * STAB_2;
		damage = Math.floor(damage);
		debug.log("damage: " + damage + "\n==========");
		return damage;
	}
    catch (err) {
		debug.log(err);
	}
}
/**
* @param  atk_type  a string of the attacking pokemon type
* @param  def_type  a string of the defending pokemon type; pokemon being attacked
* @return           type effectiveness of the two types in float form (1, 2, 0.5)
*/
function isEffective(atk_type, def_type) {
	for (let i = 0; i < type_chart[atk_type].effective.length; i++) {
		if (type_chart[atk_type].effective[i] == def_type)
			return 2;
  	}
	for (let i = 0; i < type_chart[atk_type].resist.length; i++) {
		if (type_chart[atk_type].resist[i] == def_type)
			return 0.5;
	}
	for (let i = 0; i < type_chart[atk_type].immune.length; i++) {
			return 0;
	}
	return 1;
}
module.exports = {calcDamage, isEffective};