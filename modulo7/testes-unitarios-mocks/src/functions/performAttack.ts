import { Character } from "../models/character"
import { validateCharacter } from "./validateCharacter";

// Exercício 3-a)
/* export function performAttack (attacker: Character, defender: Character){
	if (!validateCharacter(attacker) || !validateCharacter(defender)) {
		throw new Error("Invalid character");
	}
	
	if (attacker.strength > defender.defense) {
		defender.life -= attacker.strength - defender.defense;
	}
} */

// Exercício 3-b)
export function performAttack (attacker: Character, defender: Character, validator: (input: Character) => boolean) {
	
	if (!validator(attacker) || !validator(defender)) {
		throw new Error("Invalid character");
	}

	if (attacker.strength > defender.defense) {
		defender.life -= attacker.strength - defender.defense;
	}
};

// Exercício 3-c) A partir da utilização da inversão de dependências, é possível utilizar o mock da função para a realização dos testes unitários.


