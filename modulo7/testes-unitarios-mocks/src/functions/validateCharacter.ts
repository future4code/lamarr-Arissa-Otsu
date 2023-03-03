import { Character } from "../models/character"

// Exercício 1-b)
export function validateCharacter (character: Character): boolean {
	if (!character.name || character.defense === undefined || character.strength === undefined || character.life === undefined) {
		return false
	}
	if (character.defense <= 0 || character.strength <= 0 || character.life <= 0) {
		return false
	}
	return true
}